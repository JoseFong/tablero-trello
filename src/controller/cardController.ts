import prisma from "@/lib/prisma";

export async function deleteCard(id:number){
    await prisma.card.delete({
        where:{
            id:id
        }
    })
}