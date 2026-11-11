import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';

export default function NotFound() {
  return (
    <section data-sheet="Not found" className="mx-2 border-b border-hair md:mx-[22px]">
      <div className="mx-auto flex min-h-[60svh] w-full max-w-sheet flex-col justify-center px-5 py-24 md:px-10">
        <h1 className="display max-w-[16ch] text-[clamp(2.6rem,6vw,5rem)]">This sheet isn&apos;t in the set.</h1>
        <p className="mt-6 max-w-[32rem] text-[18px] text-graphite">Error 404: the page may have moved, or the link was mistyped.</p>
        <Link href="/" className="btn btn-solid mt-10 self-start">
          Back to the overview
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
