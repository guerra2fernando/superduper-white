import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Stats from '@/components/stats'

export default function HeroServices() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-white before:-z-10">
      <div className="pt-32 pb-5 md:pt-40 md:pb-5">
        
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center">
              <div className="inline-block bg-transparent mb-4 text-gray-500 font-semibold py-1 px-4 shadow-light2 border border-gray-300 bg-white rounded-full">
              Professional Services
</div>
                <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                Here to support you</h1>
                <p className="text-lg text-zinc-500 mb-8">
                We know what it takes to implement complex AI in an enterprise context. Our data science and devops experts are here to help you implement applications that solve your specific problems optimally. 
                </p>
                
                <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
                  <div>
                    <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Contact us</Link>
                  </div>
                </div>
               
              </div>

          </div>
        </div>

      </div>
    </section>
  )
}