import Link from 'next/link';
import { ctaBand } from '@/data/site';
import { ArrowIcon } from './Icons';

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
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[15px] font-medium text-navy-900 transition duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
        >
          {ctaBand.button}
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
