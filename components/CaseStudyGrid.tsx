import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { portfolioIntro } from '@/data/site';
import { ArrowIcon } from './Icons';
import { Reveal } from './Reveal';
import { Section } from './Section';

// Details B, C, D, E: the hero portrait is Detail A.
export const detailLetter = (i: number) => String.fromCharCode(66 + i);

export function CaseStudyGrid() {
  return (
    <Section id="case-studies" sheet="Selected work">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
        <h2 className="display text-[clamp(2.4rem,4.6vw,4rem)] lg:col-span-6">{portfolioIntro.heading}</h2>
        <p className="max-w-[36rem] text-graphite lg:col-span-5 lg:col-start-8">{portfolioIntro.subtext}</p>
      </div>

      <ul className="mt-16 border-t border-ink">
        {caseStudies.map((c, i) => {
          const timeline = c.meta.find((m) => m.label === 'Timeline')?.value;
          return (
            <li key={c.slug}>
              <Reveal>
                <Link
                  href={`/work/${c.slug}`}
                  className="group relative grid grid-cols-1 gap-8 border-b border-hair py-10 outline-none md:grid-cols-12 md:gap-10 lg:py-12"
                >
                  {/* Hover: the row's rule is redrawn in ink from the left */}
                  <span aria-hidden className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-ink transition-transform duration-700 ease-draw group-hover:scale-x-100 group-focus-visible:scale-x-100" />

                  <figure className="md:col-span-5">
                    {/* Image stays registered; hover adds a second frame line around it */}
                    <div className="border border-ink p-2 outline outline-1 outline-offset-[5px] outline-transparent transition-[outline-color,outline-offset] duration-500 ease-draw group-hover:outline-offset-[3px] group-hover:outline-ink group-focus-visible:outline-ink">
                      <div className="aspect-[16/10] overflow-hidden bg-sheet">
                        <img
                          src={c.thumbnail}
                          alt={`Screenshot of ${c.cardTitle}`}
                          loading="lazy"
                          className="h-full w-full object-cover object-left-top"
                        />
                      </div>
                    </div>
                    <figcaption className="field mt-3 flex justify-between">
                      <span>Detail {detailLetter(i)}</span>
                      <span>{c.tag}</span>
                    </figcaption>
                  </figure>

                  <div className="flex flex-col md:col-span-7 md:pt-2">
                    <h3 className="text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.025em] [font-stretch:112%] [text-wrap:balance]">
                      {c.cardTitle}
                    </h3>
                    <p className="mt-4 max-w-measure text-graphite">{c.cardDescription}</p>
                    {timeline && <p className="field mt-5">{timeline}</p>}
                    <span className="mt-auto inline-flex items-center gap-3 pt-8 text-[15px] font-semibold">
                      Read the case study
                      <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-draw group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
