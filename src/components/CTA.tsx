"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

export const CTA = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#010004] py-32 md:py-48 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y }}
          src="/why_us.jpeg"
          alt="Dark landscape"
          className="w-full h-[120%] object-cover  brightness-[0.75] contrast-[1.1] scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Top to Bottom Gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010004] via-transparent to-[#010004]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <div className="flex justify-center mb-8">
          <SectionHeading>LET'S GET STARTED</SectionHeading>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-[64px] font-light tracking-tighter leading-[1.1] text-white mb-8 max-w-3xl mx-auto"
        >
          Ready to Refine
          <br />
          Your Workflow?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Share your current process. We'll help you identify what
          <br className="hidden md:block" />
          can be automated and where efficiency can be improved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="bg-white text-black px-10 py-4 rounded-lg text-sm font-bold hover:bg-white/90 transition-all shadow-2xl cursor-pointer">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};
