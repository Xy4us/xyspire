"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  {
    id: 1,
    company: "WEB FLOW SOLUTIONS",
    content:
      "Partnering with this team was a game-changer. They transformed our website into a high-performance platform, leading to a significant increase in user engagement and conversion rates beyond our expectations.",
    author: "Alex Chen",
    role: "FOUNDER OF PIXEL PLAY",
  },
  {
    id: 2,
    company: "CODE CRAFTERS INC",
    content:
      "The web design provided completely changed our brand perception. Our new e-commerce site is not only visually stunning but incredibly responsive. This directly boosted our sales and customer retention.",
    author: "Maria Rodriguez",
    role: "LEAD DESIGNER AT STYLE HUB",
  },
  {
    id: 3,
    company: "DIGITAL PULSE",
    content:
      "Their attention to detail and technical expertise is unmatched. They didn't just build a site; they built a tool that drives our business forward every single day. Highly recommended for any serious business.",
    author: "James Wilson",
    role: "CTO OF TECH FLOW",
  },
];

const STATS = [
  { value: "10", suffix: "+", label: "WEBSITES LAUNCHED" },
  { value: "95", suffix: "%", label: "CLIENT SATISFACTION" },
  { value: "3", suffix: "x", label: "CLIENT SUCCESS" },
  { value: "3", suffix: "x", label: "PROCESS OPTIMIZED" },
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => current?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#010004] pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-6">
            <SectionHeading>TESTIMONIALS</SectionHeading>
            <h2 className="text-4xl md:text-[55px] font-light tracking-tighter leading-[0.9] text-white">
              Hear from our
              <br />
              satisfied clients
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white/5 text-white hover:bg-white/10"
                  : "opacity-20 text-white cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-white/5 text-white hover:bg-white/10"
                  : "opacity-20 text-white cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonials Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(50%-12px)] snap-start"
            >
              <div className="bg-[#1a1a1d] border border-white/5 rounded-lg p-8 md:p-12 h-full flex flex-col justify-between min-h-[400px]">
                <div className="space-y-8">
                  <div className="text-white/30 text-[10px] font-mono tracking-[0.2em] uppercase">
                    {testimonial.company}
                  </div>
                  <Quote
                    className="w-12 h-12 text-white/10"
                    fill="currentColor"
                  />
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                    {testimonial.content}
                  </p>
                </div>

                <div className="mt-12">
                  <div className="text-lg font-medium text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-white/30 uppercase mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 border border-[#414043] rounded-sm overflow-hidden bg-white/[0.01] backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className={`px-6 py-2 md:px-10 py-6 flex flex-col md:flex-row items-center md:items-end gap-4 ${
                  index !== STATS.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#414043]"
                    : ""
                }`}
              >
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-6xl font-light text-white tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-xl md:text-2xl font-light text-white ml-2">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-[#a8a8a8] uppercase text-center md:text-left leading-tight max-w-[80px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
