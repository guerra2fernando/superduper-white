"use client";

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import duncanImage from '@/public/images/duncan.png'
import timoImage from '@/public/images/timo.png'
import fotisImage from '@/public/images/fotis.jpg'
import guyImage from '@/public/images/guy.jpg'

interface TeamMember {
  name: string
  role: string
  image: StaticImageData
  linkedin: string
}

export default function LeadershipTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers: TeamMember[] = [
    {
          name: 'Timo Hagenow',
          role: 'Co-founder & CEO',
          image: timoImage,
          linkedin: 'https://www.linkedin.com/in/timohagenow/'
    },
    {
      name: 'Duncan Blythe',
      role: 'Co-founder & CTO',
      image: duncanImage,
      linkedin: 'https://www.linkedin.com/in/duncan-blythe-71877312b/'
    },
    {
      name: 'Fotis Nikolaidis',
      role: 'Head of Infrastructure',
      image: fotisImage,
      linkedin: 'https://www.linkedin.com/in/fotis-nikolaidis-444a6634/'
    },
    {
      name: 'Guy Figdor',
      role: 'Board Member',
      image: guyImage,
      linkedin: 'https://www.linkedin.com/in/guyfig/'
    }
  ]

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h2 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative w-48 h-48 mb-4">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-full"
                  />
                  {hoveredMember === index && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
                    >
                      <svg 
                        className="w-10 h-10 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path 
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{member.name}</h3>
                <p className="text-sm text-zinc-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}