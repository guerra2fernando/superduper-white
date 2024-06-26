'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/solid'
import PricingDecoration from '@/public/images/pricing-decoration.png'

export default function PricingTabs() {
  const [tier, setTier] = useState<number>(0)
  const pricingDetails = [
    {
      title: "Open Source Framework",
      price: "Free",
      description: "Develop AI applications using a versatile and modular open-source framework designed for flexibility and innovation.",
      button: "Get Started",
      features: [
        "Perfect for small-scale projects and initial prototyping",
        "Seamless integrations with SQL and NoSQL databases",
        "Advanced support for vector searching",
        "Fully compatible with large language models (LLMs)",
        "Includes fundamental AI workflow templates"
      ],
      link: "https://github.com/SuperDuperDB/superduperdb"
    },
    {
      title: "Cloud-Native Platform",
      price: "Pricing upon request",
      description: "Empower your enterprise AI solutions with a self-hosted Kubernetes platform offering scalable runtime and frontend capabilities.",
      button: "Contact Us",
      features: [
        "Elastic and auto-scaling infrastructure",
        "Deployable across public clouds, private clouds, or on-premises",
        "Comes with preconfigured AI application and workflow templates",
        "Comprehensive admin and configuration web interface",
        "Seamless integration with external databases",
        "Business Consulting / Scalable and Real-Time Execution"
      ],
      link: "/contact"
    },
    {
      title: "Snowflake-Native Platform",
      price: "Pricing upon request",
      description: "A tailored Cloud-Native Platform optimized for processing data directly within the Snowflake environment.",
      button: "Contact Us",
      features: [
        "Includes all features of the Cloud-Native Platform",
        "Direct integration with existing Snowflake databases",
        "Runs in Snowpark Container Services, eliminating data transfer hassles",
        "Delivered as a Snowflake NativeApp, ensuring isolation among multiple users",
        "More cost-efficient compared to traditional cloud providers",
        "Business Consulting / Secure and In-Situ Execution"
      ],
      link: "/contact"
    }
  ]
  
  return (
    <section>
      <div className="py-1 md:py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="flex justify-center items-center">
              <div className="max-w-2xl w-full grid gap-6 items-start lg:max-w-none lg:grid-cols-3">
                {pricingDetails.map((plan, index) => (
                  <div key={index} className="h-full">
                    <div className={`relative flex flex-col h-full p-6 rounded-lg ${index === 1 ? 'bg-zinc-800' : 'border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]'}`}>
                      <div className="mb-4">
                        <div className={`text-lg ${index === 1 ? 'text-zinc-200' : 'text-zinc-900'} font-semibold mb-1`}>{plan.title}</div>
                        <div className="font-inter-tight inline-flex items-baseline mb-2">
                          <span className={`font-bold text-3xl ${index === 1 ? 'text-zinc-200' : 'text-zinc-900'}`}>{plan.price}</span>
                        </div>
                        <div className={`text-${index === 1 ? 'zinc-500' : 'zinc-500'}`}>{plan.description}</div>
                        <div className="mt-8">
                          <a className={`btn w-full shadow ${index === 1 ? 'text-zinc-600 bg-white hover:text-zinc-900' : 'text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900'}`} href={plan.link}>
                            {plan.button}
                          </a>
                        </div>
                      </div>
                      <div className="grow">
                        <ul className={`text-${index === 1 ? 'zinc-400' : 'zinc-600'} text-sm space-y-3 grow`}>
                          {plan.features.map((feature, i) => (
                            <li key={i} className={`flex items-center p-2 ${index === 1 ? (i % 2 === 0 ? 'bg-[rgba(34,34,34,1)]' : 'bg-zinc-900') : (i % 2 === 0 ? 'bg-zinc-100' : 'bg-[rgba(232,232,232,1)]')} rounded-md`}>
                              <CheckIcon className="w-5 h-5 text-emerald-500 mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <a className={`btn w-full shadow ${index === 1 ? 'text-zinc-600 bg-white hover:text-zinc-900' : 'text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900'}`} href={plan.link}>
                          {plan.button}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
