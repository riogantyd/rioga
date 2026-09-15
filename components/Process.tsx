import { process } from '@/data/site';
import { stepIcons } from './Icons';
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
            <div key={step.title} className="flex h-full flex-col rounded-card border border-line bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-alt text-navy-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold leading-[26px]">
                {i + 1}. {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-ink-600">{step.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
