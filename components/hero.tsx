"use client";

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Stats from '@/components/stats'

const databases = [
  'Snowflake',
  'MongoDB',
  'PostgreSQL',
  'DuckDB',
  'SQLite',
  'MySQL',
]

export default function Hero() {
  const [currentDb, setCurrentDb] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const type = useCallback(() => {
    const fullText = databases[currentDb]
    setDisplayText(prev => 
      isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
    )

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentDb((prev) => (prev + 1) % databases.length)
    }
  }, [currentDb, isDeleting, displayText])

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(type, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [type, isDeleting])

  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-white before:-z-10">
      <div className="pt-32 pb-14 md:pt-40 md:pb-14">
        
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                Implement custom AI solutions with <em className="relative not-italic inline-flex justify-center items-end text-zinc-900">
                  <span className="min-w-[200px] text-left">{displayText}<span className="animate-blink">|</span></span>
                </em>
                </h1>
                <p className="text-lg text-zinc-500 mb-8">
                Superduper is an end-to-end platform for integrating AI models and workflows directly with major databases - for more flexible, secure and scalable enterprise AI adoption. 
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div>
                    <Link className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/contact">Schedule a Demo</Link>
                  </div>
                  <div>
                    <a className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="https://github.com/SuperduperDB/superduperdb">Open Source on GitHub</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}