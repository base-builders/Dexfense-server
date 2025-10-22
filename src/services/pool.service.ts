import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();
const FEE_RATE = 0.005;

export const getAllPools = async () => {
  return prisma.pool.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
  });
};

export const calculateSwapOutputFromDB = async () => {
  const pool = await prisma.pool.findFirst();
  if (!pool) throw new Error('Pool not found');

  const reserveIn = pool.token1Amount;
  const reserveOut = pool.token2Amount;

  const amountInWithFee = 1 * (1 - FEE_RATE);
  const numerator = amountInWithFee * reserveOut;
  const denominator = reserveIn + amountInWithFee;
  const token2Amount = numerator / denominator;

  return {
    token1Amount: 1,
    token2Amount,
    fee: 1 * FEE_RATE,
    poolId: pool.id,
  };
};

export const executeGameResult = async (input: number, resultAmountRatio: number, userId: number) => {
  const pool = await prisma.pool.findFirst();
  const gameTreasury = await prisma.gameTreasury.findFirst();
  const { token1Amount, token2Amount, fee, poolId } = await calculateSwapOutputFromDB();
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  
  if (!user) throw new Error('User not found');

  const resultAmount = resultAmountRatio * input * token2Amount;

  const token1AmountInPool = pool?.token1Amount;
  const token2AmountInPool = pool?.token2Amount;
  const token1SavedFee = pool?.token1SavedFee;

  if (resultAmountRatio >= 1) {
    await prisma.pool.update({
      where: { id: pool?.id },
      data: {
        token1Amount: token1AmountInPool! + input * (1 - fee),
        token2Amount: token2AmountInPool! - token2Amount * input,
        token1SavedFee: token1SavedFee! + fee * input,
      },
    });

    await prisma.gameTreasury.update({
      where: { id: gameTreasury?.id },
      data: {
        token2Amount: gameTreasury?.token2Amount! - resultAmount + token2Amount * input,
      },
    });

  } else {
    await prisma.pool.update({
      where: { id: poolId },
      data: {
        token1Amount: token1AmountInPool! + input * (1 - fee),
        token2Amount: token2AmountInPool! + (token2Amount * input - resultAmount) / 2,
        token1SavedFee: token1SavedFee! + fee * input,
      },
    });
    await prisma.gameTreasury.update({
      where: { id: gameTreasury?.id },
      data: {
        token2Amount: gameTreasury?.token2Amount! + (token2Amount * input - resultAmount) / 2,
      },
    });
  }


  await prisma.user.update({
    where: { id: userId },
    data: {
      token1Amount: user.token1Amount - input,
      token2Amount: user.token2Amount + resultAmount,
    },
  });

}

export const swapWithDB = async (token1AmountInput: number, token2AmountInput: number, userAddress: string) => {
  const user = await prisma.user.findUnique({
    where: { address: userAddress },
  });
  const pool = await prisma.pool.findFirst();

  console.log(user?.token1Amount, user?.token2Amount, token1AmountInput, token2AmountInput);

  if ((token1AmountInput == 0 && token2AmountInput == 0) || (token1AmountInput > 0 && token2AmountInput > 0)) {
    console.log(user?.token1Amount, user?.token2Amount, token1AmountInput, token2AmountInput);
    console.error("Invalid amounts");
    throw new Error('Invalid amounts');
  }

  if (token1AmountInput > user?.token1Amount! || token2AmountInput > user?.token2Amount!) {
    console.log(user?.token1Amount, user?.token2Amount, token1AmountInput, token2AmountInput);
    console.error("Not enough balance");
    throw new Error('Not enough token1');
  }

  const { token1Amount, token2Amount, fee, poolId } = await calculateSwapOutputFromDB();

  if (token1AmountInput > 0) {
    await prisma.pool.update({
      where: { id: pool?.id },
      data: {
        token1Amount: pool?.token1Amount! + token1AmountInput * (1 - fee),
        token2Amount: pool?.token2Amount! - token2Amount * token1AmountInput* (1 - fee),
        token2SavedFee: pool?.token2SavedFee! + fee * token1AmountInput,
      },
    });

    await prisma.user.update({
      where: { id: user?.id },
      data: {
        token1Amount: user?.token1Amount! - token1AmountInput,
        token2Amount: user?.token2Amount! + token2Amount * token1AmountInput* (1 - fee),
      },
    });
    return
  }

  if (token2AmountInput > 0) {
    await prisma.pool.update({
      where: { id: pool?.id },
      data: {
        token1Amount: pool?.token1Amount! - token2AmountInput * (1 - fee)/ token2Amount,
        token2Amount: pool?.token2Amount! + token2AmountInput * (1 - fee),
        token1SavedFee: pool?.token1SavedFee! + fee * token2AmountInput,
      },
    });

    await prisma.user.update({
      where: { id: user?.id },
      data: {
        token1Amount: user?.token1Amount! + token2AmountInput * (1 - fee)/ token2Amount,
        token2Amount: user?.token2Amount! - token2AmountInput,
      },
    });
    return
  }
}