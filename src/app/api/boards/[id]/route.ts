import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { getSingleBoardWithUser } from "@/controller/boardController";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const boardId = parseInt(params.id)
        if(isNaN(boardId)) return NextResponse.json({message:"No se encontró ese tablero."},{status:400}) 

        const cookieStore = await cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400}) 
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400}) 
        
        const relation = await getSingleBoardWithUser(boardId,decoded.id)
        if(!relation || relation==="No encontrada.") return NextResponse.json({message:"No se encontró el tablero"},{status:400})
        
        return NextResponse.json(relation)
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}