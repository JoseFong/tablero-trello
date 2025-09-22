import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { getBoardsFromUser } from "@/controller/boardController";
import prisma from "@/lib/prisma";
import { deleteUser, updatePassword, updateUser } from "@/controller/userController";

export async function PATCH(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const userId = parseInt(params.id)
        if(isNaN(userId)) return NextResponse.json({message:"Id del usuario no encontrada."},{status:400})

        const cookieStore = await cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})
        if(decoded.id!==userId) return NextResponse.json({message:"No está autorizado."},{status:400})

        const data = await req.json()

        let user = await prisma.user.findFirst({
            where: {
                username:data.username
            }
        })
        if(user && user.id!==userId){
            return NextResponse.json({message:"Ya existe un usuario con ese nombre."},{status:400})
        }

        user = await prisma.user.findFirst({
            where: {
                email: data.email
            }
        })
        if(user && user.id!==userId) return NextResponse.json({message:"Ya existe un usuario con ese correo."},{status:400})

        
        await updateUser(userId,data)

        return NextResponse.json({status:200})

    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}

export async function PUT(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const userId = parseInt(params.id)
        if(isNaN(userId)) return NextResponse.json({message:"Id del usuario no encontrada."},{status:400})

        const cookieStore = await cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})
        if(decoded.id!==userId) return NextResponse.json({message:"No está autorizado."},{status:400})

        const data = await req.json()
        
        await updatePassword(userId,data)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}

export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const userId = parseInt(params.id)
        if(isNaN(userId)) return NextResponse.json({message:"Id del usuario no encontrada."},{status:400})

        const cookieStore = await cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})
        if(decoded.id!==userId) return NextResponse.json({message:"No está autorizado."},{status:400})
        
        await deleteUser(userId)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}
