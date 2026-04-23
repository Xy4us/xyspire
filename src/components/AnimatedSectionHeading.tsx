"use client";

import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedSectionHeadingProps {
  children: string;
  className?: string;
}

export const AnimatedSectionHeading = ({
  children,
  className = "",
}: AnimatedSectionHeadingProps) => {
  const [displayText, setDisplayText] = useState(children);
  const [iteration, setIteration] = useState(children.length);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const letters = "ABCDVWXYZabcuvwxyz12789@#$";

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const startScramble = () => {
    let localIteration = children.length;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, index) => {
            if (index >= localIteration) {
              return children[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join(""),
      );

      setIteration(localIteration);

      if (localIteration <= 0) {
        clearInterval(intervalRef.current!);
      }

      localIteration -= 1 / 3;
    }, 30);
  };

  useEffect(() => {
    if (inView) {
      startScramble();
    } else {
      // Reset to scrambled state when out of view
      setIteration(children.length);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView]);

  return (
    <div ref={ref} className="relative inline-block overflow-hidden">
      {/* Animated Background Reveal from Right to Left */}
      <motion.div
        initial={{ x: "100%" }}
        animate={inView ? { x: "0%" } : { x: "100%" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-white/5 backdrop-blur-md border-l-3 border-[#7b7980]"
      />

      <div
        className={`relative px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white uppercase ${className}`}
      >
        {displayText.split("").map((char, i) => (
          <span key={i} className={i < iteration ? "text-green-400" : ""}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
