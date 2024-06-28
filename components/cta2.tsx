import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo-02.png'
import Illustration from "@/public/images/enterpriseGrid.svg";

export default function Cta() {
  return (
    <section className="relative">
      {/* Illustration */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none opacity-30 object-cover object-center"
          layout="fill"
          priority
          alt="Hero Illustration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white"></div>
      </div>
      <div className="relative py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex items-center justify-center w-20 h-20  mb-8 relative before:absolute before:-top-12 before:w-52 before:h-52 before:-z-10  bg-zinc-100 shadow rounded">
              <Link href="/">
                <Image src={Logo} width={60} height={60} alt="Logo" />
              </Link>
            </div>
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 mb-4">Your AI stack on your existing infrastructure <em className="relative not-italic inline-flex justify-center items-end  text-zinc-900">
                today
                <svg className="absolute fill-zinc-300 w-[calc(100%+1rem)] -z-10" xmlns="http://www.w3.org/2000/svg" width="120" height="10" viewBox="0 0 120 10" aria-hidden="true" preserveAspectRatio="none">
                  <path d="M118.273 6.09C79.243 4.558 40.297 5.459 1.305 9.034c-1.507.13-1.742-1.521-.199-1.81C39.81-.228 79.647-1.568 118.443 4.2c1.63.233 1.377 1.943-.17 1.89Z" />
                </svg>
              </em>
            </h2>
            <p className="text-lg text-zinc-500 mb-8">Observe and manage your Superduper environment, including configured applications, inference- and training jobs and queues. Configure AI workflows through an intuitive web-based visual interface.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <a className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}