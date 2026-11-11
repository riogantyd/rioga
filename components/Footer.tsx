import Link from 'next/link';
import { nav, profile } from '@/data/site';

// The foot of the form, with the copy-distribution legend every carbon pad prints.
const copies = [
  { label: 'White: original', swatch: 'bg-paper' },
  { label: 'Yellow: copy 1', swatch: 'bg-canary' },
  { label: 'Pink: copy 2', swatch: 'bg-pink' },
];

export function Footer() {
  return (
    <footer className="bg-paper">
      <div aria-hidden className="perf" />
      <div className="mx-auto grid w-full max-w-sheet grid-cols-1 gap-8 px-5 py-10 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <p className="field">Issued by</p>
          <Link href="/" className="draw-link mt-1 inline-block text-[20px] font-semibold [font-stretch:112%]">
            {profile.name}
          </Link>
          <p className="mt-2 text-[14px] text-muted">© 2026 {profile.name}. Built and maintained by me.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-7 gap-y-2 md:col-span-4">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="draw-link text-[15px]">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="draw-link text-[15px]">
            Contact
          </Link>
        </nav>
        <ul aria-hidden className="flex flex-col gap-2 md:col-span-4 md:items-end">
          {copies.map((c) => (
            <li key={c.label} className="field flex items-center gap-2">
              <span className={`h-3 w-5 border border-ink/30 ${c.swatch}`} />
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
