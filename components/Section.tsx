// One part of the form pad. `copy` picks which sheet of the triplicate it is printed on.
const grounds = {
  white: 'bg-paper',
  canary: 'bg-canary',
  pink: 'bg-pink',
  carbon: 'bg-ink text-paper',
};

export function Section({
  id,
  copy = 'white',
  className = '',
  children,
}: {
  id?: string;
  copy?: keyof typeof grounds;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${grounds[copy]} ${className}`}>
      {/* White parts are torn from the same pad: a perforation marks each tear */}
      {copy === 'white' && <div aria-hidden className="perf" />}
      <div className="mx-auto w-full max-w-sheet px-5 py-20 md:px-10 md:py-28">{children}</div>
    </section>
  );
}
