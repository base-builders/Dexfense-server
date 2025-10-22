import { Request, Response } from 'express';
import { insertCode } from '../services/code.service';

export const createCode = async (_: Request, res: Response) => {
  try {
    const generated = await insertCode();
    res.status(201).json({ code: generated });
    return 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Code creation failed' });
    return 
  }
};
