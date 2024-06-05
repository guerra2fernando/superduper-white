'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import CarouselImg01 from '@/public/images/carousel-icon-01.svg'
import CarouselImg02 from '@/public/images/carousel-icon-02.svg'
import CarouselImg03 from '@/public/images/carousel-icon-03.svg'
import CarouselImg04 from '@/public/images/carousel-icon-04.svg'
import Illustration from '@/public/images/enterpriseGrid.svg'


// Import Swiper

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
Swiper.use([Navigation])

export default function TestimonialsCarousel() {

  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  useEffect(() => {
    const carousel = new Swiper('.stellar-carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
    setSwiperInitialized(true)
  }, [])
  return (
    <section>
      <div className="pt-5 pb-10 md:py-15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pt-8 pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Jumpstart AI adoption with Superduper AI App Templates:</h2>
            <p className="text-lg text-zinc-500">Check out our Preconfigured AI apps templates that include in-house models on different data science disciplines to be enabled with proprietary data.</p>
          </div>
  
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-white before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-white after:to-20%">
            <div className="stellar-carousel swiper-container group">
              <div className="swiper-wrapper w-fit">
                <div className="swiper-slide h-auto group/slide">
                  <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
                    <div className="grow flex flex-col p-6">
                      <Image className="mb-3" src={CarouselImg01} width={56} height={56} alt="Icon 01" />
                      <div className="font-bold text-lg text-zinc-900 mb-1">Solution 1</div>
                      <p className="grow text-sm text-zinc-500 mb-3">Accurately retrieve mission-critical information from documents into your database for downstream business operations like accounting, analytics, and decision-making.</p>
                      <div className="text-right">
                        <a className="text-sm font-medium text-zinc-700 hover:text-zinc-900 inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide h-auto group/slide">
                  <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
                    <div className="grow flex flex-col p-6">
                      <Image className="mb-3" src={CarouselImg02} width={56} height={56} alt="Icon 02" />
                      <div className="font-bold text-lg text-zinc-900 mb-1">Solution 2</div>
                      <p className="grow text-sm text-zinc-500 mb-3">Integrate and manage vector embedding models and APIs as well as vector search engines with your existing databases. This makes it super efficient to generate embeddings for your data and perform vector search without moving your data.</p>
                      <div className="text-right">
                        <a className="text-sm font-medium text-zinc-700 hover:text-zinc-900 inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide h-auto group/slide">
                  <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
                    <div className="grow flex flex-col p-6">
                      <Image className="mb-3" src={CarouselImg03} width={56} height={56} alt="Icon 03" />
                      <div className="font-bold text-lg text-zinc-900 mb-1">Solution 3</div>
                      <p className="grow text-sm text-zinc-500 mb-3">Easily build generative AI RAG applications, such as AI chatbots, directly on your database.</p>
                      <div className="text-right">
                        <a className="text-sm font-medium text-zinc-700 hover:text-zinc-900 inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide h-auto group/slide">
                  <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
                    <div className="grow flex flex-col p-6">
                      <Image className="mb-3" src={CarouselImg04} width={56} height={56} alt="Icon 04" />
                      <div className="font-bold text-lg text-zinc-900 mb-1">Solution 4</div>
                      <p className="grow text-sm text-zinc-500 mb-3">You have different nodes.</p>
                      <div className="text-right">
                        <a className="text-sm font-medium text-zinc-700 hover:text-zinc-900 inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-zinc-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-zinc-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
  
        </div>
      </div>
    </section>
  )
}