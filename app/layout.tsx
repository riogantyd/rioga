import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SheetFrame } from '@/components/SheetFrame';
import { profile } from '@/data/site';

// Variable on weight and width: one family gives the expanded display voice and the condensed label voice.
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });

export const metadata: Metadata = {
  title: `${profile.name}, Product Manager and IT Business Analyst`,
  description:
    'I turn manual, paper-based operations into digital systems that non-technical teams actually use. Case studies in oil & gas inspection, government, education and professional services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        {/* Scroll-reveal starts hidden; without JS it would never show, so unhide it. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <SheetFrame />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
