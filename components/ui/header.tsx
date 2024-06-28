'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Logo from './logo'
import Link from 'next/link'
import ContactMenu from "@/public/images/scale.png";
import Image from 'next/image'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megamenuOpen, setMegamenuOpen] = useState(false)

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const solutionsLink = document.getElementById('solutions-link');
    const megamenu = document.getElementById('megamenu');

    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
      setMegamenuOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => setMegamenuOpen(false), 300);
    };

    solutionsLink?.addEventListener('mouseenter', handleMouseEnter);
    solutionsLink?.addEventListener('mouseleave', handleMouseLeave);
    megamenu?.addEventListener('mouseenter', handleMouseEnter);
    megamenu?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      solutionsLink?.removeEventListener('mouseenter', handleMouseEnter);
      solutionsLink?.removeEventListener('mouseleave', handleMouseLeave);
      megamenu?.removeEventListener('mouseenter', handleMouseEnter);
      megamenu?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
              {menuOpen ? <XMarkIcon className="w-6 h-6 opacity-60" /> : <Bars3Icon className="w-6 h-6 opacity-60" />}
            </button>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <nav className="md:hidden bg-gray-100 w-full absolute top-16 left-0 z-20 p-4">
              <ul className="flex flex-col items-start pl-4">
                
              <li className="w-full border-b border-gray-300">
                  <Link className="font-medium text-sm block py-2 text-slate-500 hover:bg-gray-200 w-full text-left font-semibold" href="/about">About</Link>
                </li>
                <li className="w-full border-b border-gray-300">
                  <button onClick={() => setMegamenuOpen(!megamenuOpen)} className="w-full flex items-center justify-between py-2 text-slate-500 text-sm font-semibold">
                    <span>Solutions</span>
                    <ChevronDownIcon className="w-5 h-5 ml-2" />
                  </button>
                  {megamenuOpen && (
                    <div className="w-full bg-gray-100 rounded shadow-md mt-1 p-4 grid grid-cols-1">
                      <ul className="w-full">
                        <li className="border-b border-gray-300 px-4 py-2 hover:bg-gray-300">
                          <Link href="/solutions/key-value" className="w-full block">
                            <div className="text-sm text-gray-600 font-semibold">Key-Value Extraction</div>
                            <div className="text-xs text-gray-500">Document Extraction + RAG</div>
                          </Link>
                        </li>
                        <li className="border-b border-gray-300 px-4 py-2 hover:bg-gray-300">
                          <Link href="/solutions/vector-search" className="w-full block">
                            <div className="text-sm text-gray-600 font-semibold">Vector Embedding Generation</div>
                            <div className="text-xs text-gray-500">Generate Vectors from your data</div>
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-300">
                          <Link href="/solutions/in-database-rag" className="w-full block">
                            <div className="text-sm text-gray-600 font-semibold">In-Database RAG</div>
                            <div className="text-xs text-gray-500">Chat with your data</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="w-full border-b border-gray-300">
                  <Link className="font-medium text-sm block py-2 text-slate-500 hover:bg-gray-200 w-full text-left font-semibold" href="/services">Services</Link>
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
              
            <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out cursor-pointer font-semibold" href="/about">About</Link>
              </li>
              <li>
                <div id="solutions-link" className="font-medium mt-[0.17rem] text-sm text-slate-500 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out cursor-pointer font-semibold">
                  Solutions
                </div>
              </li>
              
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 py-2 mx-4 lg:mx-5 transition duration-150 ease-in-out cursor-pointer font-semibold" href="/services">Services</Link>
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

      {/* Full-width Megamenu */}
      <div 
        id="megamenu"
        className={`absolute left-0 w-full bg-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          megamenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '100%' }}
      >
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-4 gap-4">
          
        <ul>
            <li className="px-4 py-2 hover:bg-gray-200 rounded">
            <Link href="/solutions/ai-stack">
                <div className="font-bold text-sm text-gray-800">AI Stack Modernization
                </div>
              </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 rounded">
            <Link href="/solutions/architecture">
                <div className="font-bold text-sm text-gray-800 ">Architecture Simplification
                </div>
              </Link>
              </li>
          </ul>
          
          <ul>
            <li className="px-4 py-2 font-bold text-sm text-gray-800 rounded">Solutions by Business Unit</li>
            <li className="px-4 py-2 hover:bg-gray-200 rounded text-sm text-gray-600 ">Human Resources</li>
            <li className="px-4 py-2 hover:bg-gray-200 rounded text-sm text-gray-600 ">Finance</li>
            <li className="px-4 py-2 hover:bg-gray-200 rounded text-sm text-gray-600 ">Product</li>
            <li className="px-4 py-2 hover:bg-gray-200 rounded text-sm text-gray-600 ">Legal</li>
          </ul>
          <ul>
          <li className="px-4 py-2 font-bold text-sm text-gray-800 rounded">Solutions by Use Cases</li>

            <li className="px-4 py-2 hover:bg-gray-200 rounded">
              <Link href="/solutions/key-value">
                <div className="text-sm text-gray-600 ">Key-Value Extraction</div>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 rounded">
              <Link href="/solutions/vector-search">
                <div className="text-sm text-gray-600 ">Vector Embedding Generation</div>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 rounded">
              <Link href="/solutions/in-database-rag">
                <div className="text-sm text-gray-600 ">In-Database RAG</div>
              </Link>
            </li>
          </ul>
          
          <ul>
            <li><Link href="/">
                <Image src={ContactMenu} alt="Contact Menu" />
              </Link>
              </li>
              </ul>
        </div>
      </div>
    </header>
  )
}