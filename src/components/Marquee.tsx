"use client";

import { motion, useAnimationControls } from "motion/react";
import { useState, useEffect } from "react";

const COMPANIES = [
  "TECHFLOW",
  "LUMINA",
  "NEXUS",
  "VANTAGE",
  "ORBIT",
  "ZENITH",
  "PRISM",
  "ECHO",
];

export const Marquee = () => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    controls.start({
      x: [0, "-50%"],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="relative z-10  overflow-hidden">
      {/* Fading Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[#010004] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[#010004] to-transparent pointer-events-none" />

      <div
        className="relative py-12 select-none overflow-hidden flex whitespace-nowrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
          className="flex flex-none"
        >
          <div className="flex gap-20 items-center pr-20">
            {COMPANIES.map((company, i) => (
              <motion.span
                key={`first-${i}`}
                whileHover={{ color: "#ffffff" }}
                className="text-4xl md:text-6xl font-light tracking-tighter text-white/20 transition-colors duration-500 cursor-default"
              >
                {company}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-20 items-center pr-20">
            {COMPANIES.map((company, i) => (
              <motion.span
                key={`second-${i}`}
                whileHover={{ color: "#ffffff" }}
                className="text-4xl md:text-6xl font-light tracking-tighter text-white/20 transition-colors duration-500 cursor-default"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
