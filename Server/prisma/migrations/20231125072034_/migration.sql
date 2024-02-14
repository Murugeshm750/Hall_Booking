-- CreateTable
CREATE TABLE "User" (
    "u_id" SERIAL NOT NULL,
    "u_name" TEXT NOT NULL,
    "u_contact" TEXT NOT NULL,
    "u_address" TEXT NOT NULL,
    "u_email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_u_id_key" ON "User"("u_id");
