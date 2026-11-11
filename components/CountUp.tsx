'use client';

import { useEffect, useState } from 'react';

// Renders the final value on the server; with motion allowed, counts up once after the sheet draws.
export function CountUp({ value, pad = 2, delay = 700 }: { value: number; pad?: number; delay?: number }) {
  const [n, setN] = useState(value);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setN(0);
    let raf = 0;
    const start = performance.now() + delay;
    const tick = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - start) / 900));
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, delay]);

  return <>{String(n).padStart(pad, '0')}</>;
}
