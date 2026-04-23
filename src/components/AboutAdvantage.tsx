import { SectionHeading } from "./SectionHeading";

export const AboutAdvantage = () => {
  return (
    <section className="py-32 bg-[#010004] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex justify-center mb-8">
            <SectionHeading>WHY CHOOSE US</SectionHeading>
          </div>
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter leading-[0.9] text-white">
            The Xyspire <span className="text-white/40">Advantage</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Customer Centric",
              desc: "We focus on getting you customers, not just building a website. Every pixel is optimized for conversion."
            },
            {
              title: "Hassle-Free",
              desc: "We keep things simple. No technical jargon, no complex setups. We handle everything while you work."
            },
            {
              title: "Predictable Pricing",
              desc: "Our affordable monthly pricing means no surprises. High-quality service that fits your business budget."
            },
            {
              title: "Reliable Support",
              desc: "We provide ongoing support you can rely on. We're your long-term digital partners, always a call away."
            }
          ].map((item, i) => (
            <div key={i} className="p-12 rounded-[40px] bg-[#1a1a1d] border border-white/10 flex flex-col gap-8 group hover:border-white/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 text-3xl font-mono group-hover:bg-white group-hover:text-black transition-all duration-500">
                0{i + 1}
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-light text-white tracking-tight">{item.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
