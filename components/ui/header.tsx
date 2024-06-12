import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li className="relative group">
                <Link
                  className="font-medium text-sm text-slate-600 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  Solutions
                </Link>
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-slate-900 rounded shadow-lg min-w-[280px] opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 ease-in-out">
                  <div className="absolute left-1/2 transform mt-1 -translate-x-1/2 -top-2 w-4 h-4 bg-slate-900 rotate-45"></div>
                  <li className="border-b border-zinc-700 last:border-none text-center">
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/key-value">Document Key-Value Extraction + RAG</Link>
                  </li>
                  <li className="border-b border-zinc-700 last:border-none text-center">
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/vector-search">Vector Embedding Generation</Link>
                  </li>
                  <li className="text-center">
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/in-database-rag">In-Database RAG</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-600 hover:text-slate-800  py-2  mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 py-2  mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://blog.superduperdb.com/">Blog</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-600 hover:text-slate-800  py-2  mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://docs.superduperdb.com/">Docs</Link>
              </li>
              
              <li>
                <Link className="font-medium text-sm text-slate-600 hover:text-slate-800  py-2  mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/contact">Contact</Link>
              </li>
            </ul>

          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center">
            <li className="ml-6">
              <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Get Started</Link>
            </li>
          </ul>

        </div>
      </div>
    </header>
  )
}
