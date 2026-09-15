'use client';

import Link from 'next/link';
import { useState } from 'react';
import { nav, profile } from '@/data/site';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-content items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 font-heading text-sm font-semibold text-white">
            {profile.initial}
          </span>
          <span className="font-heading text-lg font-semibold text-ink-900">{profile.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-[15px] text-ink-600 transition-colors hover:text-navy-700">
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-lg bg-navy-700 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-navy-900"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white md:hidden">
          <div className="mx-auto flex max-w-content flex-col px-6 py-4">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="py-3 text-[15px] text-ink-600">
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-navy-700 px-5 py-3 text-center text-[15px] font-medium text-white"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
