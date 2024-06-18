export const metadata = {
  title: 'Vector Search Embedding Generation - Superduper',
  description: 'Integrate and manage vector embedding models and APIs with your existing databases, enabling efficient embedding generation and vector search without moving your data. Automate data vectorization and safeguard your data with self-hosted models.',
  keywords: 'Vector Search, Embedding Generation, AI, machine learning, enterprise AI, vector embeddings, data automation, embedding models, vector search engines, data security, self-hosting, scalable inference, fine-tuning models',
  author: 'Superduper',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  og: {
    title: 'Vector Search Embedding Generation - Superduper',
    description: 'Integrate and manage vector embedding models and APIs with your existing databases for efficient embedding generation and vector search without moving your data.',
    image: 'https://superduper.io/og-image.jpg',
    url: 'https://superduper.io/solutions/vector-search'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vector Search Embedding Generation - Superduper',
    description: 'Integrate and manage vector embedding models and APIs with your existing databases for efficient embedding generation and vector search without moving your data.',
    image: 'https://superduper.io/og-image.jpg',
  }
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
