import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { portfolioIntro } from '@/data/site';
import { ArrowIcon } from './Icons';
import { Section } from './Section';

// Attachments B, C, D, E: the hero portrait is Attachment A.
export const detailLetter = (i: number) => String.fromCharCode(66 + i);
export const serial = (i: number) => `No. ${String(i + 1).padStart(4, '0')}`;

export function CaseStudyGrid() {
  return (
    <Section id="case-studies">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
        <h2 className="display text-[clamp(2.4rem,4.6vw,4rem)] lg:col-span-6">{portfolioIntro.heading}</h2>
        <p className="max-w-[36rem] text-muted lg:col-span-5 lg:col-start-8">{portfolioIntro.subtext}</p>
      </div>

      <ul className="mt-16 flex flex-col gap-12 md:gap-16">
        {caseStudies.map((c, i) => {
          const timeline = c.meta.find((m) => m.label === 'Timeline')?.value;
          return (
            <li key={c.slug}>
                {/* Hover: the slip's canary and pink copies slide out from under it */}
                <Link href={`/work/${c.slug}`} className="group block outline-none">
                  <div className="stack stack-hover">
                    <div className="relative border border-ink/25 bg-sheet transition-colors group-focus-visible:border-stamp">
                      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b-[3px] border-double border-ink px-5 py-3 md:px-8">
                        <span className="num text-[16px] font-bold text-stamp">{serial(i)}</span>
                        <span className="field">{c.tag}</span>
                      </div>

                      <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-12 md:gap-10 md:p-8">
                        <figure className="md:col-span-5">
                          <div className="aspect-[16/10] overflow-hidden border border-hair bg-paper">
                            <img src={c.thumbnail} alt={`Screenshot of ${c.cardTitle}`} loading="lazy" className="h-full w-full object-cover object-left-top" />
                          </div>
                          <figcaption className="field mt-3">Attachment {detailLetter(i)}</figcaption>
                        </figure>

                        <div className="relative flex flex-col md:col-span-7">
                          <h3 className="text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.025em] [font-stretch:112%] [text-wrap:balance]">
                            {c.cardTitle}
                          </h3>
                          <p className="mt-4 max-w-measure text-muted">{c.cardDescription}</p>
                          {timeline && <p className="field mt-5">{timeline}</p>}
                          <span className="mt-auto inline-flex items-center gap-3 pt-8 text-[15px] font-semibold">
                            Read the case study
                            <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-draw group-hover:translate-x-1.5" />
                          </span>
                          <span className="rubber absolute bottom-0 right-1 text-[13px] md:text-[15px]">
                            {c.stamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
