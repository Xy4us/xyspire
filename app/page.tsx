import { Hero } from "@/src/components/Hero";
import { Marquee } from "@/src/components/Marquee";
import { ScrollRevealText } from "@/src/components/ScrollRevealText";
import { HowItWorks } from "@/src/components/HowItWorks";
import { OurWorks } from "@/src/components/OurWorks";
import { Services } from "@/src/components/Services";
import { Integrations } from "@/src/components/Integrations";
import { WhyUs } from "@/src/components/WhyUs";
import { Testimonials } from "@/src/components/Testimonials";
import { Pricing } from "@/src/components/Pricing";
import { FAQ } from "@/src/components/FAQ";
import { CTA } from "@/src/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <ScrollRevealText 
        text="We are a collective of designers and developers dedicated to crafting high-performance digital experiences that push the boundaries of what's possible."
      />
      
      <Marquee />
      
      <HowItWorks />
      <OurWorks />
      <Integrations />
      
      <Services />
      <WhyUs/>
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
