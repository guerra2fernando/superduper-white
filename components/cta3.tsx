import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo-02.png'
import Illustration from "@/public/images/enterpriseGrid.svg";

export default function Cta3() {
  return (
    <section className="relative">
      
      <div className="relative py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex items-center justify-center w-20 h-20  mb-8 relative before:absolute before:-top-12 before:w-52 before:h-52 before:-z-10  bg-zinc-100 shadow rounded">
              <Link href="/">
                <Image src={Logo} width={60} height={60} alt="Logo" />
              </Link>
            </div>
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 mb-4">Start implementing AI <br />with on your data today

            </h2>
            <p className="text-lg text-zinc-500 mb-8">Reach out to us to learn more about Superduper, our enterprise options. Discuss your AI use-cases and challenges and with our AI and data science experts and find out how we can help you to solve them.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
                <a className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Schedule a demo</a>
              </div>
              <div>
                <a className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="https://github.com/SuperduperDB/superduperdb">Open Source on Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}