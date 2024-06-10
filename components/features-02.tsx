import Image from "next/image";
import FeatureImage01 from "@/public/images/feature-post-01.png";
import FeatureImage02 from "@/public/images/feature-post-02.png";
import Connect from "@/public/images/connect.png";
import Database from "@/public/images/database.png";
import Safeguard from "@/public/images/safeguard.png";
import Illustration from "@/public/images/enterpriseGrid.svg";

export default function Features02() {
  return (
    <section className="relative">
      <div className="pt-10 pb-10 md:py-15">
       

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]  rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="25" strokeWidth="1.5" stroke="currentColor" className="size-6" style={{ color: '#D0342C' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                  
                  <h3 className="font-inter-tight font-semibold text-zinc-900">
                    Bring AI to your databases
                  </h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                Implement AI workflows on any type of data directly with your existing databases, Eliminating data pipelines and moving data, ensuring production-readiness.  
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]  rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="25" strokeWidth="1.5" stroke="currentColor" className="size-6" style={{ color: '#45BE76' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                  </svg>
                  <h3 className="font-inter-tight font-semibold text-zinc-900">
                  Implement AI workflows
                  </h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                Future-proof your AI stack by easily switching and combining any open and closed source models and APIs including upcoming models and providers.                </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]  rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="25" strokeWidth="1.5" stroke="currentColor" className="size-6" style={{ color: '#3073b7' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  <h3 className="font-inter-tight font-semibold text-zinc-900">
                    Safeguard your data
                  </h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                Future-proof your AI stack by easily switching between APIs and models, including hosting and training on your own infrastructure. 
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
