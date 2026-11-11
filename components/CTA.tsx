import Link from 'next/link';
import { ctaBand } from '@/data/site';
import { ArrowIcon } from './Icons';
import { Section } from './Section';

// The carbon sheet itself: the one inverted part of the pad.
export function CTA() {
  return (
    <Section copy="carbon">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
        <h2 className="display text-[clamp(2.2rem,4.4vw,3.8rem)] lg:col-span-8">{ctaBand.heading}</h2>
        <div className="lg:col-span-4">
          <p className="text-[17px] leading-[1.6] text-paper/80">{ctaBand.subtext}</p>
          <Link href="#contact" className="btn btn-paper mt-8 w-full sm:w-auto">
            {ctaBand.button}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </Section>
  );
}
