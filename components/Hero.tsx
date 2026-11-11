import Link from 'next/link';
import { hero, profile, stats } from '@/data/site';
import { ArrowIcon } from './Icons';
import { CountUp } from './CountUp';

export function Hero() {
  return (
    <section
      id="home"
      data-sheet="Overview"
      className="mx-2 flex min-h-[calc(100svh-80px)] flex-col border-b border-hair md:mx-[22px] md:min-h-[calc(100svh-108px)]"
    >
      <div className="mx-auto grid w-full max-w-sheet flex-1 grid-cols-1 items-center gap-12 px-5 py-14 md:px-10 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-8">
          <h1 className="display anim-rise text-[clamp(2.6rem,5.2vw,4.6rem)] [animation-delay:250ms]">{hero.headline}</h1>
          <p className="anim-rise mt-8 max-w-[44rem] text-[18px] leading-[1.6] text-graphite [animation-delay:400ms]">{hero.bio}</p>
        </div>

        <figure className="anim-appear relative ml-3 w-full max-w-[220px] [animation-delay:500ms] sm:max-w-[280px] lg:col-span-4 lg:col-start-9 lg:ml-0 lg:max-w-none">
          {/* Red callout: the photo is "Detail A" of the sheet */}
          <span
            aria-hidden
            className="absolute -left-3 -top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-redline bg-paper text-[12px] font-semibold text-redline"
          >
            A
          </span>
          <span aria-hidden className="anim-draw-x absolute -left-24 top-[1px] hidden h-px w-[84px] origin-right bg-redline [animation-delay:900ms] lg:block" />
          <div className="border border-ink p-2">
            <img
              src={profile.heroPhoto}
              alt={`Portrait of ${profile.name}`}
              width={800}
              height={800}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <figcaption className="field mt-3 flex justify-between">
            <span>Detail A</span>
            <span>{profile.location}</span>
          </figcaption>
        </figure>
      </div>

      {/* Title block */}
      <div className="grid grid-cols-3 border-t border-ink lg:grid-cols-12">
        <div className="col-span-3 border-b border-ink px-5 py-5 md:px-10 lg:col-span-4 lg:border-b-0 lg:border-r">
          <p className="field">Drawn by</p>
          <p className="mt-2 text-[16px] font-semibold leading-snug">{profile.name}</p>
          <p className="text-[15px] leading-snug text-graphite">{profile.role}</p>
          <p className="mt-3 flex gap-5 text-[14px]">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="draw-link">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="draw-link">
              {profile.email}
            </a>
          </p>
        </div>

        {stats.map((s, i) => (
          <div key={s.label} className={`flex flex-col justify-between gap-3 border-ink px-5 py-5 md:px-8 lg:col-span-2 ${i < 2 ? 'border-r' : 'lg:border-r'}`}>
            <p className="field">{s.label}</p>
            <p className="num text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-none tracking-[-0.03em]">
              <CountUp value={Number(s.value)} pad={s.value.length > 2 ? 3 : 2} delay={700 + i * 120} />
            </p>
          </div>
        ))}

        <div className="col-span-3 flex flex-col justify-center gap-2 border-t border-ink p-3 lg:col-span-2 lg:border-t-0 [&_.btn]:py-3 [&_.btn]:text-[14px]">
          <Link href="#case-studies" className="btn btn-solid">
            {hero.cta}
            <ArrowIcon />
          </Link>
          <Link href="#contact" className="btn btn-line">
            Get in touch
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
