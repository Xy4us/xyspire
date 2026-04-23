"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const Counter = ({ value }: { value: string }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const count = { val: 0 };
    const numericValue = parseFloat(value.replace(/[^0-9.-]/g, "")) || 0;
    const suffix = value.replace(/[0-9.-]/g, "");
    const prefix = value.startsWith("-") ? "-" : "";
    const absoluteNumericValue = Math.abs(numericValue);

    if (inView) {
      const controls = animate(0, absoluteNumericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          const formatted = value.includes(".")
            ? latest.toFixed(1)
            : Math.round(latest);
          setDisplay(`${prefix}${formatted}${suffix}`);
        },
      });
      return () => controls.stop();
    } else {
      setDisplay("0");
    }
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
};

const PROJECTS = [
  {
    year: "2026",
    category: "E-COMMERCE",
    client: "BATAVIA",
    title: "Scaling Batavia's Digital Product Store with Automation",
    description:
      "Helping Batavia automate product delivery and customer workflows so their digital store can handle more sales with less manual work.",
    stats: [
      { label: "HOURS SAVED WEEKLY", value: "22+" },
      { label: "MORE REPEAT PURCHASES", value: "2.4x" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=1000",
  },
  {
    year: "2025",
    category: "FINTECH",
    client: "NEXUS",
    title: "Automating Financial Reporting for Global Teams",
    description:
      "Streamlining complex financial data collection and processing for a multi-national fintech firm, reducing human error by 95%.",
    stats: [
      { label: "ACCURACY INCREASE", value: "95%" },
      { label: "FASTER REPORTING", value: "4x" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bbda64626744?auto=format&fit=crop&q=80&w=800&h=1000",
  },
  {
    year: "2025",
    category: "SAAS",
    client: "LUMINA",
    title: "Optimizing Customer Onboarding with AI Workflows",
    description:
      "Implementing intelligent automation to handle 80% of routine customer queries, allowing the support team to focus on high-value tasks.",
    stats: [
      { label: "ONBOARDING SPEED", value: "60%" },
      { label: "CSAT SCORE", value: "4.9/5" },
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=1000",
  },
  {
    year: "2024",
    category: "LOGISTICS",
    client: "VANTAGE",
    title: "Real-time Fleet Tracking and Route Optimization",
    description:
      "Developing a custom dashboard for real-time logistics management, saving thousands in fuel costs through optimized routing.",
    stats: [
      { label: "FUEL SAVINGS", value: "18%" },
      { label: "DELIVERY ON-TIME", value: "99%" },
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=1000",
  },
  {
    year: "2024",
    category: "HEALTHCARE",
    client: "ZENITH",
    title: "Secure Patient Data Management and Automation",
    description:
      "Building a HIPAA-compliant platform for automated patient scheduling and record management, improving clinic efficiency.",
    stats: [
      { label: "PATIENT THROUGHPUT", value: "30%" },
      { label: "ADMIN OVERHEAD", value: "-45%" },
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=1000",
  },
];

export const OurWorks = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  return (
    <section
      className={`relative bg-[#010004] ${hideHeader ? "pt-0" : "pt-32"}`}
    >
      {!hideHeader && (
        <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
          <div className="flex justify-center mb-8">
            <SectionHeading>OUR WORKS</SectionHeading>
          </div>
          <h2 className="text-4xl md:text-[55px] font-light tracking-tighter leading-[0.9] mb-8 text-white">
            Structured. Automated.
            <br />
            Delivered.
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Selected workflow transformations across sales, operations, and
            internal systems.
          </p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-[10vh]">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  total,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  total: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: nextScrollProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(nextScrollProgress, [0, 1], [1, 0.7]);

  const top = 60 + index * 40;

  return (
    <div ref={containerRef} className="sticky w-full" style={{ top }}>
      <motion.div
        style={{ scale }}
        className="bg-[#1a1a1d] border border-white/5 rounded-lg overflow-hidden flex flex-col md:flex-row min-h-[350px] md:h-[550px] shadow-2xl"
      >
        {/* Left: Image */}
        <div
          ref={inViewRef}
          className="w-full md:w-1/2 md:h-[300px] h-[180px] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/5"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{ scale: 0.7 }}
            animate={inView ? { scale: 1 } : { scale: 0.7 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "great animation"
              opacity: { duration: 0.8 },
            }}
            className="w-full h-full object-cover grayscale brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 px-8 py-4 md:px-12 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] text-white/40 uppercase mb-2">
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{project.category}</span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-2" />

          {/* Client & Title */}
          <div className="flex-1 space-y-8 ">
            <h3 className="text-2xl md:text-4xl font-display text-white/70 md:mb-24">
              {project.client}
            </h3>

            <div className="space-y-6">
              <h4 className="text-xl md:text-3xl leading-[1.1] tracking-tight text-white">
                {project.title}
              </h4>
              <p className="md:block hidden text-white/50 leading-relaxed font-extralight max-w-xl">
                {project.description}
              </p>
            </div>

            <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-7 py-3 rounded-xl text-sm transition-all group w-fit mt-3">
              View Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-auto pt-5">
            <div className="w-full h-px bg-white/10 mb-2" />
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {project.stats.map((stat, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-2xl md:text-4xl font-medium text-white tracking-tighter">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-white/30 uppercase leading-tight">
                    {stat.label.split(" ").map((word, idx) => (
                      <span key={idx} className="block">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
