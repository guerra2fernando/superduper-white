export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import HeroKey from '@/components/hero-key-value'
import Cta2 from '@/components/cta2'
import FeaturesKeyValue from '@/components/features-key-value'
import UseCasesKeyValue from '@/components/use-cases-key-value'

export default function Home() {
  return (
    <>
      <HeroKey />
      <FeaturesKeyValue />
      <UseCasesKeyValue />
      <Cta2 />
    </>
  )
}
