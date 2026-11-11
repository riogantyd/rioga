'use client';

import { useState } from 'react';
import { contact, profile } from '@/data/site';
import { ArrowIcon } from './Icons';
import { Section } from './Section';

const field =
  'mt-1 w-full border-0 border-b border-ink/40 bg-transparent py-2.5 text-[17px] text-ink outline-none transition-colors duration-300 placeholder:text-muted/70 hover:border-ink focus:border-stamp focus-visible:outline-none';

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
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'WhatsApp', value: profile.phoneDisplay, href: `https://wa.me/${profile.whatsapp}` },
    { label: 'LinkedIn', value: 'in/rioganatayudha', href: profile.linkedin },
    { label: 'Location', value: profile.location, href: undefined as string | undefined },
  ];

  return (
    <Section id="contact" copy="canary">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.6rem,5vw,4.5rem)]">{contact.heading}</h2>
          <p className="mt-6 max-w-[30rem] text-[18px] leading-[1.6] text-muted">{contact.subtext}</p>

          <dl className="mt-12 border-t border-ink">
            {details.map((d) => (
              <div key={d.label} className="grid grid-cols-[7rem_1fr] items-baseline border-b border-ink/30 py-4">
                <dt className="field">{d.label}</dt>
                <dd className="text-[16px]">
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="draw-link font-medium"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form
          className="stack stack-open flex flex-col gap-7 border border-ink/25 bg-sheet p-6 md:p-10 lg:col-span-6 lg:col-start-7"
          onSubmit={(e) => {
            e.preventDefault();
            void send();
          }}
        >
          <p className="field -mb-2 flex justify-between border-b border-hair pb-3">
            <span>Message form</span>
            <span>* required</span>
          </p>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <label className="field block">
              Name *
              <input
                className={field}
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="field block">
              Email *
              <input
                className={field}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <label className="field block">
              Company / organization
              <input
                className={field}
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </label>
            <label className="field block">
              Reason
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
            </label>
          </div>
          <label className="field block">
            Message *
            <textarea
              className={`${field} resize-none`}
              rows={4}
              name="message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

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

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" disabled={!canSend} className="btn btn-solid disabled:cursor-not-allowed disabled:opacity-40 disabled:before:hidden">
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <ArrowIcon />
            </button>
            <p aria-live="polite" className="max-w-[22rem] text-[14px] leading-snug text-muted">
              {status === 'sent' ? (
                <span className="font-medium text-ink">Thank you, your message is in. I usually reply within a day.</span>
              ) : status === 'error' ? (
                <span className="text-stamp">
                  Your message didn&apos;t go through{error ? `: ${error}` : '.'} Please email me at {profile.email}.
                </span>
              ) : (
                'Stored privately and sent straight to me. I never share your details.'
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
