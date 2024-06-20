'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, DocumentTextIcon, ArchiveBoxIcon } from '@heroicons/react/24/solid'
import Logo from './logo'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-30 top-0 bg-white ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Hamburger Menu for Mobile on the right side */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <nav className="md:hidden bg-gray-100 w-full absolute top-16 left-0 z-20 p-4">
              <ul className="flex flex-col items-start pl-4">
                <li className="w-full border-b border-gray-300">
                  <button onClick={() => setSubmenuOpen(!submenuOpen)} className="w-full flex items-center justify-between py-2 text-slate-500 text-sm font-semibold">
                    <span>Solutions</span>
                    <ChevronDownIcon className="w-5 h-5 ml-2" />
                  </button>
                  {submenuOpen && (
                    <ul className="w-full bg-gray-100 rounded shadow-md mt-1">
                      <li className="border-b border-gray-300 flex items-center px-4 py-2 hover:bg-gray-300">
                        <Link href="/solutions/key-value" className="flex items-center w-full">
                          <CheckCircleIcon className="h-5 w-5 text-gray-600 mr-3" />
                          <div className="text-left">
                            <div className="text-sm text-gray-600 font-semibold">Key-Value</div>
                            <div className="text-xs text-gray-500">Document Extraction + RAG</div>
                          </div>
                        </Link>
                      </li>
                      <li className="border-b border-gray-300 flex items-center px-4 py-2 hover:bg-gray-300">
                        <Link href="/solutions/vector-search" className="flex items-center w-full">
                          <DocumentTextIcon className="h-5 w-5 text-gray-600 mr-3" />
                          <div className="text-left">
                            <div className="text-sm text-gray-600 font-semibold">Vector</div>
                            <div className="text-xs text-gray-500">Embedding Generation</div>
                          </div>
                        </Link>
                      </li>
                      <li className=" border-gray-300 flex items-center px-4 py-2 hover:bg-gray-300">
                        <Link href="/solutions/in-database-rag" className="flex items-center w-full">
                          <ArchiveBoxIcon className="h-5 w-5 text-gray-600 mr-3" />
                          <div className="text-left">
                            <div className="text-sm text-gray-600 font-semibold">In-Database RAG</div>
                            <div className="text-xs text-gray-500">Chat with your data</div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="w-full border-b border-gray-300">
                  <Link className="font-medium text-sm block py-2 text-slate-500 hover:bg-gray-200 w-full text-left font-semibold" href="/pricing">Pricing</Link>
                </li>
                <li className="w-full border-b border-gray-300">
                  <Link className="font-medium text-sm block py-2 text-slate-500 hover:bg-gray-200 w-full text-left font-semibold" href="https://blog.superduperdb.com/">Blog</Link>
                </li>
                <li className="w-full border-b border-gray-300">
                  <Link className="font-medium text-sm block py-2 text-slate-500 hover:bg-gray-200 w-full text-left font-semibold" href="https://docs.superduperdb.com/">Docs</Link>
                </li>
                <li className="w-full">
                  <Link className="font-medium text-sm block py-2 text-slate-500 hover:bg-gray-200 w-full text-left font-semibold" href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          )}

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li className="relative group">
                <div className="font-medium text-sm text-slate-500 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out cursor-pointer font-semibold">
                  Solutions
                </div>
                <ul className="absolute left-1/2 transform -translate-x-1/2 bg-gray-100 rounded shadow-lg min-w-[280px] opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 ease-in-out">
                  <div className="absolute left-1/2 transform  -translate-x-1/2 -top-2 w-4 h-4 bg-gray-100 rotate-45 -z-10"></div>
                  <li className="border-b border-gray-300 flex items-center px-4 py-2 hover:bg-gray-200 rounded-t">
                    <Link href="/solutions/key-value" className="flex items-center w-full">
                      <CheckCircleIcon className="h-5 w-5 text-gray-800 mr-3" />
                      <div className="text-left">
                        <div className="text-sm text-gray-600 font-semibold">Key-Value</div>
                        <div className="text-xs text-gray-400">Document Extraction + RAG</div>
                      </div>
                    </Link>
                  </li>
                  <li className="border-b border-gray-300 flex items-center px-4 py-2 hover:bg-gray-200">
                    <Link href="/solutions/vector-search" className="flex items-center w-full">
                      <DocumentTextIcon className="h-5 w-5 text-gray-800 mr-3" />
                      <div className="text-left">
                        <div className="text-sm text-gray-600 font-semibold">Vector</div>
                        <div className="text-xs text-gray-400">Embedding Generation</div>
                      </div>
                    </Link>
                  </li>
                  <li className="border-b border-gray-300 flex items-center px-4 py-2 hover:bg-gray-200 rounded-b">
                    <Link href="/solutions/in-database-rag" className="flex items-center w-full">
                      <ArchiveBoxIcon className="h-5 w-5 text-gray-800 mr-3" />
                      <div className="text-left">
                        <div className="text-sm text-gray-600 font-semibold">In-Database RAG</div>
                        <div className="text-xs text-gray-400">Chat with your data</div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out cursor-pointer font-semibold" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out cursor-pointer font-semibold" href="https://blog.superduperdb.com/">Blog</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out cursor-pointer font-semibold" href="https://docs.superduperdb.com/">Docs</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out cursor-pointer font-semibold" href="/contact">Contact</Link>
              </li>
            </ul>

          </nav>

          {/* Desktop sign in links */}
          <ul className="hidden md:flex flex-1 justify-end items-center">
            <li className="ml-6">
              <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Get Started</Link>
            </li>
          </ul>

        </div>
      </div>
    </header>
  )
}
