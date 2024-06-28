import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Stats from '@/components/stats'

export default function HeroArchitecture() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-white before:-z-10">
      <div className="pt-32 pb-14 md:pt-40  md:pb-14">
        
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center">
              <div className="inline-block bg-transparent mb-4 text-gray-500 font-semibold py-1 px-4 shadow-light2 border border-gray-300 bg-white rounded-full">
              Architecture Simplification</div>
                <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                Simplify your AI architecture 
                </h1>
                <p className="text-lg text-zinc-500 mb-8">
                Framework limitations often introduce application-level complexity and necessitate costly resources for maintenance. Simplify your architecture with Superduper by eliminating data pipelines and consolidating various functions of your AI infrastructure into your databases. Save costs while enhancing resilience, scalability, and agility.

                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div>
                    <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Contact Us</Link>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}