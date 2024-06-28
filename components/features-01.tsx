'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeatureIllustration from '@/public/images/feature-illustration.png'
import Diagram1 from '@/public/images/diagram-1.png'
import Diagram2 from '@/public/images/diagram-2.png'
import Diagram3 from '@/public/images/diagram-3.png'
import Diagram4 from '@/public/images/diagram-4.png'
import Diagram5 from '@/public/images/diagram-5.png'

import FeatureImg from '@/public/images/feature-illustration.png'
import { Sonsie_One } from 'next/font/google'

export default function Features01() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])   

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
            {/* Tabs items */}
            <div className="relative lg:max-w-none -mx-6 pt-3">
  <div className="relative mx-6" ref={tabs} style={{ height: '582px' }}>
    {[1, 2, 3, 4, 5].map((item) => (
      <Transition
        key={item}
        show={tab === item}
        className="w-full text-center absolute top-0 left-0"
        enter="transition ease-in-out duration-100"
        enterFrom="opacity-70"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-70"
        unmount={false}
      >
        <div className="inline-flex relative align-top">
          <Image 
            className="box-content" 
            src={item === 1 ? Diagram1 : item === 2 ? Diagram2 : item === 3 ? Diagram3 : item === 4 ? Diagram4 : Diagram5} 
            width={1200} 
            height={582} 
            alt={`Feature ${item.toString().padStart(2, '0')}`} 
          />
        </div>
      </Transition>
    ))}
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
