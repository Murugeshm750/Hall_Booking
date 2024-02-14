-- AlterTable
ALTER TABLE "Owner" ADD COLUMN     "isowner" TEXT NOT NULL DEFAULT 'owner';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isuser" TEXT NOT NULL DEFAULT 'user';
