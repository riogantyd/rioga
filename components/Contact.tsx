'use client';

import { useState } from 'react';
import { contact, profile } from '@/data/site';
import { ArrowIcon, LinkedInIcon, MailIcon, PinIcon, WhatsAppIcon } from './Icons';

const field =
  'w-full border-0 border-b border-line bg-transparent py-3 text-[15px] text-ink-900 outline-none transition-colors duration-300 placeholder:text-ink-600/60 focus:border-navy-700';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const empty = (reason: string) => ({ name: '', email: '', company: '', reason, message: '', website: '' });

export function Contact() {
  const [form, setForm] = useState(empty(contact.reasons[0]));
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const emailLooksValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim());
  const canSend = form.name.trim() !== '' && emailLooksValid && form.message.trim() !== '' && status !== 'sending';

  // Writes straight to Firestore from the browser — see lib/firebase.ts and FIREBASE.md.
  const send = async () => {
    if (!canSend) return;

    // Honeypot: real people never fill this in, bots usually do.
    if (form.website !== '') {
      setStatus('sent');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const [{ getDb, MESSAGES_COLLECTION }, { addDoc, collection, serverTimestamp }] = await Promise.all([
        import('@/lib/firebase'),
        import('firebase/firestore'),
      ]);

      await addDoc(collection(getDb(), MESSAGES_COLLECTION), {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        reason: form.reason,
        message: form.message.trim(),
        createdAt: serverTimestamp(),
        page: typeof window === 'undefined' ? '' : window.location.pathname,
        userAgent: typeof navigator === 'undefined' ? '' : navigator.userAgent.slice(0, 500),
      });

      setForm(empty(contact.reasons[0]));
      setStatus('sent');
    } catch (e) {
      console.error('Contact form failed:', e);
      setError(e instanceof Error ? e.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  const details = [
    { label: 'Location', value: profile.location, Icon: PinIcon, href: undefined as string | undefined },
    { label: 'Email', value: profile.email, Icon: MailIcon, href: `mailto:${profile.email}` },
    { label: 'WhatsApp', value: profile.phoneDisplay, Icon: WhatsAppIcon, href: `https://wa.me/${profile.whatsapp}` },
  ];

  const detailShell = 'group flex items-center gap-4 rounded-card border border-line p-3 transition duration-300';

  return (
    <section id="contact" className="bg-alt py-24">
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 rounded-card border border-line bg-white p-8 shadow-card md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-heading text-[40px] font-bold leading-[48px] tracking-tight">{contact.heading}</h2>
            <p className="mt-4 max-w-[420px] text-[15px] leading-7 text-ink-600">{contact.subtext}</p>

            <ul className="mt-10 flex flex-col gap-4">
              {details.map((d) => {
                const inner = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-alt text-navy-700 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-white">
                      <d.Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[13px] leading-5 text-ink-600">{d.label}</span>
                      <span className="block text-[15px] leading-6 text-ink-900">{d.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className={`${detailShell} hover:-translate-y-0.5 hover:border-navy-700/25 hover:shadow-card-hover`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={detailShell}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-600 transition-colors duration-300 hover:border-navy-700 hover:bg-navy-700 hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-600 transition-colors duration-300 hover:border-navy-700 hover:bg-navy-700 hover:text-white"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              className={field}
              placeholder="Name*"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              placeholder="Email*"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={field}
              placeholder="Company / Organization"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <select
              className={`${field} cursor-pointer`}
              name="reason"
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
              name="message"
              placeholder="Message*"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            {/* Honeypot — hidden from people, catnip for bots. */}
            <input
              className="hidden"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
            />

            <button
              type="submit"
              disabled={!canSend}
              className="group mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-[15px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-card-hover disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-40 disabled:shadow-none"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p aria-live="polite" className="text-[13px] leading-5 text-ink-600">
              {status === 'sent' ? (
                <span className="font-medium text-navy-700">Thank you — your message is in. I usually reply within a day.</span>
              ) : status === 'error' ? (
                <span className="text-red-600">
                  Your message didn&apos;t go through{error ? `: ${error}` : '.'} Please email me at {profile.email}.
                </span>
              ) : (
                'Your message is stored privately and goes straight to me. I never share your details.'
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
