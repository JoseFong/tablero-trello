/*
  Warnings:

  - Added the required column `columnId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Column` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Card" ADD COLUMN     "columnId" INTEGER NOT NULL,
ADD COLUMN     "tags" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Column" ADD COLUMN     "order" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "public"."Column"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
