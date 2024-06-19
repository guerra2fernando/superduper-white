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

const DatabasesSec2: React.FC = () => {
    return (
        <section className='bg-zinc-800 pb-20'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">
                        Instead of bringing your data to AI, bring AI to your databases
                        </h2>
                        <p className="text-lg text-slate-400">
                        Superduper integrates with your existing databases, facilitating data transfer to AI models, APIs and frameworks, ensuring that all steps of your AI workflows are contained in your databases end-to-end, instead of being spread across various places, systems and environments. 
                        </p>
                    </div>

                    <div className="overflow-hidden relative">
                        <div className="flex space-x-6 animate-scroll">
                            {[...databases, ...databases].map((database, index) => (
                                <div key={index} className="flex flex-col items-center min-w-[8rem] bg-transparent shadow-light border border-gray-700 p-4 mx-2 rounded-lg">
                                    <Image
                                        className="h-16 w-auto mb-2"
                                        loading="lazy"
                                        src={database.src}
                                        alt={`Logo of ${database.name}`}
                                    />
                                    <p className="text-sm text-zinc-500">{database.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient for fading effect */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
                        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-zinc-800 to-transparent"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-zinc-800 to-transparent"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DatabasesSec2;
