import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        className="text-slate-300 hover:text-white transition duration-150 ease-in-out"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Open menu</span>
        {/* Icon for menu */}
        ☰
      </button>

      <div className={`${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-slate-900`}>
        <ul className="flex flex-col p-4">
          <li className="relative group">
            <button
              className="font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              Solutions
            </button>
            <ul className={`${submenuOpen ? 'block' : 'hidden'} pl-4`}>
              <li>
                <Link className="block py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/key-value">Key Value</Link>
              </li>
              <li>
                <Link className="block py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/vector-search">Vector Search</Link>
              </li>
              <li>
                <Link className="block py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/in-database-rag">In-Database RAG</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out py-2" href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link className="font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out py-2" href="https://blog.superduperdb.com/">Blog</Link>
          </li>
          <li>
            <Link className="font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out py-2" href="https://docs.superduperdb.com/">Docs</Link>
          </li>
          <li>
            <Link className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full mt-4" href="https://github.com/SuperDuperDB/superduperdb">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
