/*
  Warnings:

  - You are about to drop the column `code` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[codeId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codeId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_code_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "code",
ADD COLUMN     "codeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Code" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Code_code_key" ON "Code"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_codeId_key" ON "User"("codeId");
