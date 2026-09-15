import type { Block } from '@/data/caseStudies';

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === 'p') return <p key={i} className="mt-4 text-[16px] leading-[28px] text-ink-600">{b.text}</p>;

        if (b.type === 'h3')
          return <h3 key={i} className="mt-8 font-heading text-lg font-semibold leading-[26px]">{b.text}</h3>;

        if (b.type === 'ul')
          return (
            <ul key={i} className="mt-4 flex flex-col gap-2">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-[16px] leading-[28px] text-ink-600">
                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );

        if (b.type === 'quote')
          return (
            <figure key={i} className="mt-8 rounded-card border-l-4 border-navy-700 bg-alt p-6">
              <blockquote className="text-[16px] leading-[28px] text-ink-900">&ldquo;{b.text}&rdquo;</blockquote>
              <figcaption className="mt-3 text-[13px] leading-5 text-ink-600">{b.attribution}</figcaption>
            </figure>
          );

        return (
          <figure key={i} className="mt-8">
            {/* REPLACE: drop the real file into /public/images */}
            <img src={b.src} alt={b.alt} className="w-full rounded-card border border-line" />
            {b.caption && <figcaption className="mt-3 text-[13px] leading-5 text-ink-600">{b.caption}</figcaption>}
          </figure>
        );
      })}
    </>
  );
}
