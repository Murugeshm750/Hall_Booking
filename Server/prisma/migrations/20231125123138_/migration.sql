/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Owner" (
    "o_id" SERIAL NOT NULL,
    "o_name" TEXT NOT NULL,
    "o_contact" TEXT NOT NULL,
    "o_address" TEXT NOT NULL,
    "o_email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Owner_o_id_key" ON "Owner"("o_id");
