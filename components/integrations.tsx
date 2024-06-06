import React from 'react';
import Image from 'next/image';

import anthropic from '@/public/images/integrations/anthropic.png';
import huggingface from '@/public/images/integrations/huggingface.png';
import openai from '@/public/images/integrations/openai.png';
import googleBigQuery from '@/public/images/integrations/google-big-query.png';
import cohere from '@/public/images/integrations/cohere.png';
import langchain from '@/public/images/integrations/langchain.png';
import lancedb from '@/public/images/integrations/lancedb.png';
import llamaindex from '@/public/images/integrations/llamaindex.png';
import qdrant from '@/public/images/integrations/qdrant.png';
import pinecone from '@/public/images/integrations/pinecone.png';
import scikitLearn from '@/public/images/integrations/scikit-learn.png';
import weaviate from '@/public/images/integrations/weaviate.png';
import pytorch from '@/public/images/integrations/pytorch.png';
import postgresml from '@/public/images/integrations/postgresml.png';

const integrations = [
    { src: anthropic, name: 'Anthropic' },
    { src: huggingface, name: 'Hugging Face' },
    { src: openai, name: 'OpenAI' },
    { src: googleBigQuery, name: 'BigQuery' },
    { src: cohere, name: 'Cohere' },
    { src: langchain, name: 'LangChain' },
    { src: lancedb, name: 'LanceDB' },
    { src: llamaindex, name: 'LlamaIndex' },
    { src: qdrant, name: 'Qdrant' },
    { src: pinecone, name: 'Pinecone' },
    { src: scikitLearn, name: 'Scikit-Learn' },
    { src: weaviate, name: 'Weaviate' },
    { src: pytorch, name: 'PyTorch' },
    { src: postgresml, name: 'PostgresML' },
];


const IntegrationsSec: React.FC = () => {
  return (
    <section className='bg-zinc-800 pb-20'>
    <div className="max-w-12xl relative">
      <div className="pt-12 md:pt-20">
  
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center ">
          <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200 mb-4">
            Work with your favorite technologies and solutions
          </h2>
          <p className="text-lg text-zinc-500 mb-8">
            Best-in-class support for the latest AI frameworks, libraries, models, and APIs. By nature compatible with anything Python.
          </p>
        </div>
  
        <div className="relative"> {/* Removed overflow-hidden */}
          <div className="flex space-x-6 animate-scroll">
            {[...integrations, ...integrations].map((integration, index) => (
              <div key={index} className="flex flex-col items-center min-w-[8rem] bg-transparent shadow-light border border-gray-700 p-4 mx-2 rounded-lg">
                <Image
                  className="h-16 w-auto mb-2"
                  loading="lazy"
                  src={integration.src}
                  alt={`Logo of ${integration.name}`}
                />
                <p className="text-sm text-zinc-200">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
  
      </div>
    </div>
  </section>
  
  );
};

export default IntegrationsSec;
