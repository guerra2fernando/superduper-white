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
      name: 'Faster development of more robust AI apps',
      quote: 'Implement even the most complex custom AI workflows on your database with a declarative interface and integrations with major AI frameworks, model hubs and APIs. Move fast across your data backends and AI components using our abstractions, building blocks and templates while still being able to drill down to any layer of customization, and producing high-quality code. Bring in any piece of Python to enhance your applications. Build your own reusable building blocks for future applications. ',
    },
    {
      img: Why02,
      icon: Bolticon,
      name: 'Streamlined state-of the art deployment ',
      quote: 'Export your AI apps and workflows and deploy them with all needed components in minutes. A single scalable deployment including hosting your own models in house, training/fine-tuning, and streaming inference -  facilitating state-of-the art deployment and distributed compute technologies for maximum scalability and efficiency. No setup of repetitive infrastructure and setup of ETL/data pipelines with every new application.',
    },
    {
      img: Why03,
      icon: Nodeicon,
      name: 'The one platform for all enterprise AI',
      quote: 'Stop switching between tools and environments when tackling different AI use-cases. Build your AI stack with a single, open platform on your own, existing infrastructure, turning your databases into your artifact store and metadata store. Implement any enterprise AI use-case and streamline your AI workflows, achieving maximum efficiency and truly own your AI. ',
    },
  ]

  return (
    <section className="relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      
        <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Build, Deploy, Manage.</h2>
            </div>
        
          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">
            
            {items.map((item, index) => ( 
              <div key={index} className="relative flex flex-col justify-between p-5 h-full border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Image src={item.icon} className="max-w-none" width={25} priority alt={item.name} />
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
