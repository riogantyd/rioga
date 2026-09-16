import { process } from '@/data/site';
import { stepIcons } from './Icons';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Process() {
  return (
    <Section id="process">
      <h2 className="font-heading text-[40px] font-bold leading-[48px] tracking-tight">{process.heading}</h2>
      <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-ink-600">{process.subtext}</p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {process.steps.map((step, i) => {
          const Icon = stepIcons[i % stepIcons.length];
          return (
            <Reveal key={step.title} delay={i * 90} className="h-full">
              {/* Hover state from Figma: the icon tile flips to solid navy and the card lifts. */}
              <div className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-navy-700/25 hover:shadow-card-hover">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-alt text-navy-700 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold leading-[26px] transition-colors duration-300 group-hover:text-navy-700">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-ink-600">{step.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
