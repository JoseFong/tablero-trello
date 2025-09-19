import { createUser, getUserByMail, getUserByUsername } from "@/controller/userController";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function POST(req:NextRequest){
    try{
        const data = await req.json()
        let user = await getUserByMail(data.email)
        if(user) {console.log("Ya existe")
            return NextResponse.json({message:"Ya existe un usuario con este correo."},{status:400})}
            user = await getUserByUsername(data.username)
        if(user) return NextResponse.json({message:"Ya existe un usuario con este nombre de usuario."},{status:400})
    
        user = await createUser(data)



        const token = jwt.sign({id:user.id,username:user.username,email:user.email,pictureUrl:user.pictureUrl},process.env.JWT_SECRET!)
        const cookieStore = cookies()
        cookieStore.set("trellofonguserinfo",token)

        return NextResponse.json({status:200})
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}