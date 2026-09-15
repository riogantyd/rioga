import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { portfolioIntro } from '@/data/site';
import { ArrowIcon } from './Icons';
import { Section } from './Section';

export function CaseStudyGrid() {
  return (
    <Section id="case-studies" alt>
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="font-heading text-[40px] font-bold leading-[48px] tracking-tight">{portfolioIntro.heading}</h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 text-ink-600">{portfolioIntro.subtext}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {caseStudies.map((c) => (
          <article key={c.slug} className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
            {/* REPLACE: thumbnails in /public/images. Keep all four the same treatment. */}
            <div className="aspect-video w-full bg-navy-900">
              <img src={c.thumbnail} alt="" className="h-full w-full object-cover opacity-90" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="text-[13px] font-medium uppercase leading-5 tracking-[0.5px] text-ink-600">{c.tag}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold leading-[26px]">{c.cardTitle}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink-600">{c.cardDescription}</p>

              <Link
                href={`/work/${c.slug}`}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-navy-700 px-4 py-2.5 text-[14px] font-medium text-navy-700 transition-colors hover:bg-navy-700 hover:text-white"
              >
                Read case study <ArrowIcon />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
