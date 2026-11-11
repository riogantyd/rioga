// One zone of the drawing sheet. `sheet` names it in the corner sheet index.
export function Section({
  id,
  sheet,
  dark = false,
  className = '',
  children,
}: {
  id?: string;
  sheet: string;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-sheet={sheet}
      className={`mx-2 border-b border-hair md:mx-[22px] ${dark ? 'bg-ink text-paper' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-sheet px-5 py-20 md:px-10 md:py-28">{children}</div>
    </section>
  );
}
