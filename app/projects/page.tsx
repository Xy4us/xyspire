import { ProjectsHero } from "@/src/components/ProjectsHero";
import { OurWorks } from "@/src/components/OurWorks";
import { CTA } from "@/src/components/CTA";

export default function ProjectsPage() {
  return (
    <main className="bg-[#010004]">
      <ProjectsHero />
      <div className="pb-32">
        <OurWorks hideHeader={true} />
      </div>
      <CTA />
    </main>
  );
}
