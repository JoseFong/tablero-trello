import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma";
import { createTag } from "@/controller/tagController";

export async function POST(req:NextRequest){
    try{
        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})

        const userId:number = decoded.id
        const data = await req.json()

        const relation = await prisma.userHasBoard.findFirst({
            where: {
                AND: [
                    {userId: userId},
                    {boardId:data.boardId},
                    {
                        OR: [
                            {role: "Dueño"},
                            {role: "Editor"}
                        ]
                    }
                ]
            }
        })

        if(!relation) return NextResponse.json({message:"No está autorizado."},{status:400})

        await createTag(data)

        return NextResponse.json({status:200})

    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:200})
    }
}