"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedNavLinkProps {
  children: string;
  href?: string;
}

export const AnimatedNavLink = ({ children, href = "#" }: AnimatedNavLinkProps) => {
  const [displayText, setDisplayText] = useState(children);
  const [iteration, setIteration] = useState(children.length);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const letters = "ABCDVWXYZabcuvwxyz12789@#$";

  const startScramble = () => {
    setIsHovered(true);
    let localIteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, index) => {
            if (index < localIteration) {
              return children[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      setIteration(localIteration);

      if (localIteration >= children.length) {
        clearInterval(intervalRef.current!);
      }

      localIteration += 1 / 3;
    }, 30);
  };

  const stopScramble = () => {
    setIsHovered(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(children);
    setIteration(children.length);
  };

  return (
    <Link
      href={href}
      className="hover:text-white transition-colors cursor-pointer inline-flex items-center"
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
    >
      <span className="inline-flex">
        {displayText.split("").map((char, i) => (
          <span key={i} className={i >= iteration ? "text-green-400" : ""}>
            {char}
          </span>
        ))}
      </span>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="ml-0.5 inline-block w-[2px] h-[1.2em] bg-white/80"
        />
      )}
    </Link>
  );
};
