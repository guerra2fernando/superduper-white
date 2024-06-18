import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Stats from '@/components/stats'

export default function HeroVector() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-white before:-z-10">
      <div className="pt-32 pb-14 md:pt-40  md:pb-14">
        
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center">
              <div className="inline-block bg-transparent mb-4 text-gray-500 font-semibold py-1 px-4 shadow-light2 border border-gray-300 bg-white rounded-full">
  Preconfigured AI workflow templates
</div>


                <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                Vector Search Embedding Generation
                </h1>
                <p className="text-lg text-zinc-500 mb-8">
                Integrate and manage vector embedding models and APIs as well as vector search engines with your existing databases. That makes it super efficient to generate embeddings for your data and perform vector search without moving your data. 


                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div>
                    <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Book a Demo</Link>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}