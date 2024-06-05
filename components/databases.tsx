import React from 'react';
import Image from 'next/image';
import mongodb from '@/public/images/databases/mongodb.png';
import sqlite from '@/public/images/databases/sqlite.png';
import snowflake from '@/public/images/databases/snowflake.png';
import mysql from '@/public/images/databases/mysql.png';
import s3 from '@/public/images/databases/s3.png';
import pandas from '@/public/images/databases/pandas.png';
import oracle from '@/public/images/databases/oracle.png';
import postgresql from '@/public/images/databases/postgresql.png';
import impala from '@/public/images/databases/impala.png';
import duckdb from '@/public/images/databases/duckdb.png';
import clickhouse from '@/public/images/databases/clickhouse.png';
import trino from '@/public/images/databases/trino.png';

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

const databases = [
    { src: mongodb, name: 'MongoDB' },
    { src: sqlite, name: 'SQLite' },
    { src: snowflake, name: 'Snowflake' },
    { src: mysql, name: 'MySQL' },
    { src: s3, name: 'AWS S3' },
    { src: pandas, name: 'Pandas' },
    { src: oracle, name: 'Oracle' },
    { src: postgresql, name: 'PostgreSQL' },
    { src: impala, name: 'Impala' },
    { src: duckdb, name: 'DuckDB' },
    { src: clickhouse, name: 'ClickHouse' },
    { src: trino, name: 'Trino' },
];

const integrations = [
    { src: anthropic, name: 'Anthropic' },
    { src: huggingface, name: 'Hugging Face' },
    { src: openai, name: 'OpenAI' },
    { src: googleBigQuery, name: 'Google BigQuery' },
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

const DATABASES_PER_ROW = 6;

const DatabasesSec: React.FC = () => {
    return (
        <section className='bg-zinc-800 pb-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">Instead of bringing your data to AI, bring your AI deployment to your data.</h2>
            <p className="text-lg text-slate-400">Superduper integrates with your existing databases, facilitating data transfer to AI models APIs and frameworks, ensuring that all steps of your AI workflows are contained in your databases end-to-end, instead of being spread across various places and systems and environments. 
</p>
          </div>
            <div className="database-logos">
                {databases.map((database, index) => (
                  <div
                    key={index}
                    className={`logo-row${Math.floor(index / DATABASES_PER_ROW) + 1}`}
                  >
                    <Image
                      className="database-logo"
                      loading="lazy"
                      src={database.src}
                      alt={`Logo of ${database.name}`}
                    />
                    <p className="grow max-w-md text-sm text-zinc-500 text-database">{database.name}</p>
                  </div>
                ))}
            </div>
            </div>
            </div>
        </section>
    );
};

export default DatabasesSec;
