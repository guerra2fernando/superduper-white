export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import Cta2 from '@/components/cta2'
import UseCasesInDatabase from '@/components/use-cases-in-database'
import FeaturesInDatabase from '@/components/features-in-database'
import HeroInDatabase from '@/components/hero-in-database-rag'

export default function Home() {
  return (
    <>
      <HeroInDatabase />
      <FeaturesInDatabase />
      <UseCasesInDatabase />
      <Cta2 />
    </>
  )
}
