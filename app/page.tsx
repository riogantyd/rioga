import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Process } from '@/components/Process';
import { CaseStudyGrid } from '@/components/CaseStudyGrid';
import { CTA } from '@/components/CTA';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <CaseStudyGrid />
      <CTA />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
