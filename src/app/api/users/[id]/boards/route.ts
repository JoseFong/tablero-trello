import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { getBoardsFromUser } from "@/controller/boardController";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const userId = parseInt(params.id)
        if(isNaN(userId)) return NextResponse.json({message:"Id del usuario no encontrada."},{status:400})

        const cookieStore = await cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})
        if(decoded.id!==userId) return NextResponse.json({message:"No está autorizado."},{status:400})

        const boards = await getBoardsFromUser(userId)
        return NextResponse.json(boards)
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}