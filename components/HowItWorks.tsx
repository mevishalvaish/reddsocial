import React from "react";
import { Search, Users2, TrendingUp, CheckCircle2 } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Target Subreddits",
    description:
      "We identify the highest-intent subreddits, trending topics, and active discussions where your ideal customers ask questions.",
    icon: Search,
  },
  {
    number: "02",
    title: "Deploy 500+ Publishers",
    description:
      "Our network of aged Reddit accounts posts tailored threads, contributes natural comments, and delivers coordinated upvotes.",
    icon: Users2,
  },
  {
    number: "03",
    title: "Rank at the Top",
    description:
      "Your threads and comments climb to top subreddit ranks and Google search results, generating compounding organic inbound leads.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F6F7F8] border-t border-b border-[#EDEFF1] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EDEFF1] text-[#576F76] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1B] tracking-tight mb-5">
            A Direct Path to Reddit Growth
          </h2>
          <p className="text-base sm:text-lg text-[#576F76] leading-relaxed">
            How we leverage thread posting, contextual comments, and upvote momentum with our 500+ Reddit publisher network.
          </p>
        </div>

        {/* 3 Steps in a Row on Desktop, Timeline on Mobile */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-[#EDEFF1] -translate-y-9 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between bg-white rounded-2xl border border-[#EDEFF1] p-7 sm:p-8 shadow-xs transition-all duration-200 hover:shadow-md hover:border-[#FF4500]/40 group"
                >
                  <div>
                    {/* Step Header with Large Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-[#1A1A1B] tracking-tighter group-hover:text-[#FF4500] transition-colors">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#F6F7F8] border border-[#EDEFF1] flex items-center justify-center text-[#576F76] group-hover:text-[#FF4500] group-hover:bg-[#FFF0E9] group-hover:border-[#FF4500]/20 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-[#1A1A1B] mb-3">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-[#576F76] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#EDEFF1]/70 flex items-center gap-1.5 text-xs text-[#576F76] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4500]" />
                    <span>Real Publishers • Manual Work</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Realistic Expectations Notice */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#576F76] leading-relaxed">
            All posts and comments are carefully drafted and manually deployed by aged Reddit accounts with authentic karma to ensure strict rule compliance.
          </p>
        </div>

      </div>
    </section>
  );
}
