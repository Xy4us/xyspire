"use client";

import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const STATS = [
  { label: "Websites Built", value: 150, suffix: "+" },
  { label: "Customer Growth", value: 45, suffix: "%" },
  { label: "Client Retention", value: 98, suffix: "%" },
  { label: "Support Hours", value: 24, suffix: "/7" },
];

export const AboutStats = () => {
  return (
    <section className=" bg-[#010004] -pt-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl md:text-6xl font-light text-white tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/40 text-sm md:text-base font-light uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
