-- CreateTable
CREATE TABLE "Pool" (
    "id" SERIAL NOT NULL,
    "memeToken" TEXT NOT NULL,
    "memeAmount" DOUBLE PRECISION NOT NULL,
    "remeToken" TEXT NOT NULL,
    "remeAmount" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoolTradeLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token1Delta" DOUBLE PRECISION NOT NULL,
    "token2Delta" DOUBLE PRECISION NOT NULL,
    "poolId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PoolTradeLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoolTreasury" (
    "id" SERIAL NOT NULL,
    "token1Symbol" TEXT NOT NULL,
    "token1Amount" DOUBLE PRECISION NOT NULL,
    "token2Symbol" TEXT NOT NULL,
    "token2Amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PoolTreasury_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoolTreasuryTradeLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token1Amount" DOUBLE PRECISION NOT NULL,
    "token2Amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "poolTreasuryId" INTEGER NOT NULL,
    "poolTradeLogId" INTEGER,

    CONSTRAINT "PoolTreasuryTradeLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameResultLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "totalMonstersKilled" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "diedAtWave" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GameResultLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameWaveLog" (
    "id" SERIAL NOT NULL,
    "gameResultId" INTEGER NOT NULL,
    "waveNumber" INTEGER NOT NULL,
    "selectedUpgradeId" TEXT NOT NULL,
    "monstersKilled" INTEGER NOT NULL,
    "monstersRemaining" INTEGER NOT NULL,
    "damageDealt" INTEGER NOT NULL,
    "damageReceived" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3) NOT NULL,
    "isFinalWave" BOOLEAN NOT NULL,

    CONSTRAINT "GameWaveLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameTreasury" (
    "id" SERIAL NOT NULL,
    "token1Symbol" TEXT NOT NULL,
    "token1Amount" DOUBLE PRECISION NOT NULL,
    "token2Symbol" TEXT NOT NULL,
    "token2Amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GameTreasury_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameTreasuryTradeLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token1Amount" DOUBLE PRECISION NOT NULL,
    "token2Amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameResultId" INTEGER NOT NULL,
    "gameTreasuryId" INTEGER NOT NULL,

    CONSTRAINT "GameTreasuryTradeLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PoolTradeLog" ADD CONSTRAINT "PoolTradeLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoolTradeLog" ADD CONSTRAINT "PoolTradeLog_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "Pool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoolTreasuryTradeLog" ADD CONSTRAINT "PoolTreasuryTradeLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoolTreasuryTradeLog" ADD CONSTRAINT "PoolTreasuryTradeLog_poolTreasuryId_fkey" FOREIGN KEY ("poolTreasuryId") REFERENCES "PoolTreasury"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoolTreasuryTradeLog" ADD CONSTRAINT "PoolTreasuryTradeLog_poolTradeLogId_fkey" FOREIGN KEY ("poolTradeLogId") REFERENCES "PoolTradeLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameResultLog" ADD CONSTRAINT "GameResultLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameWaveLog" ADD CONSTRAINT "GameWaveLog_gameResultId_fkey" FOREIGN KEY ("gameResultId") REFERENCES "GameResultLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameTreasuryTradeLog" ADD CONSTRAINT "GameTreasuryTradeLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameTreasuryTradeLog" ADD CONSTRAINT "GameTreasuryTradeLog_gameResultId_fkey" FOREIGN KEY ("gameResultId") REFERENCES "GameResultLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameTreasuryTradeLog" ADD CONSTRAINT "GameTreasuryTradeLog_gameTreasuryId_fkey" FOREIGN KEY ("gameTreasuryId") REFERENCES "GameTreasury"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
