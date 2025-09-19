/*
  Warnings:

  - You are about to drop the column `creator` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the `_CardToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pictureUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_columnId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Column" DROP CONSTRAINT "Column_boardId_fkey";

-- DropForeignKey
ALTER TABLE "public"."List" DROP CONSTRAINT "List_cardId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ListItem" DROP CONSTRAINT "ListItem_listId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Tag" DROP CONSTRAINT "Tag_boardId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserHasBoard" DROP CONSTRAINT "UserHasBoard_boardId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserHasBoard" DROP CONSTRAINT "UserHasBoard_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_CardToUser" DROP CONSTRAINT "_CardToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_CardToUser" DROP CONSTRAINT "_CardToUser_B_fkey";

-- AlterTable
ALTER TABLE "public"."Card" DROP COLUMN "creator",
DROP COLUMN "tags",
ADD COLUMN     "creatorId" INTEGER;

-- AlterTable
ALTER TABLE "public"."Tag" ADD COLUMN     "cardId" INTEGER;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "pictureUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."_CardToUser";

-- CreateTable
CREATE TABLE "public"."CardAssignment" (
    "id" SERIAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CardAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CardHasTag" (
    "id" SERIAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "CardHasTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."UserHasBoard" ADD CONSTRAINT "UserHasBoard_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "public"."Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserHasBoard" ADD CONSTRAINT "UserHasBoard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tag" ADD CONSTRAINT "Tag_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "public"."Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "public"."Column"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."List" ADD CONSTRAINT "List_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "public"."Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ListItem" ADD CONSTRAINT "ListItem_listId_fkey" FOREIGN KEY ("listId") REFERENCES "public"."List"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Column" ADD CONSTRAINT "Column_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "public"."Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CardAssignment" ADD CONSTRAINT "CardAssignment_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "public"."Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CardAssignment" ADD CONSTRAINT "CardAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CardHasTag" ADD CONSTRAINT "CardHasTag_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "public"."Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CardHasTag" ADD CONSTRAINT "CardHasTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
