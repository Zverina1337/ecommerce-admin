import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(
    request: Request
) {
    try {
        const {userId} = auth();
        const body = await request.json()

        const { name } = body;

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if(!name) {
            return new NextResponse("Name is required", { status: 400 })
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        })

        return NextResponse.json(store);

    } catch (error: any) {
        console.log('[STORES_POST]', error);
        return new NextResponse("Internal Server", { status: 500 })
    }
}