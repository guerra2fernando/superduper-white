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
    const res = await fetch('https://us22.api.mailchimp.com/3.0/lists/9d7c332490c84b6a962591207e250cdc/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'apikey 9d7c332490c84b6a962591207e250cdc-us22',
      },
      body: JSON.stringify({
        email_address: formData.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: formData.name,
          CHANNEL: formData.channel,
          MESSAGE: formData.message,
        },
      }),
    });

    if (res.ok) {
      alert('Thank you for booking a demo with SuperDuper!');
    } else {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <>
      {/* Demo form */}
      <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">Get started with SuperDuper</h1>
              <p className="text-lg text-zinc-500">Talk to an expert about your requirements, needs, and timeline. Complete the form and we'll make sure to reach out.</p>
            </div>

            {/* Form */}
            <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">

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
                    <label className="block text-sm font-medium mb-2" htmlFor="channel">How did you hear about us?</label>
                    <select id="channel" className="form-select w-full" value={formData.channel} onChange={handleChange} required>
                      <option>Twitter</option>
                      <option>Medium</option>
                      <option>Telegram</option>
                    </select>
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

          </div>
        </div>
      </section>

      <Blocks />
      <Community />      
    </>
  );
}
