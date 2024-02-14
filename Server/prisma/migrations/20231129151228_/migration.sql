/*
  Warnings:

  - You are about to drop the `ownerKey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userKey` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ownerKey" DROP CONSTRAINT "ownerKey_o_id_fkey";

-- DropForeignKey
ALTER TABLE "userKey" DROP CONSTRAINT "userKey_u_id_fkey";

-- DropTable
DROP TABLE "ownerKey";

-- DropTable
DROP TABLE "userKey";
