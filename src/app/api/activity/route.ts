import prisma from "@/libs/prisma-global";


export async function GET() {
    try {
        const response = await prisma.activity.findMany( {
            orderBy: {
                createdAt: 'desc'
            }
        });

        if (response.length === 0) {
            return Response.json({
                status: 200,
                message: "Belum ada aktivitas",
                data: response
            })
        } else {
            return Response.json({
                status: 200,
                message: "Success",
                data: response
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export async function POST(request: Request) {
    try {
        const { name, description } = await request.json();

        const response = await prisma.activity.create({
            data: {
                name: name,
                description: description
            }
        });


        return Response.json({
            status: 201,
            message: "Success",
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}