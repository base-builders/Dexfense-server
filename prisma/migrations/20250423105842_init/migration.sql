/*
  Warnings:

  - You are about to drop the column `memeAmount` on the `Pool` table. All the data in the column will be lost.
  - You are about to drop the column `memeToken` on the `Pool` table. All the data in the column will be lost.
  - You are about to drop the column `remeAmount` on the `Pool` table. All the data in the column will be lost.
  - You are about to drop the column `remeToken` on the `Pool` table. All the data in the column will be lost.
  - You are about to drop the column `token1Symbol` on the `PoolTreasury` table. All the data in the column will be lost.
  - You are about to drop the column `token2Symbol` on the `PoolTreasury` table. All the data in the column will be lost.
  - Added the required column `token1Amount` to the `Pool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token2Amount` to the `Pool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pool" DROP COLUMN "memeAmount",
DROP COLUMN "memeToken",
DROP COLUMN "remeAmount",
DROP COLUMN "remeToken",
ADD COLUMN     "token1Amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "token2Amount" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "PoolTreasury" DROP COLUMN "token1Symbol",
DROP COLUMN "token2Symbol";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "token1Amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "token2Amount" DOUBLE PRECISION NOT NULL DEFAULT 0;
