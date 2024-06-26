import React from "react";
import Image from "next/image";
import mongodb from "@/public/images/databases/mongodb.png";
import sqlite from "@/public/images/databases/sqlite.png";
import snowflake from "@/public/images/databases/snowflake.png";
import mysql from "@/public/images/databases/mysql.png";
import s3 from "@/public/images/databases/s3.png";
import pandas from "@/public/images/databases/pandas.png";
import oracle from "@/public/images/databases/oracle.png";
import postgresql from "@/public/images/databases/postgresql.png";
import impala from "@/public/images/databases/impala.png";
import duckdb from "@/public/images/databases/duckdb.png";
import clickhouse from "@/public/images/databases/clickhouse.png";
import trino from "@/public/images/databases/trino.png";
import Illustration from "@/public/images/enterpriseGrid.svg";

const databases = [
  { src: pandas, name: "Pandas" },
  { src: s3, name: "AWS S3" },
  { src: oracle, name: "Oracle" },
  { src: sqlite, name: "SQLite" },
  { src: postgresql, name: "PostgreSQL" },
  { src: mongodb, name: "MongoDB" },
  { src: snowflake, name: "Snowflake" },
  { src: mysql, name: "MySQL" },
  { src: duckdb, name: "DuckDB" },
  { src: impala, name: "Impala" },
  { src: clickhouse, name: "ClickHouse" },
  { src: trino, name: "Trino" },
];

const DatabasesSec: React.FC = () => {
  return (
    <section className="pb-14 pt-10 relative">
      {/* Illustration */}
      <div
        className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none mt-40"
        style={{ top: "-300px" }}
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none opacity-20"
          width={2146}
          priority
          alt="Hero Illustration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
      </div>
      <div
        className="mx-auto px-4 sm:px-6 relative"
        style={{ maxWidth: "96rem" }}
      >
        <div className="overflow-hidden relative mask-fade">
          <div className="flex space-x-6 animate-scroll items-center h-40">
            {databases.map((database, index) => (
              <DatabaseItem key={index} database={database} />
            ))}
            {databases.map((database, index) => (
              <DatabaseItem key={`clone-${index}`} database={database} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DatabaseItem: React.FC<{ database: { src: any; name: string } }> = ({ database }) => {
  const isPartner = database.name === "MongoDB" || database.name === "Snowflake";

  return (
    <div className="relative flex flex-col items-center justify-center min-w-[8rem] mx-2">
      {isPartner && (
        <div
          className={`absolute top-0 left-0 right-0 flex justify-center ${
            database.name === "Snowflake" ? "bg-[#29b5e8]" : "bg-[#00684A]"
          } font-semibold text-white text-xs rounded-t-[10px] py-1`}
          style={{ fontSize: "12px" }}
        >
          Official Partner
        </div>
      )}
      <div
        className={`flex flex-col items-center justify-center min-w-[8rem] p-4 mx-2 rounded-lg shadow-light2 border border-gray-300 bg-white ${
          isPartner ? "mt-4" : ""
        }`}
      >
        <Image
          className="h-16 w-auto mb-2"
          loading="lazy"
          src={database.src}
          alt={`Logo of ${database.name}`}
        />
        <p className="text-sm text-gray-700">{database.name}</p>
      </div>
    </div>
  );
};

export default DatabasesSec;