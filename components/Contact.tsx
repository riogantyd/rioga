'use client';

import { useState } from 'react';
import { contact, profile } from '@/data/site';
import { LinkedInIcon, MailIcon, PinIcon, WhatsAppIcon } from './Icons';

const field =
  'w-full border-0 border-b border-line bg-transparent py-3 text-[15px] text-ink-900 outline-none transition-colors placeholder:text-ink-600/60 focus:border-navy-700';

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    reason: contact.reasons[0],
    message: '',
  });

  // No backend: the form composes a WhatsApp message and opens wa.me
  const send = () => {
    const lines = [
      `Halo Rioga, saya ${form.name || '-'}.`,
      '',
      `Email: ${form.email || '-'}`,
      form.company ? `Perusahaan: ${form.company}` : '',
      `Perihal: ${form.reason}`,
      '',
      form.message || '',
    ].filter(Boolean);

    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  };

  const details = [
    { label: 'Location', value: profile.location, Icon: PinIcon },
    { label: 'Email', value: profile.email, Icon: MailIcon },
    { label: 'WhatsApp', value: profile.phoneDisplay, Icon: WhatsAppIcon },
  ];

  return (
    <section id="contact" className="bg-alt py-24">
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 rounded-card border border-line bg-white p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-heading text-[40px] font-bold leading-[48px] tracking-tight">{contact.heading}</h2>
            <p className="mt-4 max-w-[420px] text-[15px] leading-7 text-ink-600">{contact.subtext}</p>

            <ul className="mt-10 flex flex-col gap-4">
              {details.map((d) => (
                <li key={d.label} className="flex items-center gap-4 rounded-card border border-line p-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-700 text-white">
                    <d.Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[13px] leading-5 text-ink-600">{d.label}</span>
                    <span className="block text-[15px] leading-6 text-ink-900">{d.value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-600 transition-colors hover:bg-alt hover:text-navy-700"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-600 transition-colors hover:bg-alt hover:text-navy-700"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <input
              className={field}
              placeholder="Name*"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              placeholder="Email*"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={field}
              placeholder="Company / Organization"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <select
              className={`${field} cursor-pointer`}
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            >
              {contact.reasons.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
            <textarea
              className={`${field} resize-none`}
              rows={4}
              placeholder="Message*"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              onClick={send}
              disabled={!form.name || !form.message}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <WhatsAppIcon className="h-4 w-4" /> Send via WhatsApp
            </button>
            <p className="text-[13px] leading-5 text-ink-600">
              This opens WhatsApp with your message ready to send.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
