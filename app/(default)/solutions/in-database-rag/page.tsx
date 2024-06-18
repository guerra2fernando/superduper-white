export const metadata = {
  title: 'In-Database RAG - Superduper',
  description: 'Easily build generative AI RAG applications, such as AI chatbots, directly on your database. Enjoy end-to-end RAG workflows, instant data processing, scalable deployment, and seamless API switching.',
  keywords: 'Preconfigured AI workflow templates, In-Database RAG, Retrieval Augmented Generation, AI chatbots, generative AI, RAG applications, AI frameworks, LangChain, LLamaIndex, scalable deployment, fine-tune LLMs, API switching',
  author: 'Superduper',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  og: {
    title: 'In-Database RAG - Superduper',
    description: 'Build generative AI RAG applications directly on your database with Superduper. Enjoy end-to-end RAG workflows, instant data processing, scalable deployment, and seamless API switching.',
    image: 'https://superduper.io/og-image.jpg',
    url: 'https://superduper.io/solutions/in-database-rag'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'In-Database RAG - Superduper',
    description: 'Build generative AI RAG applications directly on your database with Superduper. Enjoy end-to-end RAG workflows, instant data processing, scalable deployment, and seamless API switching.',
    image: 'https://superduper.io/og-image.jpg',
  }
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
