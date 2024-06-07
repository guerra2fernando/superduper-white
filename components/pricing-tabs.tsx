'use client'

import { useState } from 'react'
import Image from 'next/image'
import PricingDecoration from '@/public/images/pricing-decoration.png'

export default function PricingTabs() {
  const [tier, setTier] = useState<number>(0)

  const pricingDetails = [
    {
      title: "Open Source",
      price: " $0 / month",
      description: "Start instantly and eliminate database operations",
      button: "Get started",
      features: [
        "Great for starter projects and evaluating distributed SQL",
        "Available on GCP and AWS",
        "SRE team support and guaranteed uptime",
        "Elastic, auto-scale across multiple regions",
        "Row based data partitioning across geographies",
        "Automated, no downtime upgrades",
        "Daily and hourly backups"
      ],
      link: "View pricing"
    },
    {
      title: "Enterprise",
      price: "From $995 / month",
      description: "Streamlined cloud database experience on dedicated hardware",
      button: "Contact us",
      features: [
        "Built for mission-critical use cases in the cloud",
        "Available on AWS, Azure, and GCP",
        "SRE team support and guaranteed uptime",
        "Node-based, self-service scale across multiple regions",
        "Row based data partitioning across geographies",
        "Automated, no downtime upgrades",
        "Daily and hourly backups"
      ],
      link: "Contact us"
    },
    {
      title: "Self-hosted",
      price: "Pricing upon request",
      description: "Gain deep control and deploy across multiple clouds",
      button: "Contact us",
      features: [
        "Ideal for those with advanced configuration needs",
        "Available across public or private clouds, and across on-premise data centers (option for hybrid deployments)",
        "Enterprise support options available",
        "Node-based, manual scale across multiple regions and clouds",
        "Row based data partitioning across geographies",
        "Self-service, no downtime upgrades",
        "Self-service backups"
      ],
      link: "Contact us"
    }
  ]

  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
              {pricingDetails.map((plan, index) => (
                <div key={index} className="h-full">
                  <div className={`relative flex flex-col h-full p-6 rounded-lg ${index === 1 ? 'bg-zinc-800' : 'border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]'}`}>
                    
                    <div className="mb-4">
                      <div className={`text-lg ${index === 1 ? 'text-zinc-200' : 'text-zinc-900'} font-semibold mb-1`}>{plan.title}</div>
                      <div className="font-inter-tight inline-flex items-baseline mb-2">
                        <span className={`font-bold text-3xl ${index === 1 ? 'text-zinc-200' : 'text-zinc-900'}`}>{plan.price}</span>
                      </div>
                      <div className={`text-${index === 1 ? 'zinc-500' : 'zinc-500'}`}>{plan.description}</div>
                    </div>
                    <div className="grow">
                      <div className={`text-sm ${index === 1 ? 'text-zinc-200' : 'text-zinc-900'} font-medium mb-4`}>Includes:</div>
                      <ul className={`text-${index === 1 ? 'zinc-600 dark:text-zinc-400' : 'zinc-600 dark:text-zinc-400'} text-sm space-y-3 grow`}>
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8">
                      <a className={`btn w-full shadow ${index === 1 ? 'text-zinc-600 bg-white hover:text-zinc-900' : 'text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900'}`} href="#0">
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
    </section>
  )
}
