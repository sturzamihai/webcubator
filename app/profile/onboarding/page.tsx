import Image from "next/image";
import StartupIllustration from "@/public/illustrations/startup.svg";
import InvestorIllustration from "@/public/illustrations/investor.svg";
import InvestorButton from "./InvestorButton";

export default function OnboardingPage() {
  return (
    <div className="h-full py-16">
      <h1 className="text-center text-3xl font-semibold pb-8">
        Welcome to WebCubator
      </h1>
      <div className="flex flex-col sm:flex-row justify-center gap-4 items-stretch mx-2">
        <div className="border p-6 rounded-md flex flex-col place-content-between">
          <Image
            src={StartupIllustration}
            alt="Startup Illustration"
            height={150}
            className="py-4 px-2"
          />
          <div className="flex flex-col px-2">
            <h1 className="text-xl font-medium">I&apos;m a</h1>
            <h1 className="uppercase font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Startup
            </h1>
            <a className="bg-purple-400 hover:cursor-not-allowed rounded-md text-center text-white p-2 w-full mt-4">
              Finish registration
            </a>
          </div>
        </div>
        <div className="border p-6 rounded-md flex flex-col place-content-between">
          <Image
            src={InvestorIllustration}
            alt="Investor Illustration"
            height={150}
            className="py-4 px-2"
          />
          <div className="flex flex-col px-2">
            <h1 className="text-xl font-medium">I&apos;m an</h1>
            <h1 className="uppercase font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              Investor
            </h1>
            <InvestorButton />
          </div>
        </div>
      </div>
    </div>
  );
}
