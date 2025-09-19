import { Board, Column, Tag } from "@/app/generated/prisma";

export interface Info {
  board: Board;
  columns: Column[];
  tags: Tag[];
}