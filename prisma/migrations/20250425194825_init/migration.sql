/*
  Warnings:

  - You are about to drop the column `diedAtWave` on the `GameResultLog` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `GameResultLog` table. All the data in the column will be lost.
  - You are about to drop the column `token1Symbol` on the `GameTreasury` table. All the data in the column will be lost.
  - You are about to drop the column `token2Symbol` on the `GameTreasury` table. All the data in the column will be lost.
  - You are about to drop the `GameTreasuryTradeLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GameWaveLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PoolTradeLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PoolTreasuryTradeLog` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `difficulty` to the `GameResultLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastWave` to the `GameResultLog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'NORMAL', 'HARD');

-- DropForeignKey
ALTER TABLE "GameTreasuryTradeLog" DROP CONSTRAINT "GameTreasuryTradeLog_gameResultId_fkey";

-- DropForeignKey
ALTER TABLE "GameTreasuryTradeLog" DROP CONSTRAINT "GameTreasuryTradeLog_gameTreasuryId_fkey";

-- DropForeignKey
ALTER TABLE "GameTreasuryTradeLog" DROP CONSTRAINT "GameTreasuryTradeLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "GameWaveLog" DROP CONSTRAINT "GameWaveLog_gameResultId_fkey";

-- DropForeignKey
ALTER TABLE "PoolTradeLog" DROP CONSTRAINT "PoolTradeLog_poolId_fkey";

-- DropForeignKey
ALTER TABLE "PoolTradeLog" DROP CONSTRAINT "PoolTradeLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "PoolTreasuryTradeLog" DROP CONSTRAINT "PoolTreasuryTradeLog_poolTradeLogId_fkey";

-- DropForeignKey
ALTER TABLE "PoolTreasuryTradeLog" DROP CONSTRAINT "PoolTreasuryTradeLog_poolTreasuryId_fkey";

-- DropForeignKey
ALTER TABLE "PoolTreasuryTradeLog" DROP CONSTRAINT "PoolTreasuryTradeLog_userId_fkey";

-- AlterTable
ALTER TABLE "GameResultLog" DROP COLUMN "diedAtWave",
DROP COLUMN "startedAt",
ADD COLUMN     "difficulty" "Difficulty" NOT NULL,
ADD COLUMN     "lastWave" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "GameTreasury" DROP COLUMN "token1Symbol",
DROP COLUMN "token2Symbol";

-- DropTable
DROP TABLE "GameTreasuryTradeLog";

-- DropTable
DROP TABLE "GameWaveLog";

-- DropTable
DROP TABLE "PoolTradeLog";

-- DropTable
DROP TABLE "PoolTreasuryTradeLog";
