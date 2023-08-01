"use client"

import Image from "next/image";
import LinkedInLogo from "@/public/icons/linkedin.svg";
import { signIn } from "next-auth/react";

export default function LinkedInAuth() {
  return (
    <div onClick={() => signIn('linkedin')} className="bg-white border border-1 hover:border-indigo-500 hover:bg-indigo-50 transition-all hover:cursor-pointer rounded-md mx-auto p-4 my-2 flex justify-center items-center gap-2">
      <Image src={LinkedInLogo} height={25} alt="LinkedIn Icon" />
      <p className="font-medium">Sign in with LinkedIn</p>
    </div>
  );
}
