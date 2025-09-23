import { cookies } from "next/headers";
import { NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma";
import { createColumn } from "@/controller/columnController";

export async function POST(req:NextRequest){
    try{
        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400}) 
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400}) 

        const userId = decoded.id
        const data = await req.json()
        const boardId = data.boardId
        
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

        await createColumn(data)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}