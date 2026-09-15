import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { profile } from '@/data/site';

// Swap these two for the exact fonts from your Figma file if they differ.
const heading = Poppins({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-heading', display: 'swap' });
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: `${profile.name} — Product Manager & IT Business Analyst`,
  description:
    'I turn manual, paper-based operations into digital systems that non-technical teams actually use. Case studies in oil & gas inspection, government, education and professional services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
