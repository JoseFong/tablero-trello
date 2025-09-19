import prisma from "@/lib/prisma";

export async function createUserHasBoard(userId:number,boardId:number,role:string){
    return await prisma.userHasBoard.create({
        data:{
            userId: userId,
            boardId: boardId,
            role: role
        }
    })
}

export async function deleteUserHasBoard(id:number){
    await prisma.userHasBoard.delete({
        where: {
            id: id
        }
    })
}