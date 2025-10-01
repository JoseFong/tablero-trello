import prisma from "@/lib/prisma";

export async function deleteTag(id:number){
    await prisma.tag.delete({
        where:{
            id:id
        }
    })
}

export async function createTag(data:any){
    await prisma.tag.create({
        data:{
            name: data.name,
            color:data.color,
            boardId: data.boardId
        }
    })
}

export async function updateTag(tagId:number,data:any){
    await prisma.tag.update({
        where: {
            id: tagId
        },
        data: {
            color: data.color,
            name: data.name
        }
    })
}
