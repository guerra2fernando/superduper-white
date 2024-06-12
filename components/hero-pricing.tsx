import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Stats from '@/components/stats'

export default function HeroPricing() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-white before:-z-10">
      <div className="pt-32 pb-5 md:pt-40 md:pb-5">
        
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                SuperDuper Pricing Plans</h1>
                <p className="text-lg text-zinc-500 mb-8">
                Superduper is an end-to-end platform for integrating AI models and workflows directly with and across major databases - for more flexible, secure and scalable enterprise AI adoption. 
                </p>
               
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}