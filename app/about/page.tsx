import { AboutHero } from "@/src/components/AboutHero";
import { CTA } from "@/src/components/CTA";
import { ScrollRevealText } from "@/src/components/ScrollRevealText";
import { AboutStats } from "@/src/components/AboutStats";
import { AboutStackingCards } from "@/src/components/AboutStackingCards";
import { AboutApproach } from "@/src/components/AboutApproach";
import { AboutModel } from "@/src/components/AboutModel";
import { AboutAdvantage } from "@/src/components/AboutAdvantage";
import { AboutRemoteGoal } from "@/src/components/AboutRemoteGoal";

export default function AboutPage() {
  return (
    <main className="bg-[#010004]">
      <AboutHero />
      
      <AboutStats />

      <ScrollRevealText 
        text="Most small businesses either don’t have a website, or have one that looks good but doesn’t actually convert visitors into customers. That’s where we come in."
      />

      <AboutApproach />

      <AboutStackingCards />

      <AboutModel />

      <AboutAdvantage />

      <AboutRemoteGoal />

      <CTA />
    </main>
  );
}
