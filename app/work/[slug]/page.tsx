import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy, getNeighbours } from '@/data/caseStudies';
import { Blocks } from '@/components/Blocks';
import { ArrowIcon } from '@/components/Icons';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug);
  return c ? { title: `${c.cardTitle} — Rioga Natayudha`, description: c.cardDescription } : {};
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();
  const { next } = getNeighbours(params.slug);

  return (
    <>
      {/* Header */}
      <section className="bg-alt py-16 lg:py-20">
        <div className="mx-auto w-full max-w-content px-6">
          <Link href="/#case-studies" className="text-[14px] text-ink-600 transition-colors hover:text-navy-700">
            ← All case studies
          </Link>

          <span className="mt-8 block text-[13px] font-medium uppercase leading-5 tracking-[0.5px] text-navy-700">
            {c.tag}
          </span>
          <h1 className="mt-3 max-w-[900px] font-heading text-[40px] font-bold leading-[48px] tracking-tight lg:text-5xl lg:leading-[58px]">
            {c.title}
          </h1>
          <p className="mt-4 max-w-[720px] text-lg leading-[30px] text-ink-600">{c.subtitle}</p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-b border-line bg-white py-10">
        <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[13px] font-medium uppercase leading-5 tracking-[0.5px] text-ink-600">{m.label}</dt>
              <dd className="mt-1 text-[15px] leading-6 text-ink-900">{m.value}</dd>
            </div>
          ))}
        </div>
      </section>

      {/* Body + sticky contents */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-28">
              <p className="text-[13px] font-medium uppercase leading-5 tracking-[0.5px] text-ink-600">Contents</p>
              <ul className="mt-4 flex flex-col gap-3 border-l border-line pl-4">
                {c.sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#s-${i}`} className="text-[14px] leading-6 text-ink-600 transition-colors hover:text-navy-700">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="lg:col-span-8 lg:col-start-5">
            {c.sections.map((s, i) => (
              <div key={i} id={`s-${i}`} className={i > 0 ? 'mt-14 scroll-mt-28' : 'scroll-mt-28'}>
                <h2 className="font-heading text-[28px] font-bold leading-9 tracking-tight">{s.heading}</h2>
                <Blocks blocks={s.blocks} />
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* Next case study */}
      <section className="bg-alt py-16">
        <div className="mx-auto w-full max-w-content px-6">
          <p className="text-[13px] font-medium uppercase leading-5 tracking-[0.5px] text-ink-600">Next case study</p>
          <Link href={`/work/${next.slug}`} className="group mt-4 block">
            <h3 className="font-heading text-[28px] font-bold leading-9 tracking-tight transition-colors group-hover:text-navy-700">
              {next.cardTitle}
            </h3>
            <p className="mt-3 max-w-[640px] text-[15px] leading-7 text-ink-600">{next.cardDescription}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-navy-700">
              Read case study
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* Contact band */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto w-full max-w-content px-6 text-center">
          <h2 className="mx-auto max-w-[640px] font-heading text-[32px] font-bold leading-[42px] tracking-tight text-white">
            Want the version with the parts I left out?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-7 text-white/80">
            Happy to walk through the decisions, the trade-offs, and what I would do differently.
          </p>
          <Link
            href="/#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[15px] font-medium text-navy-900 transition duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            Get in touch
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
