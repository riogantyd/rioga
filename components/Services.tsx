import Link from 'next/link';
import { services } from '@/data/site';
import { ArrowIcon } from './Icons';
import { Reveal } from './Reveal';
import { Section } from './Section';

// Set as a drawing's parts list: item, description.
export function Services() {
  return (
    <Section id="services" sheet="Services">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="display text-[clamp(2.4rem,4.6vw,4rem)]">{services.heading}</h2>
          <p className="mt-5 text-[18px] text-graphite">{services.subtext}</p>
          <Link href="#contact" className="btn btn-solid mt-10">
            {services.button}
            <ArrowIcon />
          </Link>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="field grid grid-cols-[3rem_1fr] border-b border-ink pb-3 sm:grid-cols-[4rem_1fr]">
            <span>Item</span>
            <span>Description</span>
          </div>
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="grid grid-cols-[3rem_1fr] border-b border-hair py-8 sm:grid-cols-[4rem_1fr]">
                <span className="num pt-1 text-[15px] font-semibold text-graphite">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] [font-stretch:112%]">{s.title}</h3>
                  <p className="mt-3 max-w-measure text-[16px] leading-[1.6] text-graphite">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
