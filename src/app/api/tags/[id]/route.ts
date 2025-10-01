import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import prisma from "@/lib/prisma"
import { deleteTag, updateTag } from "@/controller/tagController"

export async function PATCH(req:NextRequest,{params}:{params:{id:string}}){
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

        await updateTag(parseInt(params.id),data)

        return NextResponse.json({status:200})

    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:200})
    }
}

export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const cookieStore = cookies()
        const cookie = cookieStore.get("trellofonguserinfo")
        if(!cookie) return NextResponse.json({message:"No está autorizado."},{status:400})
        const decoded:any = jwt.verify(cookie.value,process.env.JWT_SECRET!)
        if(!decoded.id) return NextResponse.json({message:"No está autorizado."},{status:400})
        const userId:number = decoded.id


        const tag = await prisma.tag.findFirst({
            where: {
                id: parseInt(params.id)
            }
        })
        
        if(!tag) return NextResponse.json({message:"No está autorizado."},{status:400})

        const relation = await prisma.userHasBoard.findFirst({
            where: {
                AND: [
                    {userId: userId},
                    {boardId:tag.boardId},
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

        await deleteTag(parseInt(params.id))

        return NextResponse.json({status:200})

    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:200})
    }
}