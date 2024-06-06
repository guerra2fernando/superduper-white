import Image from 'next/image'

import Loop2 from '@/public/images/loop.png'

export default function Loop() {
  return (
    <section className="relative">

    
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-14 pb-14 md:pt-14 md:pb-14">

              <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-inter-tight text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900">
                            Instead of bringing your data to AI, bring your AI deployment to your data
                        </h2>
                        <p className="text-lg text-zinc-500 ">
                            Superduper integrates with your existing databases, facilitating data transfer to AI models APIs and frameworks, ensuring that all steps of your AI workflows are contained in your databases end-to-end, instead of being spread across various places and systems and environments.
                        </p>
                    </div>

          

          <div className="max-w-3xl mx-auto pt-6">
            <div data-aos="fade-down">
                  <div className="relative h-full  z-20 overflow-hidden">
                    {/* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    </div>
                    <Image src={Loop2} width={768} height={400} alt="Feature 04" />
                  </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}