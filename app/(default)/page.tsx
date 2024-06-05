export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import PricingTabs from '@/components/pricing-tabs'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'
import DatabasesSec from '@/components/databases'
import Loop from '@/components/loop'
import Why from '@/components/feat'
import IntegrationsSec from '@/components/integrations'
import MediaTabs from '@/components/mediatab'
import TestimonialsCarousel from '@/components/testimonials-carousel'

export default function Home() {
  return (
    <>
      <Hero />
      <Features02 />
      <Loop />
      <DatabasesSec />
      <Why />
      <IntegrationsSec />
      <Features01 />
      <Features03 />
      <TestimonialsCarousel />
      <Cta />
    </>
  )
}
