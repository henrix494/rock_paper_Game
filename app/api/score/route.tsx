import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const { name, score } = await requestBody;

    if (!name || !score) {
      return new Response(JSON.stringify("Name is a must"), { status: 500 });
    }
    const existingName = await sql`SELECT 1 FROM scores WHERE Name = ${name};`;

    if (existingName.rowCount > 0) {
      // Name already exists, return an error
      return new Response(JSON.stringify("Name already exists"), {
        status: 500,
      });
    }
    await sql`INSERT INTO scores (Name, Score) VALUES (${name}, ${score});`;

    const scores = await sql`SELECT * FROM scores;`;

    return NextResponse.json({ scores }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
