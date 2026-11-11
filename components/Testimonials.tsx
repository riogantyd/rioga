'use client';

import { useState } from 'react';
import { testimonials } from '@/data/site';
import { Section } from './Section';

// The quote is the sheet's sign-off: set large, with the approver in a title-block row beneath.
export function Testimonials() {
  const [i, setI] = useState(0);
  const items = testimonials.items;
  if (items.length === 0) return null;
  const t = items[i];

  return (
    <Section sheet="Sign-off">
      <h2 className="sr-only">{testimonials.heading}</h2>
      <figure className="grid grid-cols-1 lg:grid-cols-12">
        <blockquote lang="id" className="display text-[clamp(1.7rem,3.2vw,2.75rem)] !font-medium !leading-[1.2] lg:col-span-10">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-12 grid grid-cols-1 border-y border-ink sm:grid-cols-[1fr_1fr_auto] lg:col-span-12">
          <div className="border-b border-ink py-4 sm:border-b-0 sm:border-r sm:pr-6">
            <p className="field">Approved by</p>
            <p className="mt-1 font-semibold">{t.name}</p>
          </div>
          <div className="py-4 sm:px-6">
            <p className="field">Position</p>
            <p className="mt-1">{t.role}</p>
          </div>
          {items.length > 1 && (
            <div className="flex items-center gap-2 py-4 sm:pl-6">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Testimonial ${idx + 1}`}
                  aria-current={idx === i}
                  className={`h-6 w-6 border border-ink text-[12px] ${idx === i ? 'bg-ink text-paper' : ''}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </figcaption>
      </figure>
    </Section>
  );
}
