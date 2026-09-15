export function Section({
  id,
  alt = false,
  className = '',
  children,
}: {
  id?: string;
  alt?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${alt ? 'bg-alt' : 'bg-white'} py-24 ${className}`}>
      <div className="mx-auto w-full max-w-content px-6">{children}</div>
    </section>
  );
}
