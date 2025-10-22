import { PrismaClient } from '../../generated/prisma';
import { generateRandomCode } from '../utils/generateCode';

const prisma = new PrismaClient();

export const getCodeByValue = async (codeValue: string) => {
  return prisma.code.findUnique({
    where: { code: codeValue },
  });
};

export const insertCode = async (): Promise<string> => {
  let newCode = '';
  let existing = null;

  for (let i = 0; i < 10; i++) {
    newCode = generateRandomCode();
    existing = await getCodeByValue(newCode);
    if (!existing) break;
  }

  if (existing) {
    throw new Error('Failed to generate a unique code after 10 tries.');
  }

  await prisma.code.create({
    data: { code: newCode },
  });

  return newCode;
};