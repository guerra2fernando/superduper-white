// page.tsx
"use client";

import Community from './community';
import { metadata } from './metadata';

export default function Home() {
  return (
    <>
      {/* Demo form */}
      <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">Get started with SuperDuper</h1>
              <p className="text-lg text-zinc-500">Talk to an expert about your requirements, needs, and timeline. Use the calendar below to schedule a demo.</p>
            </div>

            {/* Calendly Widget */}
            <div className="max-w-7x1 mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
              <div className="calendly-inline-widget" data-url="https://calendly.com/superduper-demo/30min" style={{ minWidth: '320px', height: '700px' }}></div>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>

          </div>
        </div>
      </section>

      <Community />      
    </>
  );
}
