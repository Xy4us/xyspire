"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    question: "What does xyspire actually do?",
    answer:
      "xyspire is a premium digital agency specializing in high-performance web design and development. We help businesses build refined digital systems, from brand strategy to seamless user experiences and robust technical implementations.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We partner with forward-thinking startups and established enterprises that value precision, speed, and exceptional design. Our clients span across fintech, SaaS, e-commerce, and high-end logistics.",
  },
  {
    question: "Do you refresh existing websites or build from scratch?",
    answer:
      "Both. Whether you need a complete ground-up build or a strategic overhaul of an existing platform, we apply the same level of architectural rigor and design excellence to ensure your digital presence is future-proof.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard high-performance website typically takes between 4 to 8 weeks from discovery to launch. This timeline ensures we have enough space for deep strategy, pixel-perfect design, and rigorous testing.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We don't just hand over the keys and leave. We offer ongoing optimization roadmaps, technical maintenance, and performance monitoring to ensure your site continues to deliver results as your business scales.",
  },
  {
    question: "How do we get started?",
    answer:
      "The best way is to book a 15-minute discovery call. We'll discuss your goals, current challenges, and see if our approach aligns with your vision for the project.",
  },
];

interface FAQItemProps {
  key?: string | number;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border border-white/5 rounded-lg bg-[#1a1a1d] overflow-hidden transition-all duration-300 ">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors cursor-pointer"
      >
        <span className="text-lg font-medium text-white/90 tracking-tight">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4 text-white/40">
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 text-white/50 leading-relaxed text-sm font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#010004] pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Content & Contact Card */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <SectionHeading>FAQ</SectionHeading>
              <h2 className="text-4xl md:text-[56px] font-light tracking-tighter leading-[1.1] text-white">
                Have questions?
                <br />
                Check out the FAQs
              </h2>
            </div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1a1a1d] border border-white/5 p-6 rounded-lg flex items-center gap-6 max-w-sm group hover:border-white/10 transition-all cursor-pointer"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-white/5 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="Clarissa"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-white">
                  Talk with Us
                </h3>
                <p className="text-[10px] font-bold tracking-[0.15em] text-white/30 uppercase mt-1">
                  xyspire
                </p>
                <div className="mt-4 bg-white text-black text-[12px] font-bold py-2.5 px-5 rounded-lg flex items-center justify-between group-hover:bg-white/90 transition-colors w-full">
                  Book 15-mins call
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
