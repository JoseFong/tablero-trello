import prisma from "@/lib/prisma";

export async function deleteCard(id:number){
    await prisma.card.delete({
        where:{
            id:id
        }
    })
}

export async function createCard(data:any,userId:number){
    await prisma.card.create({
        data: {
            status: data.status,
            title: data.title,
            content: data.content,
            startDate: data.startDate,
            endDate: data.endDate,
            columnId: data.columnId,
            color: data.color,
            creatorId: userId
        }
    })
}