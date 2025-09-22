import prisma from "@/lib/prisma";

export async function getAllInfoFromBoard(boardId:number,userId:number){
    const relations = await prisma.userHasBoard.findMany({
        where:{
            boardId: boardId
        },
        include:{
            user: true
        }
    })

    const board = await prisma.board.findFirst({
        where: {
            id: boardId
        }
    })

    const columns = await prisma.column.findMany({
        where: {
            boardId: boardId
        },
        include:{
            Card: {
                include: {
                    CardHasTag: {
                        include: {
                            tag: true
                        }
                    }
                }
            }
        }
    })

    const tags = await prisma.tag.findMany({
        where: {
            boardId: boardId
        }
    })

    const result = {
        relations: relations,
        board: board,
        columns: columns,
        tags: tags,
    }

    return result
}