import prisma from "@/lib/prisma";

export async function deleteTag(id:number){
    await prisma.tag.delete({
        where:{
            id:id
        }
    })
}