import Image from "next/image";
import { ArrowPathIcon, ChartBarIcon, ClockIcon } from "@heroicons/react/24/outline";
import Illustration from "@/public/images/enterpriseGrid.svg";

export default function FeaturesAIStack() {
  return (
    <section className="relative">
      <div className="pt-10 pb-10 md:py-15">
        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none mt-40"
          style={{ top: '-200px' }}
          aria-hidden="true"
        >
          <Image
            src={Illustration}
            className="max-w-none opacity-20"
            width={2146}
            priority
            alt="Hero Illustration"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why choose Superduper?</h2>
          
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ArrowPathIcon className="w-6 h-6 opacity-60" style={{ color: '#3073b7' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Agility and flexibility</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Leverage our cloud-native infrastructure to seamlessly integrate and adopt new technologies and solutions as they emerge. Stay ahead of the curve with a system designed for rapid innovation and adaptation.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ChartBarIcon className="w-6 h-6 opacity-60" style={{ color: '#45BE76' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Scale and resilience</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Benefit from automated horizontal scaling, both up and down, ensuring optimal hardware efficiency and robust performance. Our solution is designed to handle varying workloads with ease, providing resilience and scalability when you need it most.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ClockIcon className="w-6 h-6 opacity-60" style={{ color: '#D0342C' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Time and cost efficiency</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Significantly reduce the costs and development cycles associated with AI infrastructure and development. Our modernized stack helps streamline processes, allowing you to focus on innovation without the financial and temporal burdens of traditional systems.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}