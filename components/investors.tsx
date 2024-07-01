import Image from "next/image";
import MongoDBLogo from "@/public/images/mongodb.png";
import SessionLogo from "@/public/images/session.png";
import HetzLogo from "@/public/images/hetz.png";

export default function Investors() {
  return (
    <section className="relative">
      <div className="pt-10 pb-10 md:py-15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-inter-tight text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 text-center">
            Our Investors
          </h2>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
            {[MongoDBLogo, SessionLogo, HetzLogo].map((logo, index) => (
              <article key={index} className="flex flex-col border [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg w-[330px]">
                <div className="grow flex flex-col p-5 pt-6">
                  <div className="flex items-center justify-center h-[150px]">
                    <Image
                      src={logo}
                      alt={`Investor ${index + 1}`}
                      width={index === 2 ? 180 : 230}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}