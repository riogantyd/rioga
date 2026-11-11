import Link from 'next/link';
import { nav, profile } from '@/data/site';

// The closing title block.
export function Footer() {
  return (
    <footer className="mx-2 mb-2 md:mx-[22px] md:mb-[22px]">
      <div className="grid grid-cols-2 border-t border-ink md:grid-cols-12">
        <div className="col-span-2 border-b border-ink px-5 py-6 md:col-span-4 md:border-b-0 md:border-r md:px-10">
          <p className="field">Drawn by</p>
          <Link href="/" className="draw-link mt-1 inline-block text-[20px] font-semibold [font-stretch:112%]">
            {profile.name}
          </Link>
        </div>
        <nav aria-label="Footer" className="col-span-2 flex flex-wrap gap-x-7 gap-y-2 border-b border-ink px-5 py-6 md:col-span-5 md:items-end md:border-b-0 md:border-r md:px-8">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="draw-link text-[15px]">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="draw-link text-[15px]">
            Contact
          </Link>
        </nav>
        <div className="col-span-2 px-5 py-6 md:col-span-3 md:px-8">
          <p className="field">Revision</p>
          <p className="mt-1 text-[14px] text-graphite">© 2026 {profile.name}. Built and maintained by me.</p>
        </div>
      </div>
    </footer>
  );
}
