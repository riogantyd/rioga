import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy, getNeighbours } from '@/data/caseStudies';
import { Blocks, RevisionTable } from '@/components/Blocks';
import { ArrowIcon } from '@/components/Icons';
import { detailLetter } from '@/components/CaseStudyGrid';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug);
  return c ? { title: `${c.cardTitle} | Rioga Natayudha`, description: c.cardDescription } : {};
}

const zone = 'mx-2 border-b border-hair md:mx-[22px]';
const inner = 'mx-auto w-full max-w-sheet px-5 md:px-10';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();
  const { next } = getNeighbours(params.slug);
  const index = caseStudies.findIndex((x) => x.slug === c.slug);

  return (
    <>
      {/* Header */}
      <section data-sheet="Case study" className={zone}>
        <div className={`${inner} grid grid-cols-1 gap-12 pb-16 pt-10 lg:grid-cols-12 lg:pb-20`}>
          <div className="lg:col-span-7">
            <Link href="/#case-studies" className="draw-link field inline-flex items-center gap-2 !text-ink">
              <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
              All case studies
            </Link>
            <h1 className="display anim-rise mt-10 text-[clamp(2.1rem,3.7vw,3.5rem)]">{c.title}</h1>
            <p className="anim-rise mt-6 max-w-[36rem] text-[19px] leading-[1.55] text-graphite [animation-delay:150ms]">{c.subtitle}</p>
          </div>
          <figure className="anim-appear [animation-delay:300ms] lg:col-span-5 lg:pt-16">
            <div className="border border-ink p-2">
              <img src={c.thumbnail} alt={`Screenshot of ${c.cardTitle}`} className="aspect-[16/10] w-full object-cover object-left-top" />
            </div>
            <figcaption className="field mt-3 flex justify-between">
              <span>Detail {detailLetter(index)}</span>
              <span>{c.tag}</span>
            </figcaption>
          </figure>
        </div>

        {/* Title block: project meta */}
        <dl className="grid grid-cols-1 gap-px border-t border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
          {c.meta.map((m) => (
            <div key={m.label} className="bg-paper px-5 py-5 md:px-10">
              <dt className="field">{m.label}</dt>
              <dd className="mt-1.5 text-[16px] leading-snug">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Body + sticky contents */}
      <div className={zone}>
        <div className={`${inner} grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:py-24`}>
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Contents" className="sticky top-32">
              <p className="field border-b border-ink pb-3">Contents</p>
              <ol className="mt-2">
                {c.sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#s-${i}`} className="group grid grid-cols-[2rem_1fr] py-2 text-[14px] leading-snug text-graphite transition-colors hover:text-ink">
                      <span className="num text-[12px]">{String(i + 1).padStart(2, '0')}</span>
                      <span className="draw-link justify-self-start">{s.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="lg:col-span-8 lg:col-start-5">
            {c.sections.map((s, i) => (
              <section key={i} id={`s-${i}`} data-sheet={s.heading} className={`scroll-mt-28 ${i > 0 ? 'mt-20 border-t border-hair pt-12' : ''}`}>
                <h2 className="text-[clamp(1.75rem,2.6vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.025em] [font-stretch:112%]">{s.heading}</h2>
                {/^What I.d do differently/i.test(s.heading) ? <RevisionTable blocks={s.blocks} /> : <Blocks blocks={s.blocks} />}
              </section>
            ))}
          </article>
        </div>
      </div>

      {/* Next case study */}
      <section data-sheet="Next" className={zone}>
        <Link href={`/work/${next.slug}`} className={`${inner} group grid grid-cols-1 gap-6 py-16 md:grid-cols-12 md:items-end lg:py-20`}>
          <div className="md:col-span-8">
            <p className="text-[clamp(1.9rem,3.6vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] [font-stretch:112%] [text-wrap:balance]">
              {next.cardTitle}
            </p>
          </div>
          <span className="inline-flex items-center gap-3 text-[16px] font-semibold md:col-span-4 md:justify-self-end">
            Next case study
            <ArrowIcon className="h-5 w-5 transition-transform duration-500 ease-draw group-hover:translate-x-2" />
          </span>
        </Link>
      </section>

      {/* Contact band */}
      <section data-sheet="Contact" className="mx-2 bg-ink text-paper md:mx-[22px]">
        <div className={`${inner} grid grid-cols-1 gap-8 py-20 lg:grid-cols-12 lg:items-end lg:py-24`}>
          <div className="lg:col-span-8">
            <h2 className="display text-[clamp(2rem,3.8vw,3.25rem)]">Want the version with the parts I left out?</h2>
            <p className="mt-5 max-w-[34rem] text-[17px] text-paper/80">
              Happy to walk through the decisions, the trade-offs, and what I would do differently.
            </p>
          </div>
          <Link href="/#contact" className="btn btn-paper lg:col-span-3 lg:col-start-10">
            Get in touch
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
