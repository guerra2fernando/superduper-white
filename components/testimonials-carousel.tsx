"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import CarouselImg01 from "@/public/images/carousel-icon-01.svg";
import CarouselImg02 from "@/public/images/carousel-icon-02.svg";
import CarouselImg03 from "@/public/images/carousel-icon-03.svg";
import CarouselImg04 from "@/public/images/carousel-icon-04.svg";
import Illustration from "@/public/images/enterpriseGrid.svg";

// Import Swiper

import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
Swiper.use([Navigation]);

export default function TestimonialsCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    const carousel = new Swiper(".stellar-carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
    setSwiperInitialized(true);
  }, []);
  return (
    <section className="bg-zinc-800 pb-10">
      <div className="pt-5 pb-10 md:py-15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pt-8 pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-200 mb-4">
              Jumpstart AI adoption with Superduper AI App Templates:
            </h2>
            <p className="text-lg text-zinc-400">
              Our enterprise platform comes with preconfigured AI App Templates,
              which enable you to easily implement use-case and business-logic
              configurations that meet your business logic and data
              requirements. The templates contain different model options for
              self-hosting as well as web user interfaces.
            </p>
          </div>

          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-zinc-800 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-zinc-800 after:to-20%">
            <div className="stellar-carousel swiper-container group">
              <div className="swiper-wrapper w-fit">
                <div className="swiper-slide h-auto group/slide">
                  <article className="flex flex-col border border-transparent [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] rounded-lg min-h-[250px]">
                    <div className="grow flex flex-col p-6">
                      <div
                        className="mb-3"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#D0342C"
                          width="25"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                      </div>
                      <div className="font-inter-tight font-semibold text-zinc-200 text-lg mb-1">
                        Document Key-Value Extraction + RAG
                      </div>
                      <p className="grow text-sm text-zinc-400 mb-3">
                        Accurately retrieve mission-critical information from
                        your documents and store them in your database for
                        downstream business operations like accounting,
                        analytics, and decision-making.
                      </p>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-zinc-500 hover:text-zinc-200 inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-zinc-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide h-auto group/slide">
                  <article className="flex flex-col border border-transparent [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] rounded-lg min-h-[250px]">
                    <div className="grow flex flex-col p-6">
                      <div
                        className="mb-3"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#45BE76"
                          width="25"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                          />
                        </svg>
                      </div>
                      <div className="font-inter-tight font-semibold text-zinc-200 text-lg mb-1">
                        In-Database RAG -multi-modal
                      </div>
                      <p className="grow text-sm text-zinc-400 mb-3">
                        Configure custom RAG applications, such as AI chatbots,
                        directly on your database.
                      </p>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-zinc-500 hover:text-zinc-200 inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-zinc-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide h-auto group/slide">
                  <article className="flex flex-col border border-transparent [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] rounded-lg min-h-[250px]">
                    <div className="grow flex flex-col p-6">
                      <div
                        className="mb-3"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#3073b7"
                          width="25"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                          />
                        </svg>
                      </div>
                      <div className="font-inter-tight font-semibold text-zinc-200 text-lg mb-1">
                        Vector Embedding Generation{" "}
                      </div>
                      <p className="grow text-sm text-zinc-400 mb-3">
                        Integrate vector embedding models and APIs with your
                        existing databases to generate embeddings for your data
                        and perform vector search without moving your data.
                      </p>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-zinc-500 hover:text-zinc-200 inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-zinc-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                
                <div className="swiper-slide h-auto group/slide">
                  <article className="flex flex-col border border-transparent [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] rounded-lg min-h-[250px]">
                    <div className="grow flex flex-col p-6">
                      <div
                        className="mb-3"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#3073b7"
                          width="25"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                          />
                        </svg>
                      </div>
                      <div className="font-inter-tight font-semibold text-zinc-200 text-lg mb-1">
                      Custom Workflows{" "}
                      </div>
                      <p className="grow text-sm text-zinc-400 mb-3">
                      Schedule a meeting If you are interested in a custom AI application or workflow that we haven’t covered yet.
                      </p>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-zinc-500 hover:text-zinc-200 inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Schedule a meeting{" "}
                          <span className="tracking-normal text-zinc-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
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
              <svg
                className="w-4 h-4 fill-zinc-400 group-hover:fill-zinc-200 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-zinc-400 group-hover:fill-zinc-200 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
