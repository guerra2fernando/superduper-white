import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Stats from '@/components/stats'

export default function Hero() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-white before:-z-10">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center pb-12 md:pb-16">
                <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                Productionize AI on your existing data infrastructure and your data
                </h1>
                <p className="text-lg text-zinc-500 mb-8">
                Superduper is a platform for integrating AI models and workflows directly with and across major databases - for more flexible, secure and scalable enterprise AI solutions.


                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div>
                    <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/request-demo">Enterprise</Link>
                  </div>
                  <div>
                    <a className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="#0">Open Source on GitHub</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}