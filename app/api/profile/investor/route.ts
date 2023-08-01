import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth-options";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/database";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user)
    return NextResponse.json({ message: "Not logged in." }, { status: 401 });

  const investorProfile = await prisma.investor.findFirst({
    where: {
      user: {
        email: session.user.email,
      },
    },
  });

  if (investorProfile) {
    return NextResponse.json({ message: "Already created." }, { status: 400 });
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  return NextResponse.json({ message: "Success" });
}
