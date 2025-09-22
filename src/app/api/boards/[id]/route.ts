import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma";
import { deleteBoard, updateBoard } from "@/controller/boardController";

export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})
        
        if(isNaN(parseInt(params.id))) return NextResponse.json({message:"No está autorizado."},{status:400})

        const boardId = parseInt(params.id)
        const userId = decoded.id

        const relation = await prisma.userHasBoard.findFirst({
            where: {
                AND: [
                    {boardId:boardId},
                    {userId:userId},
                    {role:"Dueño"}
                ]
            }
        })

        if(!relation) return NextResponse.json({message:"No está autorizado."},{status:400})

        await deleteBoard(boardId)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}

export async function PATCH(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})
        
        if(isNaN(parseInt(params.id))) return NextResponse.json({message:"No está autorizado."},{status:400})

        const boardId = parseInt(params.id)
        const userId = decoded.id
        const relation = await prisma.userHasBoard.findFirst({
            where: {
                AND: [
                    {boardId:boardId},
                    {userId:userId},
                    {role:"Dueño"}
                ]
            }
        })
        if(!relation) return NextResponse.json({message:"No está autorizado."},{status:400})

            const data = await req.json()

        await updateBoard(boardId,data)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}