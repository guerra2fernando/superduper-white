export const metadata = {
  title: 'Document Key-Value Extraction + RAG - SuperDuper AI',
  description: 'Accurately retrieve mission-critical information from documents into your database for downstream business operations like accounting, analytics, and decision-making. Automate extraction of information as key-value pairs with our preconfigured AI app template using the latest LLMs, vector search, and RAG architecture.',
  keywords: 'Document Key-Value Extraction, RAG, AI, machine learning, enterprise AI, document processing, key-value pairs, LLMs, vector search, custom AI chat, data automation, CRM, ERP, HR tools, data security, auto-scale, fine-tuning models',
  author: 'SuperDuper',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  og: {
    title: 'Document Key-Value Extraction + RAG - SuperDuper AI',
    description: 'Automate extraction of key-value pairs from documents and store them in your database using SuperDuper\'s AI app template with LLMs, vector search, and RAG architecture.',
    image: 'https://superduper.io/og-image.jpg',
    url: 'https://superduper.io/solutions/key-value'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document Key-Value Extraction + RAG - SuperDuper AI',
    description: 'Automate extraction of key-value pairs from documents and store them in your database using SuperDuper\'s AI app template with LLMs, vector search, and RAG architecture.',
    image: 'https://superduper.io/og-image.jpg',
  }
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
