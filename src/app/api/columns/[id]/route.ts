import { cookies } from "next/headers";
import { NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma";
import { deleteColumn, updateColumn } from "@/controller/columnController";

export async function PATCH(req:NextRequest,{params}:{params:{id:string}}){
    try{
        if(isNaN(parseInt(params.id))) return NextResponse.json({message:"No está autorizado."},{status:400})
        const columnId = parseInt(params.id)

        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400}) 
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400}) 

        const userId = decoded.id
        
        const column = await prisma.column.findFirst({
            where: {
                id:columnId
            }
        })
        if(!column) return NextResponse.json({message:"No se encontró la columna."},{status:400})

        const board = await prisma.board.findFirst({
            where: {
                id: column.boardId
            }
        })
        if(!board) return NextResponse.json({message:"No está autorizado."},{status:400})
        const boardId = board.id

        const relation = await prisma.userHasBoard.findFirst({
            where: {
                AND: [
                    {userId:userId},
                    {boardId:boardId},
                    {
                        OR: [
                            {role:"Dueño"},
                            {role:"Editor"}
                        ]
                    }
                ]
            }
        })

        if(!relation) return NextResponse.json({message:"No está autorizado."},{status:400}) 

        const data = await req.json()

        await updateColumn(columnId,data)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}

export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){
    try{
        if(isNaN(parseInt(params.id))) return NextResponse.json({message:"No está autorizado."},{status:400})
        const columnId = parseInt(params.id)

        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400}) 
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400}) 

        const userId = decoded.id
        
        const column = await prisma.column.findFirst({
            where: {
                id:columnId
            }
        })
        if(!column) return NextResponse.json({message:"No se encontró la columna."},{status:400})

        const board = await prisma.board.findFirst({
            where: {
                id: column.boardId
            }
        })
        if(!board) return NextResponse.json({message:"No está autorizado."},{status:400})
        const boardId = board.id

        const relation = await prisma.userHasBoard.findFirst({
            where: {
                AND: [
                    {userId:userId},
                    {boardId:boardId},
                    {
                        OR: [
                            {role:"Dueño"},
                            {role:"Editor"}
                        ]
                    }
                ]
            }
        })

        if(!relation) return NextResponse.json({message:"No está autorizado."},{status:400}) 

            await deleteColumn(columnId)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}