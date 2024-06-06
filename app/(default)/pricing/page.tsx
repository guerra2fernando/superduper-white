export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import HeroPricing from '@/components/hero-pricing'
import PricingTabs from '@/components/pricing-tabs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <HeroPricing />
      <PricingTabs />
      <Cta />
    </>
  )
}
