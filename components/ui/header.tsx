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
                  className="font-medium text-sm text-slate-600 hover:text-slate-800 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  Solutions
                </Link>
                <ul className="absolute top-full left-0 bg-slate-900 rounded shadow-lg pt-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 ease-in-out">
                  <li>
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/key-value">Key Value</Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/vector-search">Vector Search</Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/in-database-rag">In-Database RAG</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/enterprise">Enterprise</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              
              <li>
                <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://blog.superduperdb.com/">Blog</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://docs.superduperdb.com/">Docs</Link>
              </li>
            </ul>

          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center">
            <li className="ml-6">
            <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/enterprise">Get Started</Link>
            </li>
          </ul>


        </div>
      </div>
    </header>
  )
}
