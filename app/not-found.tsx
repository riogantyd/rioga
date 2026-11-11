import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto flex min-h-[60svh] w-full max-w-sheet flex-col justify-center px-5 py-24 md:px-10">
        <h1 className="display max-w-[16ch] text-[clamp(2.6rem,6vw,5rem)]">This form isn&apos;t on file.</h1>
        <p className="mt-6 max-w-[32rem] text-[18px] text-muted">Error 404: the page may have moved, or the link was mistyped.</p>
        <Link href="/" className="btn btn-solid mt-10 self-start">
          Back to the front page
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
