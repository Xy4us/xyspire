"use client";

import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
  text: string;
}

export const ScrollRevealText = ({ text }: ScrollRevealTextProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 10%"], // better timing
  });

  // Exit happens AFTER text fully appears
  const y = useTransform(scrollYProgress, [0.85, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <div
      ref={targetRef}
      className="relative h-[50vh] bg-[#010004] z-20"
    >
      <div className="sticky top-0 h-[50vh] flex items-center justify-center px-8 overflow-hidden">
        <motion.div style={{ y, opacity }} className="max-w-5xl w-full">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.1] text-center tracking-tight">
            {words.map((word, i) => {
              const total = words.length;

              // Use ONLY 85% scroll for reveal → ensures completion
              const start = i / total * 0.70;
              const end = (i + 1) / total * 0.70;

              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1], {
    ease: easeOut,
  });

  const blur = useTransform(progress, range, ["blur(6px)", "blur(0px)"]);
  const scale = useTransform(progress, range, [0.96, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <span className="relative inline-block mr-[0.25em] whitespace-nowrap">
      <motion.span
        style={{ opacity, filter: blur, scale, y }}
        className="text-white inline-block will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
};