export const AboutRemoteGoal = () => {
  return (
    <section className="py-32 bg-[#010004]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-16 rounded-[50px] bg-[#1a1a1d] border border-white/10 space-y-8">
            <h3 className="text-4xl font-light text-white tracking-tight">A Modern,<br /><span className="text-white/40">Remote-First Approach</span></h3>
            <p className="text-white/50 text-xl leading-relaxed font-light">
              We work with businesses remotely, allowing us to deliver high-quality service efficiently while keeping costs low for our clients. No matter where you’re based, we ensure smooth communication and reliable support at every step.
            </p>
          </div>
          <div className="p-16 rounded-[50px] bg-white text-black space-y-8">
            <h3 className="text-4xl font-light tracking-tight">Our Goal</h3>
            <p className="text-black/60 text-xl leading-relaxed font-light">
              Our goal is simple: To help local businesses grow by giving them a strong, effective online presence that actually drives results. We measure our success by your growth.
            </p>
            <div className="pt-8">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
