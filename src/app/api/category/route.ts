import prisma from "@/libs/prisma-global";

type modelCategory = {
    id : number
    name : string
}


export async function GET(request: Request) {
    try {
        const response = await prisma.category.findMany();

        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        if (response.length === 0) {
            return Response.json({
                status : 200,
                message : "Data belum ada",
            })
        } else if (id) {
            return Response.json({
                status : 200,
                message : "Success",
                data : response.filter((data : modelCategory) => {
                    return data.id == Number(id)
                })
            })  
        } 
        else {
            return Response.json({ 
                status : 200,
                message : "Success",
                data : response
             })
        }

    } catch (error) {
        console.log(error);
    }
}

export async function PATCH(request: Request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        const { name } = await request.json();

        const findSameCategory = await prisma.category.findFirst({
            where : {
                name : name
            }
        })

        if (findSameCategory) {

            await prisma.activity.create({
                data  : {
                    name : "error",
                    description : `Sorry, category ${name} already exists`
                }
            })

            return Response.json({
                status : 400,
                message : `Data ${name} already exists`,
            })
        }


        await prisma.activity.create({
            data  : {
                name : "update",
                description : `Successfully update category ${name}`
            }
        })


        const response = await prisma.category.update({
            where : {
                id : Number(id)
            },
            data : {
                name : name
            }
        })

        return Response.json({ 
            status : 200,
            message : "Success",
            data : response
         })

    } catch (error) {
        console.log(error);
    }
}

export async function POST(request: Request) {
    try {
        const { name } = await request.json();

        const findSameCategory = await prisma.category.findFirst({
            where : {
                name : name
            }
        })

        if (findSameCategory) {
            await prisma.activity.create({
                data  : {
                    name : "error",
                    description : `Sorry, category ${name} already exists`
                }
            })

            return Response.json({
                status : 400,
                message : `Data ${name} already exists`,
            })
        }

        await prisma.activity.create({
            data  : {
                name : "create",
                description : `Successfully create category ${name}`
            }
        })
        const response = await prisma.category.create({
            data : {
                name : name
            }
        })

        return Response.json({ 
            status : 200,
            message : "Success",
            data : response
         })
    } catch (error) {
        console.log(error);
    }
}

export async function DELETE(request: Request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        const response = await prisma.category.delete({
            where : {
                id : Number(id)
            }
        })

        await prisma.activity.create({
            data  : {
                name : "delete",
                description : `Successfully delete category with id ${id}`
            }
        })
        return Response.json({ 
            status : 200,
            message : "Deleted Success",
            data : response
         })
    } catch (error) {
        console.log(error);
    }
}