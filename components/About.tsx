import { about, profile } from '@/data/site';
import { DownloadIcon } from './Icons';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" copy="canary">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <h2 className="display text-[clamp(2.2rem,4.2vw,3.6rem)] lg:col-span-6">{about.heading}</h2>

        <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={`max-w-measure text-[18px] leading-[1.65] ${i > 0 ? 'mt-6 text-muted' : ''}`}>
              {p}
            </p>
          ))}
          <a href={profile.cvPath} download="Rioga-Natayudha-CV.pdf" className="btn btn-line mt-10">
            Download CV (PDF)
            <DownloadIcon />
          </a>
        </div>
      </div>
    </Section>
  );
}
