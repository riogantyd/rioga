import Link from 'next/link';
import { hero, profile, stats } from '@/data/site';
import { ArrowIcon, LinkedInIcon, MailIcon } from './Icons';

export function Hero() {
  return (
    <section id="home" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-ink-900 lg:text-6xl">
            {hero.greeting}
            <br />
            {profile.name}
          </h1>

          <p className="mt-4 max-w-[440px] text-[15px] leading-7 text-ink-600">{hero.bio}</p>

          <Link
            href="#case-studies"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-[15px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-card-hover"
          >
            {hero.cta}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <dl className="mt-14 grid grid-cols-3 divide-x divide-line rounded-card bg-alt">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-4 py-5 text-center">
                <dt className="font-heading text-[28px] font-bold leading-9 text-ink-900">{s.value}</dt>
                <dd className="mt-4 text-[13px] leading-[18px] text-ink-600">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* REPLACE: /public/images/rioga-hero.jpg */}
            <img
              src={profile.heroPhoto}
              alt={profile.name}
              className="aspect-[4/5] w-full max-w-[420px] rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl bg-white p-1.5 shadow-lg ring-1 ring-line">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-600 transition-colors duration-300 hover:bg-navy-700 hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-600 transition-colors duration-300 hover:bg-navy-700 hover:text-white"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
