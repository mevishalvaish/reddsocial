import React from "react";
import { MessageSquare, MessagesSquare, ArrowBigUp } from "lucide-react";

interface Principle {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const principles: Principle[] = [
  {
    title: "Strategic Thread Posts",
    description:
      "Crafted specifically for each subreddit's culture to spark genuine discussion and establish your brand's presence without triggering spam filters.",
    icon: MessageSquare,
    tag: "Thread Creation",
  },
  {
    title: "High-Intent Comments",
    description:
      "Inserted naturally into active discussions where people are already comparing options and searching for recommendations in your niche.",
    icon: MessagesSquare,
    tag: "Comment Marketing",
  },
  {
    title: "Upvote Ranking Momentum",
    description:
      "Delivered by real publishers in our network to push high-value threads and comments to the top of discussions for lasting visibility.",
    icon: ArrowBigUp,
    tag: "Visibility Boost",
  },
];

export function WhyConvoLift() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] border border-[#FF4500]/20 text-[#FF4500] text-xs font-bold tracking-wider uppercase mb-4">
            Why ConvoLift
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1B] tracking-tight mb-5">
            Turn Reddit Conversations Into Measurable Growth
          </h2>
          <p className="text-base sm:text-lg text-[#576F76] leading-relaxed">
            Successful Reddit campaigns rely on three coordinated pillars: native thread posts, relevant comments, and the upvotes needed to rank them at the top.
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
                  <span>Backed by 500+ Publishers</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Perspective Note */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#FFF0E9]/60 border border-[#FF4500]/15">
          <p className="text-xs sm:text-sm text-[#1A1A1B] font-medium leading-relaxed">
            &ldquo;Generic promotional broadcasts get removed on Reddit. ConvoLift coordinates aged publishers to post relevant threads, answer questions with helpful comments, and provide upvote momentum so your brand earns organic reach that lasts.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}

// Backward-compatible alias
export const WhyReddSocial = WhyConvoLift;
