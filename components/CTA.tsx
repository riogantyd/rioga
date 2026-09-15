import Link from 'next/link';
import { ctaBand } from '@/data/site';

export function CTA() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto w-full max-w-content px-6 text-center">
        <h2 className="mx-auto max-w-[720px] font-heading text-[40px] font-bold leading-[48px] tracking-tight text-white">
          {ctaBand.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-7 text-white/80">{ctaBand.subtext}</p>
        <Link
          href="#contact"
          className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-[15px] font-medium text-navy-900 transition-opacity hover:opacity-90"
        >
          {ctaBand.button}
        </Link>
      </div>
    </section>
  );
}
