import prisma from "@/libs/prisma-global";


export async function GET(request: Request) {
    try {
        const countCategory = await prisma.category.count();
        const countBengkel = await prisma.bengkel.count();

        return Response.json({
            status : 200,
            message : "Success",
            data : {
                category : countCategory,
                bengkel : countBengkel
            }
        })
    } catch (error) {
        console.log(error);
    }
}