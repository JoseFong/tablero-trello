import { Card } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";
import { deleteCard } from "./cardController";

export async function deleteColumn(id:number){
    await prisma.column.delete({
        where:{
            id:id
        }
    })
}