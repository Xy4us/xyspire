"use client";

import { motion, AnimatePresence, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Check, ShieldCheck, Box, Square, Code2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PriceCounter = ({
  value,
  duration = 1.5,
}: {
  value: number;
  duration?: number;
}) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
};

const PRICING_PLANS = [
  {
    name: "Starter",
    description: "For teams getting started with AI",
    monthlyPrice: 4999,
    yearlyPrice: 3999,
    icon: <Square className="w-5 h-5" />,
    features: [
      "1–2 workflow automations",
      "Tool integration setup",
      "AI implementation",
      "Basic reporting dashboard",
      "2 weeks post-launch support",
    ],
    buttonText: "Choose Starter Plan",
    popular: false,
  },
  {
    name: "Growth",
    description: "For scaling teams ready to streamline operations",
    monthlyPrice: 6999,
    yearlyPrice: 5599,
    icon: <Box className="w-5 h-5" />,
    features: [
      "3–5 automation workflows",
      "CRM and marketing stack integration",
      "Custom AI agents or assistants",
      "Team onboarding session",
      "30 days optimization support",
    ],
    buttonText: "Choose Growth Plan",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations serious about long-term efficiency",
    monthlyPrice: 7999,
    yearlyPrice: 6399,
    icon: <Code2 className="w-5 h-5" />,
    features: [
      "Full workflow audit",
      "End-to-end automation architecture",
      "Custom AI agent development",
      "Internal system documentation",
      "Ongoing optimization roadmap",
    ],
    buttonText: "Choose Enterprise Plan",
    popular: false,
  },
];

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className="bg-[#010004] pt-32 relative ">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <SectionHeading>PRICING</SectionHeading>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight text-white max-w-2xl mx-auto">
            Flexible plans for your automation goals
          </h2>

          {/* Billing Toggle */}
          <div className="flex justify-center mt-12">
            <div className="bg-[#1a1a1d] p-1 rounded-lg flex items-center border border-white/5">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white text-black shadow-lg"
                    : "text-white/40 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                  billingCycle === "yearly"
                    ? "bg-white text-black shadow-lg"
                    : "text-white/40 hover:text-white"
                }`}
              >
                Yearly
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md border ${
                    billingCycle === "yearly"
                      ? "border-black/10 bg-black/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-[#0a0a0a] border rounded-lg p-8 lg:p-10 flex flex-col transition-all duration-500 ${
                plan.popular
                  ? "border-white/20 bg-[#111111] z-10 shadow-2xl shadow-white/5"
                  : "border-white/5"
              } ${index === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0" : ""}`}
            >
              {/* Icon (Only for Enterprise or if you want consistency, keeping it for all but subtle) */}
              <div className="mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                  {plan.icon}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-medium text-white tracking-tight">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-white/10 text-white/80 px-2.5 py-1 rounded-md border border-white/10">
                      POPULAR
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-light text-white tracking-tighter">
                    $
                  </span>
                  <span className="text-5xl font-light text-white tracking-tighter">
                    <PriceCounter
                      value={
                        billingCycle === "monthly"
                          ? plan.monthlyPrice
                          : plan.yearlyPrice
                      }
                    />
                  </span>
                  <span className="text-white/40 text-xl ml-1">/mo</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="space-y-4 mb-8">
                <button
                  className={`w-full py-4 rounded-lg cursor-pointer text-sm font-bold transition-all ${
                    plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.buttonText}
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-white/40 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  30-day money-back guarantee
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 mb-8" />

              {/* Features */}
              <ul className="space-y-5 mt-auto">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-3 text-[14px] text-white/80"
                  >
                    <Check className="w-4 h-4 mt-0.5 text-white/40 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
