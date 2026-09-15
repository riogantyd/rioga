'use client';

import { useState } from 'react';
import { testimonials } from '@/data/site';
import { Section } from './Section';

export function Testimonials() {
  const [i, setI] = useState(0);
  const items = testimonials.items;
  if (items.length === 0) return null;
  const t = items[i];

  return (
    <Section>
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="font-heading text-[40px] font-bold leading-[48px] tracking-tight">{testimonials.heading}</h2>

        <blockquote className="mx-auto mt-10 max-w-[680px] text-lg leading-[30px] text-ink-900">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <p className="mt-8 text-[15px] font-semibold leading-6 text-ink-900">{t.name}</p>
        <p className="mt-1 text-[13px] leading-5 text-ink-600">{t.role}</p>

        {items.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === i ? 'w-6 bg-navy-900' : 'w-2 bg-line'}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
