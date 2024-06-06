export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import Cta from '@/components/cta'
import DatabasesSec from '@/components/databases'
import Loop from '@/components/loop'
import Why from '@/components/feat'
import IntegrationsSec from '@/components/integrations'
import TestimonialsCarousel from '@/components/testimonials-carousel'

export default function Home() {
  return (
    <>
      <Hero />
      <DatabasesSec />
      <Features02 />
      <Loop />
      <TestimonialsCarousel />
      <Why />
      <IntegrationsSec />
      <Features03 />
      <Features01 />
      <Cta />
    </>
  )
}
