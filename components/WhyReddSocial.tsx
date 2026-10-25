import React from "react";
import { ShieldCheck, MessageCircleHeart, Users, LineChart } from "lucide-react";

interface Principle {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const principles: Principle[] = [
  {
    title: "Community First",
    description:
      "Understand community guidelines, culture, and expectations before participating.",
    icon: ShieldCheck,
  },
  {
    title: "Relevant Conversations",
    description:
      "Focus on discussions where a business can genuinely contribute something useful.",
    icon: MessageCircleHeart,
  },
  {
    title: "Human-Led Engagement",
    description:
      "Prioritize natural communication, transparency, and helpful participation.",
    icon: Users,
  },
  {
    title: "Meaningful Insights",
    description:
      "Learn from audience questions, feedback, and discussion patterns.",
    icon: LineChart,
  },
];

export function WhyReddSocial() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] border border-[#FF4500]/20 text-[#FF4500] text-xs font-bold tracking-wider uppercase mb-5">
              Why ReddSocial
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1B] tracking-tight leading-[1.15] mb-6">
              Reddit Is About People, Not Just Promotion.
            </h2>
            
            <p className="text-base sm:text-lg text-[#576F76] leading-relaxed mb-6">
              Successful community marketing starts with understanding the conversation. Our approach is built around relevance, transparency, and respect for the people who make each community valuable.
            </p>

            <div className="p-5 rounded-xl bg-[#F6F7F8] border border-[#EDEFF1]">
              <p className="text-xs sm:text-sm text-[#1A1A1B] font-medium leading-relaxed">
                &ldquo;Communities see through corporate shortcuts. The only sustainable strategy is adding genuine value to the thread.&rdquo;
              </p>
              <span className="block mt-2 text-xs text-[#576F76] font-semibold">
                — ReddSocial Philosophy
              </span>
            </div>
          </div>

          {/* Right Column: 4 Core Principles in a 2x2 or Staggered Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F6F7F8] border border-[#EDEFF1] transition-all duration-200 hover:border-[#FF4500]/30 hover:bg-white hover:shadow-sm"
                >
                  <div className="w-11 h-11 rounded-lg bg-white border border-[#EDEFF1] flex items-center justify-center text-[#FF4500] mb-5 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#1A1A1B] mb-2.5">
                    {principle.title}
                  </h3>
                  
                  <p className="text-sm text-[#576F76] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
