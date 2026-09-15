import Link from 'next/link';
import { services } from '@/data/site';
import { Section } from './Section';

export function Services() {
  return (
    <Section id="services" alt>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-4">
          <h2 className="font-heading text-[40px] font-bold leading-[48px] tracking-tight">{services.heading}</h2>
          <p className="mt-4 text-[15px] leading-7 text-ink-600">{services.subtext}</p>
          <Link
            href="#contact"
            className="mt-8 inline-flex rounded-lg bg-navy-900 px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-navy-700"
          >
            {services.button}
          </Link>
        </div>

        <div className="flex flex-col gap-4 md:col-span-7 md:col-start-6">
          {services.items.map((s) => (
            <div key={s.title} className="rounded-card border border-line border-l-4 border-l-navy-700 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold leading-[26px]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
