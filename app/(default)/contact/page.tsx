"use client";

import Community from './community';
import { useState, ChangeEvent, FormEvent } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const publicEmailProviders = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData({ ...formData, phone: value || '' });
  };

  const isWorkEmail = (email: string) => {
    const domain = email.split('@')[1];
    return !publicEmailProviders.includes(domain);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isWorkEmail(formData.email)) {
      alert('Please use a work email address (no public email providers).');
      return;
    }

    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    try {
      const res = await fetch('https://handle-email-form-fernando67.replit.app/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (res.ok) {
        alert('Thank you for contacting SuperDuper!');
      } else {
        const errorData = await res.json();
        alert(`There was an error: ${errorData.message}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`There was an error: ${error.message}`);
      } else {
        alert('An unknown error occurred.');
      }
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
                      <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="phone">Phone Number</label>
                      <PhoneInput
                        id="phone"
                        className="form-input text-sm w-full border-none custom-phone-input"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                      />
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
                  <div className="text-xs text-zinc-400">
                  By submitting this form, you agree that SuperDuperDB may collect, store, and process your personal data. This data will be used solely for the purposes of providing and improving our services and will not be shared with third parties without your consent. Additionally, you consent to being contacted by SuperDuperDB regarding our services and any relevant updates.
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
