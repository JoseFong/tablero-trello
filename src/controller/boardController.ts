import { Column, Tag, UserHasBoard } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";
import { deleteUserHasBoard } from "./userHasBoardController";
import { deleteColumn } from "./columnController";
import { deleteTag } from "./tagController";

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

export async function createBoard(data:any){
    const now = new Date()
    const isoDate = now.toISOString()

    return await prisma.board.create({
        data: {
            name: data.name,
            LastEdited: isoDate+"",
            Color: data.color
        }
    })
}

export async function deleteBoard(id:number){
   await prisma.board.delete({
    where:{
        id: id
    }
   })
}

export async function updateBoard(id:number,data:any){
    await prisma.board.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            Color: data.color
        }
    })
}