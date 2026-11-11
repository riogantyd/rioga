import Link from 'next/link';
import { hero, profile, stats } from '@/data/site';
import { ArrowIcon } from './Icons';

// A filled-in work order on top of its canary and pink copies.
export function Hero() {
  return (
    <section id="home" className="bg-paper px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8">
      <div className="stack stack-open anim-copies mx-auto max-w-sheet">
        <div className="relative border border-ink/25 bg-sheet">
          {/* Form header */}
          <div className="flex items-baseline gap-5 border-b-[3px] border-double border-ink px-5 py-4 md:px-10">
            <p className="num text-[18px] font-bold text-stamp">No. 0001</p>
            <p className="field !text-ink">
              Work order<span className="hidden sm:inline"> · Product &amp; process</span>
            </p>
          </div>
          {/* The stamp bites the sheet's right edge and overprints the copies beneath */}
          <span aria-hidden className="rubber anim-stamp absolute -right-2 top-2 z-10 text-[1rem] md:-right-9 md:top-3 md:text-[1.5rem]">
            Adopted
          </span>

          <div className="grid grid-cols-1 gap-12 px-5 py-10 md:px-10 lg:grid-cols-12 lg:items-center lg:py-10">
            <div className="lg:col-span-9">
              <h1 className="display anim-rise text-[clamp(2.6rem,5vw,4.4rem)] [animation-delay:150ms]">{hero.headline}</h1>
              <p className="anim-rise mt-8 max-w-[44rem] text-[18px] leading-[1.6] text-muted [animation-delay:300ms]">{hero.bio}</p>
            </div>

            <figure className="relative ml-2 w-full max-w-[220px] sm:max-w-[260px] lg:col-span-3 lg:col-start-10 lg:ml-0 lg:max-w-none">
              {/* Paperclip holding the attachment to the form */}
              <svg aria-hidden viewBox="0 0 24 64" className="absolute -top-5 left-8 z-10 h-14 w-5 text-muted" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 20V8a5 5 0 0 1 10 0v42a7 7 0 0 1-14 0V16" />
              </svg>
              <img
                src={profile.heroPhoto}
                alt={`Portrait of ${profile.name}`}
                width={800}
                height={800}
                className="aspect-[4/5] w-full rotate-[1.5deg] border-[6px] border-white object-cover object-top shadow-[0_6px_18px_-8px_rgba(31,42,107,0.45)]"
              />
              <figcaption className="field mt-4 flex justify-between">
                <span>Attachment A</span>
                <span>{profile.location}</span>
              </figcaption>
            </figure>
          </div>

          {/* Ruled fields */}
          <div className="grid grid-cols-3 border-t border-ink lg:grid-cols-12">
            <div className="col-span-3 border-b border-ink px-5 py-5 md:px-10 lg:col-span-4 lg:border-b-0 lg:border-r">
              <p className="field">Issued by</p>
              <p className="mt-2 text-[16px] font-semibold leading-snug">{profile.name}</p>
              <p className="text-[15px] leading-snug text-muted">{profile.role}</p>
              <p className="mt-3 flex flex-wrap gap-x-5 text-[14px]">
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
                  {s.value.padStart(2, '0')}
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
        </div>
      </div>
    </section>
  );
}
