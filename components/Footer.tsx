import Link from 'next/link';
import { nav, profile } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-navy-900 py-12 text-white">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-heading text-sm font-semibold text-white">
            {profile.initial}
          </span>
          <span className="font-heading text-lg font-semibold text-white">{profile.shortName}</span>
        </Link>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="text-sm text-white/70 transition-colors hover:text-white">
            Contact
          </Link>
        </nav>

        <p className="text-sm text-white/60">© 2026 {profile.name}. Built and maintained by me.</p>
      </div>
    </footer>
  );
}
