import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { createBoard } from "@/controller/boardController";
import { createUserHasBoard } from "@/controller/userHasBoardController";

export async function POST(req:NextRequest){
    try{
        const cookieStore = await cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400}) 
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400}) 

        const data = await req.json()
        const board = await createBoard(data)
        await createUserHasBoard(parseInt(decoded.id),board.id,"Dueño")

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}