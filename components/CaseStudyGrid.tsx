import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { portfolioIntro } from '@/data/site';
import { ArrowIcon } from './Icons';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function CaseStudyGrid() {
  return (
    <Section id="case-studies" alt>
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="font-heading text-[40px] font-bold leading-[48px] tracking-tight">{portfolioIntro.heading}</h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 text-ink-600">{portfolioIntro.subtext}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} delay={i * 90} className="h-full">
            {/* The whole card is the link. Hover state: lifts, image zooms, button fills. */}
            <Link
              href={`/work/${c.slug}`}
              aria-label={`Read the case study: ${c.cardTitle}`}
              className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card outline-none transition duration-300 hover:-translate-y-1.5 hover:border-navy-700/25 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2"
            >
              {/* REPLACE: thumbnails in /public/images. Keep all four the same treatment. */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-alt">
                <img
                  src={c.thumbnail}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-[12px] font-medium uppercase leading-5 tracking-[0.6px] text-ink-600">{c.tag}</span>
                <h3 className="mt-2 font-heading text-[17px] font-semibold leading-[26px] text-ink-900 transition-colors duration-300 group-hover:text-navy-700">
                  {c.cardTitle}
                </h3>
                <p className="mt-3 line-clamp-4 text-[14px] leading-6 text-ink-600">{c.cardDescription}</p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-navy-700 px-4 py-2.5 text-[14px] font-medium text-navy-700 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-white">
                    Case Study
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
