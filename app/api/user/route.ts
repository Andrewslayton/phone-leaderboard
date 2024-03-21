
import { putUser } from "@/app/lib/db/data";
import { NextResponse } from "next/server"; //use for get and request
import { NextRequest } from "next/server"; //use for get and request


export const revalidate = 60; // 1 minute

export async function POST(req : NextRequest) {
    const data = await req.json();
    try{
        await putUser(data.username);
    } catch (error){
        console.log(error);
        return NextResponse.json({ message: "Error" }, { status: 500});
    }
    return NextResponse.json({ status: 200 });
}

