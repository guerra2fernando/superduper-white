'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/solid'
import PricingDecoration from '@/public/images/pricing-decoration.png'

interface DescriptionProps {
  text: string;
}

// New component for rendering description with HTML
const Description: React.FC<DescriptionProps> = ({ text }) => (
  <div className="text-zinc-500" dangerouslySetInnerHTML={{ __html: text }} />
)

export default function PricingTabs() {
  const [tier, setTier] = useState<number>(0)
  const pricingDetails = [
    {
      title: "Open-Source Framework",
      price: "Free",
      description: "A versatile and modular open-source framework designed for building AI apps and workflows with your existing databases.",
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
      title: "Enterprise (Self-hosted)",
      price: "Pricing upon request",
      description: "A cloud-native Kubernetes platform offering scalable runtime, a Web UI as well as preconfigured AI applications and workflows.",
      button: "Contact Us",
      features: [
        "Perfect for enterprise teams of any size",
        "Deployable across public clouds, private clouds, or on-premises",
        "Elastic and auto-scaling infrastructure",
        "Preconfigured AI applications and workflow templates",
        "Comprehensive admin and configuration web interface",
        "Custom AI development / Data science consulting"
      ],
      link: "/contact"
    },
    {
      title: "Snowflake Native App",
      price: "Pricing upon request",
      description: "A Snowflake native app with all features of the enterprise version.<br /><br />",
      button: "Contact Us",
      features: [
        "Perfect for Snowflake users",
        "More cost-efficient compared to traditional cloud providers",
        "Runs in Snowpark Container Services, eliminating data transfer hassles",
        "Delivered as a Snowflake Native App, ensuring isolation among multiple users"
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
                    <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                      <div className="mb-4">
                        <div className="text-lg text-zinc-900 font-semibold mb-1">{plan.title}</div>
                        <div className="font-inter-tight inline-flex items-baseline mb-2">
                          <span className="font-bold text-3xl text-zinc-900">{plan.price}</span>
                        </div>
                        <Description text={plan.description} />
                        <div className="mt-8">
                          <a className="btn w-full shadow text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900" href={plan.link}>
                            {plan.button}
                          </a>
                        </div>
                      </div>
                      <div className="grow">
                        <ul className="text-zinc-600 text-sm space-y-3 grow">
                          {plan.features.map((feature, i) => (
                            <li key={i} className={`flex items-center p-2 ${i % 2 === 0 ? 'bg-zinc-100' : 'bg-[rgba(232,232,232,1)]'} rounded-md`}>
                              <CheckIcon className="w-5 h-5 text-emerald-500 mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <a className="btn w-full shadow text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900" href={plan.link}>
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