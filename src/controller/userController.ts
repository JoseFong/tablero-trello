import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function getAllUsers(){
    return await prisma.user.findMany()
}

export async function getUserByUsername(username: string){
    return await prisma.user.findFirst({
        where:{
            username: username
        }
    })
}

export async function getUserByMail(mail: string){
    console.log(mail)
    return await prisma.user.findFirst({
        where: {
            email: mail
        }
    })
}

export async function createUser(data:any){
    const hashed = await bcrypt.hash(data.password,12)

    return await prisma.user.create({
        data:{
            pictureUrl: data.pictureUrl,
            username:data.username,
            email: data.email,
            password: hashed
        }
    })
}