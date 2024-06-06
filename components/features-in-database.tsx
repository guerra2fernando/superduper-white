import Image from "next/image";
import { ArchiveBoxIcon, KeyIcon, BellAlertIcon, ShieldCheckIcon, ArrowsPointingOutIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
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
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Jumpstart AI adoption with Superduper AI App Templates
            </h2>
            <p className="text-lg text-zinc-500 mb-8">
              Our preconfigured AI app template enables you to automate the extraction of information as key-value pairs and storing it in your database, making it available for your CRM systems, ERP, HR tools, and more. Utilizing the latest LLMs, best-in-class vector search, and RAG architecture, enables you to implement custom AI chat that adheres to your documents and business requirements.
            </p>
          </div>
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ArchiveBoxIcon className="w-6 h-6" style={{ color: '#D0342C' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Documents</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  like contracts, invoices, technical guides etc., whether structured or unstructured
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent ">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <KeyIcon className="w-6 h-6" style={{ color: '#45BE76' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Key-Value</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Define needed information key-value pairs with minimal semantic and language-specific knowledge
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <BellAlertIcon className="w-6 h-6" style={{ color: '#3073b7' }} />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Alerts</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Create events and specific alerts to ensure you act on what's necessary
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
                  your data by running the entire application on your own infrastructure using latest LLMs
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
                  Auto-scale with maximum computational efficiency to and process large volumes of documents fast and safely
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
                  your own models on your data for maximum accuracy
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
