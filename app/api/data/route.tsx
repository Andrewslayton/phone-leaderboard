import { getAllItems } from "@/app/lib/db/data";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";




export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const items = await getAllItems();
    return NextResponse.json(items);
}
