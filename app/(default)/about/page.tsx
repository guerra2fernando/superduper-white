export const metadata = {
  title: 'About - Superduper',
  description: 'Jumpstart your enterprise AI adoption with Superduper. Choose from our Community Edition or Enterprise plans to deliver custom AI solutions with no friction and minimal complexity.',
  keywords: 'AI pricing, enterprise AI, Community Edition, Enterprise plan, AI deployment, AI management, custom AI solutions, scalable AI, secure AI, AI workflow templates',
  author: 'Superduper',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  og: {
    title: 'Pricing - Superduper',
    description: 'Explore Superduper pricing plans: Community Edition and Enterprise. Deliver custom AI solutions efficiently and securely.',
    image: 'https://superduper.io/og-image.jpg',
    url: 'https://superduper.io/pricing'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Superduper',
    description: 'Explore Superduper pricing plans: Community Edition and Enterprise. Deliver custom AI solutions efficiently and securely.',
    image: 'https://superduper.io/og-image.jpg',
  }
}


import Cta from '@/components/cta'
import HeroAbout from '@/components/hero-about'
import LeadershipTeam from '@/components/leadership'
import Community from '../contact/community'
import Investors from '@/components/investors'

export default function Home() {
  return (
    <>
      <HeroAbout />
      <LeadershipTeam />
      <Investors />
      <Community />
    </>
  )
}
