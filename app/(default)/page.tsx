export const metadata = {
  title: 'Superduper - AI Integration for Enterprise Databases',
  description: 'Superduper is an end-to-end platform for integrating AI models and workflows directly with and across major databases, providing flexible, secure, and scalable enterprise AI adoption.',
  keywords: 'AI, machine learning, databases, enterprise AI, AI workflows, LLM, RAG, vector embeddings, computer vision, predictive analytics, anomaly detection, time series prediction, secure deployment, scalable AI, AI templates, custom AI solutions, Superduper, SuperduperDB',
  author: 'Superduper',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  og: {
    title: 'Superduper - AI Integration for Enterprise Databases',
    description: 'Implement custom AI solutions on your existing data infrastructure with Superduper, an end-to-end platform for integrating AI models and workflows directly with and across major databases.',
    image: 'https://superduper.com/og-image.jpg',
    url: 'https://superduper.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superduper - AI Integration for Enterprise Databases',
    description: 'Implement custom AI solutions on your existing data infrastructure with Superduper, an end-to-end platform for integrating AI models and workflows directly with and across major databases.',
    image: 'https://superduper.com/og-image.jpg',
  }
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Cta from '@/components/cta'
import DatabasesSec from '@/components/databases'
import Loop from '@/components/loop'
import Why from '@/components/feat'
import IntegrationsSec from '@/components/integrations'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import UseCasesSection from '@/components/use-cases'

export default function Home() {
  return (
    <>
      <Hero />
      <DatabasesSec />
      <Features02 />
      <Loop />
      <UseCasesSection />
      <Why />
      <IntegrationsSec />
      <Features01 />
      <TestimonialsCarousel />
      <Cta />
    </>
  )
}
