import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Stats from '@/components/stats'

export default function HeroAbout() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-white before:-z-10">
      <div className="pt-32 pb-5 md:pt-40 md:pb-5">
        
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center">
              <div className="inline-block bg-transparent mb-4 text-gray-500 font-semibold py-1 px-4 shadow-light2 border border-gray-300 bg-white rounded-full">
              Our mission
</div>
                <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                Simplify how organizations build and operate AI with their data</h1>
                <p className="text-lg text-zinc-500 mb-8">
                AI is transforming businesses across industries. However, integrating AI with existing databases remains a challenge. SuperDuperDB bridges this gap, enabling seamless AI implementation directly within your database infrastructure. We empower organizations to leverage their data for AI applications without the complexity of traditional setups. Our platform simplifies AI deployment, enhances data security, and accelerates development cycles. With SuperDuperDB, businesses can unlock the full potential of their data, creating innovative AI solutions that drive competitive advantage.  <a href='https://join.com/companies/superduperdb' className='underline' target='_blank'>Join us!</a>  </p>
                
               
              </div>

          </div>
        </div>

      </div>
    </section>
  )
}