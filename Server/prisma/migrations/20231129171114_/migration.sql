-- AlterTable
ALTER TABLE "Owner" ALTER COLUMN "isowner" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isuser" DROP DEFAULT;

-- CreateTable
CREATE TABLE "passkey" (
    "isowner" TEXT NOT NULL DEFAULT 'owner',
    "isuser" TEXT NOT NULL DEFAULT 'user'
);

-- CreateIndex
CREATE UNIQUE INDEX "passkey_isowner_key" ON "passkey"("isowner");

-- CreateIndex
CREATE UNIQUE INDEX "passkey_isuser_key" ON "passkey"("isuser");
