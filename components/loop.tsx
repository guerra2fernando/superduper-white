import Image from 'next/image'

import Loop2 from '@/public/images/loop.png'

export default function Loop() {
  return (
    <section className="relative">

    
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-1 pb-10 md:pt-5 md:pb-10 border-b border-slate-800">

          
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">Closing the loop between Data and AI</h2>
              </div>

          

          <div className="max-w-3xl mx-auto">
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