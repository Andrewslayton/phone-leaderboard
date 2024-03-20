import { getAllItems } from "@/app/lib/db/data";
import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";


export const revalidate = 60; // 1 minute

export async function GET() {
  const items = await getAllItems();
    return NextResponse.json(items);
}
