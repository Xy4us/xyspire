"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export const ProjectsHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#010004]">
      {/* Background Image with Fade */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/why_us.jpeg" 
          alt="Projects Background" 
          className="w-full h-full object-cover scale-110 opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010004] via-transparent to-[#010004]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex justify-center">
              <SectionHeading>PROJECTS</SectionHeading>
            </div>
            <h1 className="text-4xl md:text-[75px] font-light tracking-tighter leading-[0.9] text-white max-w-5xl">
              The Minds Behind<br />
              <span className="text-white/40">the Automation</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Ideas, strategies, and practical guides to help businesses streamline operations and grow with AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
