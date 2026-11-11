'use client';

import Link from 'next/link';
import { useState } from 'react';
import { nav, profile } from '@/data/site';
import { ArrowIcon } from './Icons';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper pt-2 md:pt-[22px]">
      <div className="mx-2 border-b border-hair md:mx-[22px]">
        <div className="mx-auto flex h-16 w-full max-w-sheet items-center justify-between px-5 md:px-10">
          <Link href="/" className="draw-link font-semibold [font-stretch:112%] tracking-[-0.01em]">
            {profile.name}
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="draw-link text-[15px] text-ink">
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn btn-solid py-2.5 text-[14px]">
              Contact
              <ArrowIcon />
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center border border-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Main" className="border-t border-hair px-5 pb-6 pt-2 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-hair py-4 text-[20px] font-semibold [font-stretch:112%]"
              >
                {item.label}
                <ArrowIcon className="h-4 w-4 text-graphite" />
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-solid mt-6 w-full">
              Contact
              <ArrowIcon />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
