-- CreateTable
CREATE TABLE "userKey" (
    "u_id" INTEGER NOT NULL,
    "u_username" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ownerKey" (
    "o_id" INTEGER NOT NULL,
    "o_username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userKey_u_id_key" ON "userKey"("u_id");

-- CreateIndex
CREATE UNIQUE INDEX "userKey_u_username_key" ON "userKey"("u_username");

-- CreateIndex
CREATE UNIQUE INDEX "ownerKey_o_id_key" ON "ownerKey"("o_id");

-- CreateIndex
CREATE UNIQUE INDEX "ownerKey_o_username_key" ON "ownerKey"("o_username");

-- AddForeignKey
ALTER TABLE "userKey" ADD CONSTRAINT "userKey_u_id_fkey" FOREIGN KEY ("u_id") REFERENCES "User"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ownerKey" ADD CONSTRAINT "ownerKey_o_id_fkey" FOREIGN KEY ("o_id") REFERENCES "Owner"("o_id") ON DELETE RESTRICT ON UPDATE CASCADE;
