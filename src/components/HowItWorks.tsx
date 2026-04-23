"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business processes to identify bottlenecks and opportunities for automation.",
    image: "https://picsum.photos/seed/discovery-meeting/1200/800",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team crafts a tailored automation strategy and architecture designed for scalability and efficiency.",
    image: "https://picsum.photos/seed/design-ui/1200/800",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build your custom solutions using cutting-edge AI and automation frameworks with precision.",
    image: "https://picsum.photos/seed/coding-dev/1200/800",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Seamless integration into your existing workflows with rigorous testing and optimization.",
    image: "https://picsum.photos/seed/launch-rocket/1200/800",
  },
  {
    number: "05",
    title: "Discuss",
    description:
      "Continuous monitoring and iterative improvements to ensure your results exceed expectations.",
    image: "https://picsum.photos/seed/feedback-analytics/1200/800",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative bg-[#010004] pt-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex justify-center mb-8">
            <SectionHeading>HOW IT WORKS</SectionHeading>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight text-white max-w-3xl">
            Five (D)'s Rule
          </h2>
          <p className="text-white/40 max-w-2xl mt-6">
            Our structured development process ensures every project is
            delivered with surgical precision and measurable impact.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-0">
          {STEPS.map((step, index) => (
            <StackingCard
              key={index}
              step={step}
              index={index}
              total={STEPS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StackingCard = ({
  step,
  index,
  total,
}: {
  step: (typeof STEPS)[0];
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Stacking offset - adjusted for 5 cards
  const topOffset = 60 + index * 40;

  return (
    <div
      ref={cardRef}
      className="sticky w-full flex justify-center mb-8 md:mb-20"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-[#1a1a1d] border border-white/10 rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <div className="text-white/20 text-5xl md:text-7xl font-light mb-6 font-mono">
            {step.number}
          </div>
          <h3 className="text-xl md:text-3xl leading-[1.1] text-white mb-6 tracking-tight">
            {step.title}
          </h3>
          <p className="text-white/50  font-light leading-relaxed max-w-md">
            {step.description}
          </p>
        </div>
        <div className="flex-1 relative aspect-video md:aspect-auto min-h-[300px]">
          <img
            src={step.image}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1d] via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1d] via-transparent to-transparent md:hidden" />
        </div>
      </motion.div>
    </div>
  );
};
