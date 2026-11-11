import { process } from '@/data/site';
import { Section } from './Section';

// Four numbered lines of the form. The last one is circled in red pen: it is the step most projects skip.
export function Process() {
  const last = process.steps.length - 1;
  return (
    <Section id="process">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
        <h2 className="display text-[clamp(2.4rem,4.6vw,4rem)] lg:col-span-5">{process.heading}</h2>
        <p className="text-[18px] text-muted lg:col-span-6 lg:col-start-7">{process.subtext}</p>
      </div>

      <ol className="mt-16 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <li key={step.title} className={`border-t pb-10 pt-8 ${i === last ? 'border-stamp' : 'border-ink'}`}>
              <p className="num text-[15px] font-semibold text-muted">{i + 1}.</p>
              <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.02em] [font-stretch:112%]">
                {i === last ? (
                  <span className="relative inline-block">
                    {step.title}
                    {/* Red-pen circle */}
                    <svg aria-hidden viewBox="0 0 120 50" preserveAspectRatio="none" className="absolute -inset-x-4 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+32px)] text-stamp">
                      <ellipse cx="60" cy="25" rx="57" ry="22" fill="none" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                ) : (
                  step.title
                )}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-muted">{step.body}</p>
              {i === last && <p className="field mt-6 !text-stamp">The step most projects skip</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}
