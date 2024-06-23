import prisma from "@/libs/prisma-global";


type modelBengkel = {
    id: number
    name: string
    alamat: string
    buka: string
    telp: string
    latitude: string
    longitude: string
    category: {
        name: string
    }
}

export async function GET(request: Request) {
    try {
        const response = await prisma.bengkel.findMany({
            include: {
                category: true
            }
        });

        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        const formattedData = response.map((bengkel : modelBengkel) => ({
            id: bengkel.id,
            name: bengkel.name,
            alamat: bengkel.alamat,
            buka: bengkel.buka,
            telp: bengkel.telp,
            latitude: parseFloat(bengkel.latitude),
            longitude: parseFloat(bengkel.longitude),
            category: {
                name: bengkel.category.name,
            },
        }));


        if (response.length === 0) {
            await prisma.activity.create({
                data  : {
                    name : "error",
                    description : `Maaf, data bengkel masih kosong`,
                }
            })
            return Response.json({
                status: 200,
                message: "Data belum ada",
            })
        } else if (id) {
            return Response.json({
                status: 200,
                message: "Success",
                data: response.filter((data : modelBengkel) => {
                    return data.id == Number(id)
                }),
            });
        } 
        else {
            return Response.json({
                status: 200,
                message: "Success",
                data: formattedData
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export async function POST(request: Request) {
    try {
        const { name, categoryId, alamat, buka, telp, latitude, longitude } = await request.json();

        // console.table({ name, categoryId, alamat, buka, telp, latitude, longitude })


        const findSameBengkel = await prisma.bengkel.findFirst({
            where: {
                name: name
            }
        })

        if (findSameBengkel) {
            await prisma.activity.create({
                data  : {
                    name : "error",
                    description : `maaf, bengkel ${name} sudah ada`,
                }
            })
            return Response.json({
                status: 400,
                message: `Data ${name} already exists`,
            })
        }


        const response = await prisma.bengkel.create({
            data: {
                name: name,
                categoryId: Number(categoryId),
                alamat: alamat,
                buka: buka,
                telp: telp,
                latitude: latitude,
                longitude: longitude
            }
        })

        await prisma.activity.create({
            data  : {
                name : "create",
                description : `Successfully create bengkel ${name}`
            }
        })

        return Response.json({
            status: 201,
            message: "Created Success",
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

export async function PATCH(request: Request) {
    try {
        const { name, categoryId, alamat, buka, telp, latitude, longitude } = await request.json();
        const url = new URL(request.url);
        const id = url.searchParams.get("id");
        
        const response = await prisma.bengkel.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name,
                categoryId: Number(categoryId),
                alamat: alamat,
                buka: buka,
                telp: telp,
                latitude: latitude,
                longitude: longitude
            }
        })

        await prisma.activity.create({
            data  : {
                name : "update",
                description : `Successfully update bengkel ${name}`
            }
        })

        return Response.json({
            status: 200,
            message: "Updated Success",
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}


export async function DELETE(request: Request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        const response = await prisma.bengkel.delete({
            where: {
                id: Number(id)
            }
        })

        await prisma.activity.create({
            data  : {
                name : "delete",
                description : `Successfully delete bengkel with id ${id}`
            }
        })
        
        return Response.json({
            status: 200,
            message: "Deleted Success",
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}