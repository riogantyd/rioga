import Link from 'next/link';
import { about, profile } from '@/data/site';
import { ArrowIcon, DownloadIcon } from './Icons';

export function About() {
  return (
    <section id="about" className="bg-alt py-24">
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid grid-cols-1 gap-10 rounded-card border border-line bg-white p-8 md:grid-cols-12 md:items-center md:p-12">
          <div className="md:col-span-4">
            <h2 className="font-heading text-[40px] font-bold leading-[48px] tracking-tight">{about.heading}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#case-studies"
                className="group inline-flex items-center gap-2 rounded-lg bg-navy-900 px-2 py-3 text-[15px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-card-hover"
              >
                View case studies
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-navy-700 px-2 py-3 text-[15px] font-medium text-navy-700 transition duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:text-white hover:shadow-card-hover"
              >
                <DownloadIcon /> Download CV
              </a>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={`text-[15px] leading-7 text-ink-600 ${i > 0 ? 'mt-4' : ''}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
