import Link from 'next/link';
import { services } from '@/data/site';
import { ArrowIcon } from './Icons';
import { Reveal } from './Reveal';
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
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-[15px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-card-hover"
          >
            {services.button}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4 md:col-span-7 md:col-start-6">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              {/* Default card is plain; the navy left bar is the hover state, as in the Figma component. */}
              <div className="rounded-card border border-line border-l-4 border-l-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-l-navy-700 hover:shadow-card-hover">
                <h3 className="font-heading text-lg font-semibold leading-[26px]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-ink-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
