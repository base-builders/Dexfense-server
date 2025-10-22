import { Request, Response } from 'express';
import { insertUser, getAccessToken } from '../services/user.service';
import { PrismaClient } from '../../generated/prisma'; // ← 이거면 타입이 안 맞을 수 있음


const prisma = new PrismaClient();

export const getUsers = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const Signin = async (req: Request, res: Response) => {
  const { address, password } = req.body;
  if (!address || !password) {
    res.status(400).json({ message: 'Address and password are required' });
    return;
  }
  try {
    const accessToken = await getAccessToken(address, password);
    if (!accessToken) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    res.status(204).send();
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
    return;
  }
}

export const Signup = async (req: Request, res: Response) => {
  const { address, password } = req.body;

  if (!address) {
    res.status(400).json({ message: 'Address is required' });
    return;
  }

  try {
    const user = await insertUser(address, password);
    const safeUser = {
      address: user.address,
      createdAt: user.createdAt,
    };
    res.status(201).json(safeUser);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
    return;
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { address } = req.query;

  if (typeof address !== 'string') {
    res.status(400).json({ message: 'Address is required' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { address },
    });
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    const safeUser = {
      address: user.address,
      createdAt: user.createdAt,
      token1Amount: user.token1Amount,
      token2Amount: user.token2Amount,
    };
    res.json(safeUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
