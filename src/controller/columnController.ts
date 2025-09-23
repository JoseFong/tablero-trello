import prisma from "@/lib/prisma";

export async function deleteColumn(id:number){
    await prisma.column.delete({
        where:{
            id:id
        }
    })
}

export async function createColumn(data:any){
    await prisma.column.create({
        data: {
            name: data.name,
            boardId:data.boardId
        }
    })
}

export async function updateColumn(id:number,data:any){
    await prisma.column.update({
        where: {
            id:id
        },
        data: {
            name: data.name
        }
    })
}