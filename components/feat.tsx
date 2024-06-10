import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Why01 from '@/public/images/why-icon-1.png'
import Why02 from '@/public/images/why-icon-2.png'
import Why03 from '@/public/images/why-icon-3.png'
import Houseicon from '@/public/images/house-flag-solid.svg'
import Bolticon from '@/public/images/bolt-solid.svg'
import Nodeicon from '@/public/images/circle-nodes-solid.svg'

interface Item {
  img: StaticImageData
  icon: StaticImageData
  name: string
  quote: string
}

export default function Why() {

  const items: Item[] = [
    {
      img: Why01,
      icon: Houseicon,
      name: 'Faster development of more robust AI applications',
      quote: 'Implement even the most complex custom AI workflows on your database with a declarative interface and integrations with major AI frameworks, model hubs and APIs. Use our abstractions, building blocks and templates and build your own, while still being able to drill down to any layer of customization. ',
    },
    {
      img: Why02,
      icon: Bolticon,
      name: 'Secure deployment on your existing infrastructure',
      quote: 'No setup of repetitive infrastructure and setup of ETL pipelines with every new application. Export your AI apps and workflows and deploy them with all needed components in minutes. A single scalable deployment including hosting your own models in-house, fine-tuning, and streaming inference.',
    },
    {
      img: Why03,
      icon: Nodeicon,
      name: 'One platform for all enterprise AI needs',
      quote: 'Implement any enterprise AI use-case and streamline your AI workflows. Build your AI stack with a single, open platform on your own, existing infrastructure, turning your databases into your artifact store and metadata store. Stop switching between different deployments and environments.',
    },
  ]

  return (
    <section className="relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      
        <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Build. Deploy. Manage.</h2>
            </div>
        
          {/* Grid */}
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            
            {items.map((item, index) => ( 
              <div key={index} className="relative flex flex-col justify-between p-5 h-full border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-1">
                    <div className="font-inter-tight font-semibold text-zinc-900 text-lg">{item.name}</div>
                  </div>
                  <p className="text-sm text-zinc-500 mb-4">{item.quote}</p>
                </div>
                <div className="mt-auto">
                  <Image className="shrink-0" src={item.img} alt={item.name} height={50} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
