// page.tsx
"use client";

import Blocks from './blocks';
import Community from './community';
import { useState, ChangeEvent, FormEvent } from 'react';
import { metadata } from './metadata';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const emailData = {
      to: 'demo@superduperdb.com',
      subject: `[FORM] Message from ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nChannel: ${formData.channel}\nMessage: ${formData.message}`
    };

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (res.ok) {
      alert('Thank you for contacting SuperDuper!');
    } else {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <>
      <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">Get started with SuperDuper</h1>
              <p className="text-lg text-zinc-500">Talk to an expert about your requirements, needs, and timeline. Use the form or schedule a meeting below.</p>
            </div>

            {/* Form and Calendly Widget side by side */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-8">
              {/* Form */}
              <div className="max-w-[40rem] w-full p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
                <h2 className="text-xl font-bold text-zinc-800 mb-4">Send us a message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="name">Full Name</label>
                      <input id="name" className="form-input text-sm w-full" type="text" placeholder="Patrick Rossi" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="email">Work Email</label>
                      <input id="email" className="form-input text-sm w-full" type="email" placeholder="mark@acmecorp.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="message">Project Details</label>
                      <textarea id="message" className="form-textarea text-sm w-full" rows={4} placeholder="Share your requirements" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow">Request Demo</button>
                  </div>
                </form>
                <div className="text-center mt-6">
                  <div className="text-xs text-zinc-500">
                    By submitting you agree with our <a className="underline hover:no-underline" href="#0">Terms</a>
                  </div>
                </div>
              </div>

              {/* Calendly Widget */}
              <div className="max-w-[40rem] w-full p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
                <h2 className="text-xl font-bold text-zinc-800 mb-4">Schedule a meeting</h2>
                <div className="calendly-inline-widget" data-url="https://calendly.com/superduper-demo/30min" style={{ minWidth: '320px', height: '700px' }}></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Community />      
    </>
  );
}
