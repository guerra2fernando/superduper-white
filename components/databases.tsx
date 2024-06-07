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
    { src: pandas, name: 'Pandas' },
    { src: s3, name: 'AWS S3' },
    { src: oracle, name: 'Oracle' },
    { src: mongodb, name: 'MongoDB' },
    { src: sqlite, name: 'SQLite' },
    { src: postgresql, name: 'PostgreSQL' },
    { src: mysql, name: 'MySQL' },
    { src: snowflake, name: 'Snowflake' },
    { src: duckdb, name: 'DuckDB' },
    { src: impala, name: 'Impala' },
    { src: clickhouse, name: 'ClickHouse' },
    { src: trino, name: 'Trino' },
    { src: pandas, name: 'Pandas' },
    { src: s3, name: 'AWS S3' },
    { src: oracle, name: 'Oracle' },
    { src: mongodb, name: 'MongoDB' },
    { src: sqlite, name: 'SQLite' },
    { src: postgresql, name: 'PostgreSQL' },
    { src: mysql, name: 'MySQL' },
    { src: snowflake, name: 'Snowflake' },
    { src: duckdb, name: 'DuckDB' },
    { src: impala, name: 'Impala' },
    { src: clickhouse, name: 'ClickHouse' },
    { src: trino, name: 'Trino' },
    { src: pandas, name: 'Pandas' },
    { src: s3, name: 'AWS S3' },
    { src: oracle, name: 'Oracle' },
    { src: mongodb, name: 'MongoDB' },
    { src: sqlite, name: 'SQLite' },
    { src: postgresql, name: 'PostgreSQL' },
    { src: mysql, name: 'MySQL' },
    { src: snowflake, name: 'Snowflake' },
    { src: duckdb, name: 'DuckDB' },
    { src: impala, name: 'Impala' },
    { src: clickhouse, name: 'ClickHouse' },
    { src: trino, name: 'Trino' },
];

const DatabasesSec: React.FC = () => {
    return (
        <section className='bg-white pb-14 pt-10'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                <div >

                    <div className="overflow-hidden relative">
                        <div className="flex space-x-6 animate-scroll">
                            {[...databases, ...databases].map((database, index) => (
                                <div key={index} className="flex flex-col items-center min-w-[8rem] bg-white shadow-light2 border border-gray-300 p-4 mx-2 rounded-lg">
                                    <Image
                                        className="h-16 w-auto mb-2"
                                        loading="lazy"
                                        src={database.src}
                                        alt={`Logo of ${database.name}`}
                                    />
                                    <p className="text-sm text-gray-700">{database.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient for fading effect */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
                        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DatabasesSec;
