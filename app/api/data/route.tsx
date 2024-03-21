import { getAllItems, putPhoneCount,  } from "@/app/lib/db/data";
import { NextResponse } from "next/server"; //use for get and request
import { NextRequest } from "next/server"; //use for get and request


export const revalidate = 60; // 1 minute

export async function GET() {
  const items = await getAllItems();
    return NextResponse.json(items);
}

export async function POST(req : NextRequest,) {
  const data = await req.json();
  try{
    await putPhoneCount(data.username);
  } catch (error){
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
  return NextResponse.json({ message: "Incremented" });
}


