import { PrismaClient } from '../../generated/prisma';
import argon2 from 'argon2';
import { generateJWT } from '../utils/generateJWT';
import { generateRandomCode } from '../utils/generateCode';
import { insertCode } from './code.service';

const prisma = new PrismaClient();

export const insertUser = async (address: string, password: string) => {

  const newCode = await insertCode();
  
  const codeEntity = await prisma.code.findUnique({
    where: { code: newCode },
  });

  if (!codeEntity) {
    throw new Error('Invalid code');
  }

  if (codeEntity.userId) {
    throw new Error('Code already used');
  }

  const hashedPassword = await argon2.hash(password);

  const user = await prisma.user.create({
    data: {
      address,
      password: hashedPassword,
      codeId: codeEntity.id,
      token1Amount: 30,
      token2Amount: 6000,
    },
  });

  // await prisma.code.update({
  //   where: { id: codeEntity.id },
  //   data: { userId: user.id },
  // });

  return user;
};

export const getAccessToken = async (address: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { address },
    });
    
    if (!user) {
        throw new Error('User not found');
    }
    
    const isPasswordValid = await argon2.verify(user.password, password);
    
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    const accessToken = generateJWT(user.address, user.role, user.token1Amount, user.token2Amount);

    return accessToken;
}