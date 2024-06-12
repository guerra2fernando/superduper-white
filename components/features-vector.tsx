import Image from "next/image";
import { ArchiveBoxIcon, KeyIcon, BellAlertIcon, ShieldCheckIcon, ArrowsPointingOutIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Illustration from "@/public/images/enterpriseGrid.svg";

export default function FeaturesInDatabase() {
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
          
          
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ArchiveBoxIcon className="w-6 h-6" style={{ color: '#D0342C' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Integrate</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Integrate and manage the latest open-source embedding models and API providers for different applications side-by-side.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <KeyIcon className="w-6 h-6" style={{ color: '#45BE76' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Automate</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Forget building and maintaining data and embedding pipelines and enjoy streaming inference, so that new incoming data gets vectorized immediately and automatically.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ShieldCheckIcon className="w-6 h-6" style={{ color: '#3073b7' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Safeguard</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Safeguard your data by self-hosting your own models. Scale inference flexibly to accommodate large data.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ArrowsPointingOutIcon className="w-6 h-6" style={{ color: '#D0342C' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Scale</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Scale inference flexibly to accommodate large data.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <AdjustmentsHorizontalIcon className="w-6 h-6" style={{ color: '#45BE76' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Fine-tune</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Fine-tune your embedding models for maximum performance, whether from open or closed source.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <MagnifyingGlassIcon className="w-6 h-6" style={{ color: '#3073b7' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Search</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Search across any type of data using best-in-class multi-modal vector search on your existing databases.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
