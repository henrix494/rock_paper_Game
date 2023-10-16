import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 5;
export const fetchCache = "force-no-store";

export async function GET(request: Request) {
  try {
    const scores = await sql`SELECT * FROM scoresl ORDER BY Score DESC;`;

    return NextResponse.json({ scores }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
