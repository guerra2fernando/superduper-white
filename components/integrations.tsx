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
import scikitLearn from '@/public/images/integrations/scikit-learn.png';
import pytorch from '@/public/images/integrations/pytorch.png';
import amazonBedrock from '@/public/images/integrations/amazon-bedrock.png';
import jina from '@/public/images/integrations/jina.png';
import keras from '@/public/images/integrations/keras.png';
import mistral from '@/public/images/integrations/mistral.png';
import numpy from '@/public/images/integrations/numpy.png';
import ollama from '@/public/images/integrations/ollama.png';
import opencv from '@/public/images/integrations/opencv.png';
import ray from '@/public/images/integrations/ray.png';
import sentenceTransformers from '@/public/images/integrations/sentence-transformers.png';
import spacy from '@/public/images/integrations/spacy.png';
import stability from '@/public/images/integrations/stability.png';
import unstructured from '@/public/images/integrations/unstructured.png';
import vllm from '@/public/images/integrations/vllm.png';
import Illustration from "@/public/images/enterpriseGrid.svg";

const integrations = [
    { src: anthropic, name: 'Anthropic' },
    { src: huggingface, name: 'Hugging Face' },
    { src: openai, name: 'OpenAI' },
    { src: googleBigQuery, name: 'BigQuery' },
    { src: cohere, name: 'Cohere' },
    { src: langchain, name: 'LangChain' },
    { src: lancedb, name: 'LanceDB' },
    { src: llamaindex, name: 'LlamaIndex' },
    { src: scikitLearn, name: 'Scikit-Learn' },
    { src: pytorch, name: 'PyTorch' },
    { src: amazonBedrock, name: 'Bedrock' },
    { src: jina, name: 'Jina' },
    { src: keras, name: 'Keras' },
    { src: mistral, name: 'Mistral' },
    { src: numpy, name: 'Numpy' },
    { src: ollama, name: 'Ollama' },
    { src: opencv, name: 'OpenCV' },
    { src: ray, name: 'Ray' },
    { src: sentenceTransformers, name: 'SBERT' },
    { src: spacy, name: 'spaCy' },
    { src: stability, name: 'Stability' },
    { src: unstructured, name: 'Unstructured' },
    { src: vllm, name: 'Vllm' },
    // duplicate the list to create the scrolling effect
    { src: anthropic, name: 'Anthropic' },
    { src: huggingface, name: 'Hugging Face' },
    { src: openai, name: 'OpenAI' },
    { src: googleBigQuery, name: 'BigQuery' },
    { src: cohere, name: 'Cohere' },
    { src: langchain, name: 'LangChain' },
    { src: lancedb, name: 'LanceDB' },
    { src: llamaindex, name: 'LlamaIndex' },
    { src: scikitLearn, name: 'Scikit-Learn' },
    { src: pytorch, name: 'PyTorch' },
    { src: amazonBedrock, name: 'Bedrock' },
    { src: jina, name: 'Jina' },
    { src: keras, name: 'Keras' },
    { src: mistral, name: 'Mistral' },
    { src: numpy, name: 'Numpy' },
    { src: ollama, name: 'Ollama' },
    { src: opencv, name: 'OpenCV' },
    { src: ray, name: 'Ray' },
    { src: sentenceTransformers, name: 'SBERT' },
    { src: spacy, name: 'spaCy' },
    { src: stability, name: 'Stability' },
    { src: unstructured, name: 'Unstructured' },
    { src: vllm, name: 'Vllm' }
];

const IntegrationsSec: React.FC = () => {
    return (
        <section className='pb-20 pt-10 relative'>
            <div
        className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none mt-40"
        style={{ top: "-200px" }}
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none opacity-40"
          width={2146}
          priority
          alt="Hero Illustration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
      </div>
           <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-inter-tight text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900">
                        Work with your favorite technologies and solutions 
                        </h2>
                        <p className="text-lg text-zinc-500 mb-8">
                        Best-in-class support for the latest AI frameworks, libraries, models and APIs. By nature compatible with anything Python.                        </p>
                    </div>
                    <div className="mx-auto px-4 sm:px-6 relative" style={{ maxWidth: '96rem' }}>
                <div className="overflow-hidden relative mask-fade">
                    <div className="flex space-x-6 animate-scroll-right items-center h-40">
                        {[...integrations, ...integrations].map((integration, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center justify-center min-w-[8rem] p-4 mx-2 rounded-lg shadow-light2 border border-gray-300 bg-white"
                            >
                                <Image
                                    className="h-16 w-auto mb-2"
                                    loading="lazy"
                                    src={integration.src}
                                    alt={`Logo of ${integration.name}`}
                                />
                                <p className="text-sm text-gray-700">{integration.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex space-x-6 animate-scroll-left items-center h-40">
                        {[...integrations, ...integrations].map((integration, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center justify-center min-w-[8rem] p-4 mx-2 rounded-lg shadow-light2 border border-gray-300 bg-white"
                            >
                                <Image
                                    className="h-16 w-auto mb-2"
                                    loading="lazy"
                                    src={integration.src}
                                    alt={`Logo of ${integration.name}`}
                                />
                                <p className="text-sm text-gray-700">{integration.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSec;
