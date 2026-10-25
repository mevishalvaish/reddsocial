import React from "react";
import { Users2, Compass, HeartHandshake, ShieldAlert } from "lucide-react";

interface Principle {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const principles: Principle[] = [
  {
    title: "Community-First Thinking",
    description:
      "Understand the audience and subreddit before creating or promoting content.",
    icon: Users2,
    tag: "Subreddit Culture",
  },
  {
    title: "Strategy Before Posting",
    description:
      "Build a thoughtful approach around relevant discussions, content quality, and business objectives.",
    icon: Compass,
    tag: "Precision & Focus",
  },
  {
    title: "Meaningful Engagement",
    description:
      "Focus on useful contributions, transparent brand participation, and long-term visibility rather than superficial engagement numbers.",
    icon: HeartHandshake,
    tag: "Authentic Value",
  },
];

export function WhyReddSocial() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] border border-[#FF4500]/20 text-[#FF4500] text-xs font-bold tracking-wider uppercase mb-4">
            Why ReddSocial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1B] tracking-tight mb-5">
            Reddit Deserves More Than Generic Marketing.
          </h2>
          <p className="text-base sm:text-lg text-[#576F76] leading-relaxed">
            Reddit communities have their own interests, expectations, and conversations. Effective marketing starts by understanding those communities and contributing in ways that feel relevant and useful.
          </p>
        </div>

        {/* 3 Distinct Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-[#F6F7F8] border border-[#EDEFF1] transition-all duration-300 hover:border-[#FF4500]/30 hover:bg-white hover:shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#EDEFF1] flex items-center justify-center text-[#FF4500] shadow-2xs group-hover:bg-[#FF4500] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#576F76] uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-[#EDEFF1]">
                      {principle.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1B] mb-3 group-hover:text-[#FF4500] transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-[#576F76] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EDEFF1]/70 flex items-center gap-2 text-xs font-semibold text-[#1A1A1B]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
                  <span>Sustainable Community Trust</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Bottom Perspective Note */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#FFF0E9]/60 border border-[#FF4500]/15">
          <p className="text-xs sm:text-sm text-[#1A1A1B] font-medium leading-relaxed">
            &ldquo;Generic promotional broadcasts get rejected on Reddit. When you contribute with respect for the subreddit rules and audience culture, your brand earns a permanent place in the conversation.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
