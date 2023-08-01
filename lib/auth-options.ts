import { prisma } from "@/lib/database";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      LinkedInProvider({
        clientId: process.env.LINKEDIN_CLIENT_ID as string,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      }),
    ],
    pages: {
      signIn: "/auth",
      newUser: "/profile/onboarding",
    },
  };