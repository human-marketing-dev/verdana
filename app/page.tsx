import { ContactSection } from '@/components/marketing/ContactSection';
import { Hero } from '@/components/marketing/Hero';
import { Identity } from '@/components/marketing/Identity';
import { Location } from '@/components/marketing/Location';
import { MasterPlan } from '@/components/marketing/MasterPlan';
import { Project } from '@/components/marketing/Project';
import { SalesOffice } from '@/components/marketing/SalesOffice';
import { SiteFooter } from '@/components/marketing/SiteFooter';
import { SiteHeader } from '@/components/marketing/SiteHeader';

export default function Page() {
  return (
    <>
      <a className="vss-skip-link" href="#contenido">
        Ir al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Project />
        <MasterPlan />
        <Location />
        <Identity />
        <SalesOffice />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
