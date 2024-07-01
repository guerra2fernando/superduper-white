'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Diagram from '@/public/images/diagram.png'
import Diagram1 from '@/public/images/diagram-1.png'
import Diagram2 from '@/public/images/diagram-2.png'
import Diagram3 from '@/public/images/diagram-3.png'
import Diagram4 from '@/public/images/diagram-4.png'
import Diagram5 from '@/public/images/diagram-5.png'

export default function Features01() {
  const [tab, setTab] = useState<number>(0)  // 0 represents the default state

  const getDiagram = () => {
    switch(tab) {
      case 1: return Diagram1;
      case 2: return Diagram2;
      case 3: return Diagram3;
      case 4: return Diagram4;
      case 5: return Diagram5;
      default: return Diagram;
    }
  }

  return (
    <section className="relative bg-zinc-50">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 mb-4">Export and deploy your applications to production instantly</h2>
            <p className="text-lg text-zinc-500 mb-8">
            The Superduper formalism makes your applications and workflows flexible, configurable and reproducible, enabling you to transition from development to production seamlessly without any overhead. </p>
          </div>
          
          <div>
            {/* Diagram */}
            <div className="mb-12">
              <Image src={getDiagram()} width={1200} height={582} alt="Diagram" />
            </div>

            {/* Tabs buttons */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 1 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">1. Build</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 1 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Configure a custom AI application or workflow using your favorite IDEs, like Jupyter or XYZ. </div>
              </button>
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 2 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">2. Export</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 2 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Save your application in a human readable format using the Superduper formalism.</div>
              </button>
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 3 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">3. Upload & Deploy</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 3 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Deploy without any infrastructure work simply by uploading the config file of your application.  </div>
              </button >
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 4 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(4); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">4. Manage & Monitor</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 4 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Scale inference and training workloads on your compute infrastructure and monitor their performance.</div>
              </button >
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 5 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(5); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">5. Reproduce & Adopt</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 5 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Reuse your application as a template and implement business logic directly in the config file of your application.</div>
              </button >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}