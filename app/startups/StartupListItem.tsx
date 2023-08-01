import { Startup } from "@prisma/client";
import Link from "next/link";

export default function StartupListItem({ startup }: { startup: Startup }) {
  return (
    <div className="flex flex-row gap-4 p-4 border rounded-md">
      <div className="w-[200px] rounded-md">
        <img
          src={startup.logo}
          alt={startup.name + " logo"}
          className="object-cover rounded-md"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{startup.name}</h2>
        <h3 className="text-sm font-light">Domain: {startup.domain}</h3>
        <p>{startup.description.substring(0, 100)}</p>
        <div className="mt-4">
          <Link href={`/startups/${startup.slug}`} className="text-purple-600">
            Find out more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
