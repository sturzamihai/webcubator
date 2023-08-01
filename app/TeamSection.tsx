import Image from "next/image";
import MariaImage from "@/public/team/maria.jpeg"
import AnaImage from "@/public/team/ana.jpeg"
import RaresImage from "@/public/team/rares.jpeg"
import MihaiImage from "@/public/team/mihai.jpeg"
import DumiImage from "@/public/team/dumitrita.jpeg"

const people = [
  {
    name: "Maria Halmaghi",
    role: "(Serious) CEO",
    image: MariaImage
  },
  {
    name: "Rareș Dăscălescu",
    role: "Marketing Wizard",
    image: RaresImage
  },
  {
    name: "Dumitrița Rogojinaru",
    role: "Legal Master",
    image: DumiImage
  },
  {
    name: "Ana Ștefan",
    role: "Tech Savvy",
    image: AnaImage
  },
  {
    name: "Mihai Sturza",
    role: "Machine Tamer",
    image: MihaiImage
  },
];

export default function TeamSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re the dedicated team behind WebCubator.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.image}
                  alt={person.name + " profile picture"}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
