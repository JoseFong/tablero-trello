import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { createCard } from "@/controller/cardController";

export async function POST(req:NextRequest){
    try{
        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})

            const data = await req.json()

            const column = await prisma.column.findFirst({
                where: {
                    id: data.columnId
                }
            })

            if(!column) return NextResponse.json({message:"Hubo un error al crear la tarjeta."},{status:400})

            const relation = await prisma.userHasBoard.findFirst({
                where: {
                    AND: [
                        {userId:decoded.id},
                        {boardId:column.boardId},
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

            await createCard(data,decoded.id)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}