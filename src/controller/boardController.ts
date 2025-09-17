import prisma from "@/lib/prisma";

export async function getBoardsFromUser(id:number){
    const userBoards = await prisma.userHasBoard.findMany({
        where:{
            userId: id
        },
        include: {
            board: true
        }
    })

    return userBoards
}

export async function getSingleBoardWithUser(boardId:number,userId:number){
    const relation = await prisma.userHasBoard.findFirst({
        where:{
            AND:[
                {boardId:boardId},
                {userId:userId}
            ]
        },
        include:{
            board: true
        }
    })

    if(!relation) return "No encontrada."

    const board = await prisma.board.findFirst({
        where:{
            id: boardId
        }
    })

    

    return relation
}