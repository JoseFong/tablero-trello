import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req:NextRequest){
    try{
const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})

            const userId = parseInt(decoded.id)

        const user = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })

        if(!user)  return NextResponse.json({message:"Usuario no encontrado."},{status:400})

            const data = await req.json()


        const valid = await bcrypt.compare(data.password,user.password)
        if(!valid)  return NextResponse.json({message:"Contraseña incorrecta."},{status:400})

            return NextResponse.json({status:200})
    }catch(e:any){
return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}