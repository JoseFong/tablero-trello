import { UserHasBoard } from "@/app/generated/prisma";
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

export async function updateUser(id:number,data:any){
    await prisma.user.update({
        where: {
            id:id
        },
        data:{
            username: data.username,
            email: data.email,
            pictureUrl: data.url
        }
    })
}

export async function updatePassword(id:number,data:any){
    const hashed = await bcrypt.hash(data.password,12)
    
    await prisma.user.update({
        where: {
            id: id
        },
        data: {
            password: hashed
        }
    })
}

export async function deleteUser(id:number){
    const relations = await prisma.userHasBoard.findMany({
        where: {
            AND: [
                {userId:id},
                {role:"Dueño"}
            ]
        }
    })

    let ids:number[] = []
    relations.map((r:UserHasBoard)=>{
        ids.push(r.boardId)
    })

    await prisma.board.deleteMany({
        where: {
            id: {
                in: ids
            }
        }
    })

    await prisma.user.delete({
        where: {
            id:id
        }
    })
}