import Image from "next/image";
import { ArchiveBoxIcon, SwatchIcon, ServerIcon, ScaleIcon, CogIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
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
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-zinc-900">Features in RAG Database</h2>
          </div>
          
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ArchiveBoxIcon className="w-6 h-6 opacity-60" style={{ color: '#D0342C' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Framework Compatibility</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Work with your favorite Python and RAG frameworks like LangChain and LLamaIndex.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ServerIcon className="w-6 h-6 opacity-60" style={{ color: '#45BE76' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">End-to-End Workflow</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Have the end-to-end RAG workflow contained in your database.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <SwatchIcon className="w-6 h-6 opacity-60" style={{ color: '#3073b7' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Instant Processing</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Have new incoming data instantly processed and made available to your applications.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ScaleIcon className="w-6 h-6 opacity-60" style={{ color: '#D0342C' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Scalable Deployment</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Implement and scale various RAG applications side-by-side with one deployment, reusing workflow steps across your applications if possible.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <CogIcon className="w-6 h-6 opacity-60" style={{ color: '#45BE76' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">API Switching</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Switch between AI APIs and the latest self-hosted embedding and language models.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <AdjustmentsHorizontalIcon className="w-6 h-6 opacity-60" style={{ color: '#3073b7' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Fine-tune Models</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Fine-tune LLMs with your data for optimal performance and accuracy.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
