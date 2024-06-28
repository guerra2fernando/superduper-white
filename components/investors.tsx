import Image from "next/image";
import Illustration from "@/public/images/enterpriseGrid.svg";
import MongoDBLogo from "@/public/images/mongodb.jpg";
import SessionLogo from "@/public/images/session.jpg";
import HetzLogo from "@/public/images/hetz.jpg";

export default function Investors() {
  return (
    <section className="relative">
      <div className="pt-10 pb-10 md:py-15">
        

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-inter-tight text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 text-center">
            Our Investors
          </h2>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center">
              <Image
                src={MongoDBLogo}
                alt="MongoDB"
                width={300}
                height={150}
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={SessionLogo}
                alt="Session"
                width={300}
                height={150}
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={HetzLogo}
                alt="Hetz"
                width={300}
                height={150}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}