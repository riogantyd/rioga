'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const zones = ['A', 'B', 'C', 'D', 'E', 'F'];
const rows = ['1', '2', '3', '4'];

// The viewport is a drawing sheet: a paper margin, a hairline frame, zone markers,
// and a sheet index in the bottom-right corner that names the section in view.
export function SheetFrame() {
  const pathname = usePathname();
  const [sheet, setSheet] = useState<{ n: number; total: number; name: string } | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-sheet]'));
    if (!sections.length || typeof IntersectionObserver === 'undefined') return setSheet(null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = sections.indexOf(e.target as HTMLElement);
          setSheet({ n: i + 1, total: sections.length, name: sections[i].dataset.sheet ?? '' });
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[55] [--m:8px] md:[--m:22px]">
      {/* Paper margin around the sheet */}
      <div className="absolute inset-x-0 top-0 h-[var(--m)] bg-paper" />
      <div className="absolute inset-x-0 bottom-0 h-[var(--m)] bg-paper" />
      <div className="absolute inset-y-0 left-0 w-[var(--m)] bg-paper" />
      <div className="absolute inset-y-0 right-0 w-[var(--m)] bg-paper" />

      {/* Frame lines */}
      <div className="anim-draw-x absolute left-[var(--m)] right-[var(--m)] top-[var(--m)] h-px bg-ink" />
      <div className="anim-draw-x absolute bottom-[var(--m)] left-[var(--m)] right-[var(--m)] h-px bg-ink [animation-delay:150ms]" />
      <div className="anim-draw-y absolute bottom-[var(--m)] left-[var(--m)] top-[var(--m)] w-px bg-ink" />
      <div className="anim-draw-y absolute bottom-[var(--m)] right-[var(--m)] top-[var(--m)] w-px bg-ink [animation-delay:150ms]" />

      {/* Zone markers sit in the margin, desktop only */}
      <div className="anim-appear absolute inset-x-[var(--m)] top-0 hidden h-[var(--m)] [animation-delay:500ms] md:flex">
        {zones.map((z) => (
          <span key={z} className="field flex flex-1 items-center justify-center border-r border-hair text-[10px] last:border-r-0">
            {z}
          </span>
        ))}
      </div>
      <div className="anim-appear absolute inset-y-[var(--m)] left-0 hidden w-[var(--m)] flex-col [animation-delay:500ms] md:flex">
        {rows.map((r) => (
          <span key={r} className="field flex flex-1 items-center justify-center border-b border-hair text-[10px] last:border-b-0">
            {r}
          </span>
        ))}
      </div>

      {/* Sheet index */}
      {/* Hidden on sheet 01: the first screen carries its own title block in that corner */}
      {sheet && sheet.n > 1 && (
        <div className="absolute bottom-[calc(var(--m)-11px)] right-[calc(var(--m)+16px)] hidden items-center gap-3 border border-ink bg-paper px-3 py-1 md:flex">
          <span className="field num text-ink">
            Sheet {String(sheet.n).padStart(2, '0')}/{String(sheet.total).padStart(2, '0')}
          </span>
          <span className="h-3 w-px bg-hair" />
          <span className="field text-ink">{sheet.name}</span>
        </div>
      )}
    </div>
  );
}
