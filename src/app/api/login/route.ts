import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function GET(req:NextRequest){
    try{
            const cookieStore = await cookies()
    cookieStore.delete("trellofonguserinfo")
    return NextResponse.json({status:200})
        }catch(e:any){
            return NextResponse.json({message:"Error 500: "+e.message},{status:500})
        }
}

export async function POST(req:NextRequest){
    try{
        const data = await req.json()

        let user = await prisma.user.findFirst({
            where:{
                OR:
                    [{
                        username: data.username
                    },{
                        email: data.username
                    }]
            }
        })

        if(!user){
            return NextResponse.json({message:"Credenciales incorrectas"},{status:400})
        }else{
            const valid = await bcrypt.compare(data.password,user.password)
            if(!valid){
                return NextResponse.json({message:"Credenciales incorrectas"},{status:400})
            }else{
                const token = jwt.sign({id:user.id,username:user.username,email:user.email,pictureUrl:user.pictureUrl},process.env.JWT_SECRET!)
                        const cookieStore = cookies()
                        cookieStore.set("trellofonguserinfo",token)
            }
        }
    return NextResponse.json({status:200})
        }catch(e:any){
            return NextResponse.json({message:"Error 500: "+e.message},{status:500})
        }
}