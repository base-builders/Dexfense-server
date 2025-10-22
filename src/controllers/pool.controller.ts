import { Request, Response } from 'express';
import { calculateSwapOutputFromDB, getAllPools, swapWithDB } from '../services/pool.service';

export const getPools = async (req: Request, res: Response) => {
  try {
    const poolsInfo = await getAllPools();
    res.status(200).json(poolsInfo);
  } catch (error) {
    console.error('Error fetching pools:', error);
    res.status(500).json({ message: 'Failed to fetch pools' });
  }
};

export const expectRatio = async (req: Request, res: Response) => {
    try{
        const { token1Amount, token2Amount, fee, poolId } = await calculateSwapOutputFromDB();
        res.status(200).json({ token1Amount, token2Amount, fee, poolId })
        return
    } catch(error) {
        console.log("calExpectedSwap",error);
        res.status(500).json({ message: 'Failed to calculate swap' });
    }
}

export const swap = async (req: Request, res: Response) => {
    const { token1AmountInput, token2AmountInput } = req.body;
    const userAddress = req.user?.address;

    if (!userAddress) {
        res.status(401).json({ message: 'Unauthorized: No user ID in token' });
        return;
    }
    if(!token1AmountInput && !token2AmountInput) {
        res.status(400).json({ message: 'Invalid input: both amounts are zero' });
        return;
    }

    try {
        await swapWithDB(token1AmountInput, token2AmountInput, userAddress);
        res.status(200).json({ message: 'Swap successful' });
    } catch (error) {
        console.error('Error during swap:', error);
        res.status(500).json({ message: 'Failed to perform swap' });
    }
}