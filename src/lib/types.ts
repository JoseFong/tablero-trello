import { Tag, User } from "@/app/generated/prisma";

export type Relation = {
    id: number;
    role: string;
    boardId: number;
    userId: number;
    user: User;
  };

  export type Column = {
    id: number;
    name: string;
    boardId: number;
    order: number;
    Card: Card[];
  };

export   type Card = {
    id: number;
    status: string;
    title: string;
    content: string;
    starDate: string | null;
    endDate: string | null;
    CardHasTag: CardHasTag[];
    creatorId: number;
    columnId: number;
    color: string;
  };

 export  type CardHasTag = {
    id: number;
    tagId: number;
    cardId: number;
    tag: Tag;
  };