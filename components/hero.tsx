import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Stats from '@/components/stats'

export default function Hero() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-white before:-z-10">
      <div className="pt-32 pb-14 md:pt-40  md:pb-14">
        
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                Implement <em className="relative not-italic inline-flex justify-center items-end text-zinc-900"> custom AI solutions
                <svg className="absolute fill-zinc-300 w-[calc(100%+1rem)] -z-10" xmlns="http://www.w3.org/2000/svg" width="120" height="10" viewBox="0 0 120 10" aria-hidden="true" preserveAspectRatio="none">
                  <path d="M118.273 6.09C79.243 4.558 40.297 5.459 1.305 9.034c-1.507.13-1.742-1.521-.199-1.81C39.81-.228 79.647-1.568 118.443 4.2c1.63.233 1.377 1.943-.17 1.89Z" />
                </svg>
              </em> with your database

                </h1>
                <p className="text-lg text-zinc-500 mb-8">
                Superduper is an end-to-end platform for integrating AI models and workflows directly with major databases - for more flexible, secure and scalable enterprise AI adoption. 
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div>
                    <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Schedule a Demo</Link>
                  </div>
                  <div>
                    <a className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="https://github.com/SuperduperDB/superduperdb">Open Source on GitHub</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}