export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import Cta2 from '@/components/cta2'
import UseCasesVector from '@/components/use-cases-vector'
import FeaturesVector from '@/components/features-vector'
import HeroVector from '@/components/hero-vector'

export default function Home() {
  return (
    <>
      <HeroVector />
      <FeaturesVector />
      <UseCasesVector />
      <Cta2 />
    </>
  )
}
