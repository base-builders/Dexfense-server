/*
  Warnings:

  - You are about to drop the column `token1Amount` on the `GameTreasury` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GameTreasury" DROP COLUMN "token1Amount",
ALTER COLUMN "token2Amount" SET DEFAULT 0;
