import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma"
import { getAllInfoFromBoard } from "@/controller/GeneralInfoController"

export async function GET(req:NextRequest,{params}:{params:{id:number}}){
    try{
        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400}) 
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400}) 

        if(isNaN(parseInt(params.id+""))) return NextResponse.json({message:"No se encontró el tablero."},{status:400}) 

        const boardId = parseInt(params.id+"")
        const userId = parseInt(decoded.id)

        console.log(boardId+" "+userId)

        const relation = await prisma.userHasBoard.findFirst({
            where: {
                AND: [
                    {userId:userId},
                    {boardId:boardId}
                ]
            }
        })

        console.log(relation)

        if(!relation) return NextResponse.json({message:"No está autorizado."},{status:400}) 

        const data = await getAllInfoFromBoard(parseInt(params.id+""),parseInt(decoded.id))

        return NextResponse.json(data)
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}