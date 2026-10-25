import React from "react";
import { Search, Compass, MessageSquareText, TrendingUp } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, target audience, goals, brand voice, and marketing objectives.",
    icon: Search,
  },
  {
    number: "02",
    title: "Research",
    description:
      "Identify relevant subreddits, study community guidelines, and explore useful conversation opportunities.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Engage",
    description:
      "Develop helpful content, participate transparently where appropriate, and manage approved advertising campaigns when applicable.",
    icon: MessageSquareText,
  },
  {
    number: "04",
    title: "Learn",
    description:
      "Evaluate relevant engagement, qualified traffic, advertising performance, and audience insights to identify improvements.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F7F8] border-t border-b border-[#EDEFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EDEFF1] text-[#576F76] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1B] tracking-tight mb-5">
            A Thoughtful Approach to Community Growth.
          </h2>
          <p className="text-base sm:text-lg text-[#576F76] leading-relaxed">
            Every strong campaign starts with research and improves through meaningful execution and measurement.
          </p>
        </div>

        {/* 4 Steps in a Row on Desktop, Stacked on Mobile */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-[#EDEFF1] -translate-y-8 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-2xl border border-[#EDEFF1] p-6 sm:p-7 shadow-xs transition-all duration-200 hover:shadow-md hover:border-[#FF4500]/40 group"
                >
                  {/* Step Header with Large Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-[#1A1A1B] tracking-tighter group-hover:text-[#FF4500] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F6F7F8] border border-[#EDEFF1] flex items-center justify-center text-[#576F76] group-hover:text-[#FF4500] group-hover:bg-[#FFF0E9] group-hover:border-[#FF4500]/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-[#1A1A1B] mb-2.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-[#576F76] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Realistic Expectations Notice */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#576F76] leading-relaxed">
            Our framework is designed for enduring community relevance. We do not provide quick hacks, automated spamming, or artificial manipulation.
          </p>
        </div>

      </div>
    </section>
  );
}
