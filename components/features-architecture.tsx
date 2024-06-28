import Image from "next/image";
import { NoSymbolIcon, CurrencyDollarIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Illustration from "@/public/images/enterpriseGrid.svg";

export default function FeaturesArchitecture() {
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
          <h2 className="text-3xl font-bold text-center mb-8">Why you should simplify your architecture with Superduper</h2>
          
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <NoSymbolIcon className="w-6 h-6 opacity-60" style={{ color: '#D0342C' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Lack of agility</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Adding new revenue generating capabilities requires coordinating across a complex web of teams/services.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <CurrencyDollarIcon className="w-6 h-6 opacity-60" style={{ color: '#45BE76' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">High costs</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Multiple software services waste storage, network, and compute resources as well as engineering time.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ExclamationTriangleIcon className="w-6 h-6 opacity-60" style={{ color: '#3073b7' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Risk of downtime</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Complex runbooks for disaster recovery force ops teams to stretch their time and expertise across many transactional systems.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}