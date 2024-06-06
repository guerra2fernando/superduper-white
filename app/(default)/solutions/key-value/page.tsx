export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import HeroKey from '@/components/hero-key-value'
import Cta2 from '@/components/cta2'
import FeaturesKeyValue from '@/components/features-key-value'
import UseCases from '@/components/use-cases'

export default function Home() {
  return (
    <>
      <HeroKey />
      <FeaturesKeyValue />
      <UseCases />
      <Cta2 />
    </>
  )
}
