import type { Block } from '@/data/caseStudies';

const text = (b: Block) => (b.type === 'ul' ? b.items.join(' ') : 'text' in b ? b.text : '');

// "What I'd do differently" set as a drawing's revision table.
// Each h3 opens a revision; without h3s, the first paragraph is the change and the rest its reason.
export function RevisionTable({ blocks }: { blocks: Block[] }) {
  const rows: { change: string; reason: string[] }[] = [];
  for (const b of blocks) {
    if (b.type === 'h3' || rows.length === 0) rows.push({ change: text(b), reason: [] });
    else rows[rows.length - 1].reason.push(text(b));
  }

  return (
    <table className="mt-8 w-full border-collapse text-left">
      <thead className="border-b border-ink">
        <tr className="field">
          <th scope="col" className="w-12 pb-3 font-medium">Rev</th>
          <th scope="col" className="pb-3 pr-6 font-medium md:w-[38%]">Change</th>
          <th scope="col" className="hidden pb-3 font-medium md:table-cell">Reason</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-hair align-top">
            <td className="py-6">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-redline text-[12px] font-semibold text-redline">
                {String.fromCharCode(65 + i)}
              </span>
            </td>
            <td className="py-6 pr-6 md:table-cell" colSpan={1}>
              <p className="text-[18px] font-semibold leading-snug tracking-[-0.01em] [font-stretch:108%]">{r.change}</p>
              {/* On phones the reason sits under the change */}
              <div className="md:hidden">
                {r.reason.map((p, j) => (
                  <p key={j} className="mt-3 text-[16px] leading-[1.6] text-graphite">{p}</p>
                ))}
              </div>
            </td>
            <td className="hidden py-6 md:table-cell">
              {r.reason.map((p, j) => (
                <p key={j} className={`text-[16px] leading-[1.6] text-graphite ${j > 0 ? 'mt-3' : ''}`}>{p}</p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === 'p') return <p key={i} className="mt-5 max-w-measure text-[18px] leading-[1.65]">{b.text}</p>;

        if (b.type === 'h3')
          return (
            <h3 key={i} className="mt-12 text-[21px] font-semibold leading-snug tracking-[-0.015em] [font-stretch:108%]">
              {b.text}
            </h3>
          );

        if (b.type === 'ul')
          return (
            <ul key={i} className="mt-6 max-w-measure border-t border-hair">
              {b.items.map((it, j) => (
                <li key={j} className="grid grid-cols-[2.25rem_1fr] border-b border-hair py-3.5 text-[17px] leading-[1.6]">
                  <span className="num pt-[3px] text-[13px] font-semibold text-graphite">{String(j + 1).padStart(2, '0')}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );

        if (b.type === 'quote')
          return (
            <figure key={i} className="my-12 border-y border-ink py-8">
              <blockquote lang="id" className="text-[clamp(1.3rem,2vw,1.6rem)] font-medium leading-[1.4] tracking-[-0.01em] [font-stretch:108%]">
                &ldquo;{b.text}&rdquo;
              </blockquote>
              <figcaption className="field mt-5">{b.attribution}</figcaption>
            </figure>
          );

        return (
          <figure key={i} className="mt-10">
            <div className="border border-ink p-2">
              <img src={b.src} alt={b.alt} className="w-full" />
            </div>
            {b.caption && <figcaption className="field mt-3 normal-case tracking-normal">{b.caption}</figcaption>}
          </figure>
        );
      })}
    </>
  );
}
