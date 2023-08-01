import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const startups = await prisma.startup.findMany();

    return NextResponse.json(startups);
}
