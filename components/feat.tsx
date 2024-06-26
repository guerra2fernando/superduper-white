import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Why01 from '@/public/images/why-icon-1.png'
import Why02 from '@/public/images/why-icon-2.png'
import Why03 from '@/public/images/why-icon-3.png'
import PlaceholderImage01 from '@/public/images/carousel-illustration-01.jpg'
import PlaceholderImage02 from '@/public/images/carousel-illustration-02.jpg'
import PlaceholderImage03 from '@/public/images/carousel-illustration-03.jpg'

interface Button {
  text: string
  link: string
}

interface Item {
  img: StaticImageData
  name: string
  quote: string
  placeholderImage: StaticImageData
  button?: Button
}

export default function Why() {

  const items: Item[] = [
    {
      img: Why01,
      name: 'Faster development of more robust AI applications',
      quote: 'Implement even the most complex AI applications on your database as workflow-as-code using Superduper’s declarative Python interface and integrations with major AI frameworks, model hubs, and APIs. Move fast with our abstractions, building blocks, and templates, while still being able to drill down to any layer of customization.',
      placeholderImage: PlaceholderImage01,
      button: {
        text: 'Go to documentation',
        link: 'https://docs.superduperdb.com/'
      }
    },
    {
      img: Why02,
      name: 'Avoid vendor-lock through composability',
      quote: 'There are models and packages with specialized functionality for specific use cases, with better options constantly emerging. Implementing on Superduper allows you to switch between and combine frameworks like LangChain and LamaIndex within the same workflow to make your solutions the best they can be. Build on one database and reimplement on another easily.',
      placeholderImage: PlaceholderImage02,
    },
    {
      img: Why02,
      name: 'Secure and scalable deployment on your existing infrastructure',
      quote: 'No setup of repetitive infrastructure and setup of ETL pipelines with every new application. Export your AI apps and workflows and deploy them with all needed components in minutes. A single scalable deployment including hosting your own models in-house, fine-tuning, and streaming inference on your own infrastructure.',
      placeholderImage: PlaceholderImage02,
      button: {
        text: 'Schedule a demo',
        link: '/contact'
      }
    },
    {
      img: Why03,
      name: 'One platform for all enterprise AI needs',
      quote: 'Implement any enterprise AI use-case and streamline your AI workflows. Build your AI stack with a single, open platform on your own, existing infrastructure, turning your databases into your artifact store and metadata store. Stop switching between different deployments and environments.',
      placeholderImage: PlaceholderImage03,
    },
  ]

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          {items.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-8 md:mb-16 ${index !== 0 ? 'mt-16 md:mt-24' : ''}`}>
              {/* Placeholder Image Left */}
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-16 relative min-w-4x1">
                    <div className="shadow-lg border border-gray-200 rounded-2xl p-3">
                      <div className="absolute top-2 left-2 flex space-x-1">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <Image src={item.placeholderImage} alt="Placeholder" className="pt-4" />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="font-inter-tight text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 mb-4">{item.name}</h3>
                    <p className="text-sm text-zinc-500 mb-4">{item.quote}</p>
                    <Image className="mt-4" src={item.img} alt={item.name} height={50} />
                    {item.button && (
                      <div className="mt-4">
                        <a className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 shadow" href={item.button.link}>{item.button.text}</a>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 mb-4 md:mb-0 md:order-2 md:pl-16 relative min-w-4x1">
                    <div className="shadow-lg border border-gray-200 rounded-2xl p-3">
                      <div className="absolute top-2 left-26 flex space-x-1">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <Image src={item.placeholderImage} alt="Placeholder" className="pt-4" />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:order-1">
                    <h3 className="font-inter-tight text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 mb-4">{item.name}</h3>
                    <p className="text-sm text-zinc-500 mb-4">{item.quote}</p>
                    <Image className="mt-4" src={item.img} alt={item.name} height={50} />
                    {item.button && (
                      <div className="mt-4">
                        <a className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800  shadow" href={item.button.link}>{item.button.text}</a>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
