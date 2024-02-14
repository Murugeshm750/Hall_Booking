-- CreateTable
CREATE TABLE "Hall" (
    "h_id" SERIAL NOT NULL,
    "h_name" TEXT NOT NULL,
    "h_location" TEXT NOT NULL,
    "h_price" BIGINT NOT NULL,
    "h_img" BYTEA NOT NULL,
    "h_size_from" INTEGER NOT NULL,
    "h_size_to" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Hall_h_id_key" ON "Hall"("h_id");
