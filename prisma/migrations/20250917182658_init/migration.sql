/*
  Warnings:

  - Added the required column `Color` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LastEdited` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Board" ADD COLUMN     "Color" TEXT NOT NULL,
ADD COLUMN     "LastEdited" TEXT NOT NULL;
