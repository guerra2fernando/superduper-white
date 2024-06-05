import Image from 'next/image'
import FeatureImage01 from '@/public/images/feature-post-01.png'
import FeatureImage02 from '@/public/images/feature-post-02.png'
import Connect from '@/public/images/connect.png'
import Database from '@/public/images/database.png'
import Safeguard from '@/public/images/safeguard.png'
import Illustration from '@/public/images/enterpriseGrid.svg'
import Microchipicon from '@/public/images/microchip-solid.svg'
import Databaseicon from '@/public/images/database-solid.svg'
import Shieldicon from '@/public/images/shield-solid.svg'

export default function Features02() {
  return (
    <section>
      <div className="pt-5 pb-10 md:py-15">
        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden mt-40" aria-hidden="true">
  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
    <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
</div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            
            
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                <Image src={Microchipicon} className="max-w-none" width={25} priority alt="Bring AI to your databases" />

                  <h3 className="font-inter-tight font-semibold text-zinc-900">Bring AI to your databases</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Eliminating data pipelines and moving data, minimizing engineering efforts, time to production, and computation resources. </p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                <Image src={Databaseicon} className="max-w-none" width={25} priority alt="Implement AI workflows" />

                  <h3 className="font-inter-tight font-semibold text-zinc-900">Implement AI workflows</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">With any open and closed source AI models and APIs, on any type of data, with any AI & Python framework, package, class or function.</p>
              </div>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                <Image src={Shieldicon} className="max-w-none" width={25} priority alt="Safeguard your data" />

                  <h3 className="font-inter-tight font-semibold text-zinc-900">Safeguard your data</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">And future-proof your AI stack by easily switching between APIs and models, includintg hosting and training on your own infrastructure. </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}