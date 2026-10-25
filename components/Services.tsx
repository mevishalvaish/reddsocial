import React from "react";
import {
  MessageSquare,
  MessagesSquare,
  ArrowBigUp,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Sparkles,
  Globe2,
  TrendingUp
} from "lucide-react";

interface ServiceItem {
  title: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    title: "Thread Post Service",
    badge: "Discussion Starter",
    description:
      "Targeted, subreddit-relevant posts crafted to spark genuine conversation, respect community rules, and position your brand at the center of attention.",
    icon: MessageSquare,
    deliverables: [
      "Subreddit-tailored hook & angle",
      "Native tone & rule compliance",
      "Published by vetted aged accounts",
    ],
  },
  {
    title: "Comment Marketing Service",
    badge: "High-Intent Placement",
    description:
      "Contextual, thoughtful comments placed in active, high-ranking Reddit threads where potential customers are actively asking for recommendations.",
    icon: MessagesSquare,
    deliverables: [
      "Natural conversational insertion",
      "Addressing buyer pain points",
      "Long-term SEO thread visibility",
    ],
  },
  {
    title: "Upvote Amplification Service",
    badge: "Visibility Booster",
    description:
      "Strategic upvote momentum to boost thread visibility, reach top positions in target subreddits, and ensure your message gets seen by the entire community.",
    icon: ArrowBigUp,
    deliverables: [
      "Natural delivery pacing",
      "Thread ranking support",
      "Audience reach maximization",
    ],
  },
  {
    title: "Fully Managed Reddit Service",
    badge: "Turnkey Agency Solution",
    description:
      "End-to-end Reddit marketing management: custom strategy, subreddit research, content planning, publisher coordination, and transparent ROI reporting.",
    icon: Layers,
    deliverables: [
      "Dedicated account strategist",
      "Full publisher network deployment",
      "Comprehensive performance analytics",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F7F8] border-t border-b border-[#EDEFF1] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EDEFF1] text-[#576F76] text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            Core Reddit Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1B] tracking-tight mb-5">
            Reddit Marketing Built Around Real Conversations
          </h2>
          <p className="text-base sm:text-lg text-[#576F76] leading-relaxed">
            From strategic thread posts and comment placements to upvote amplification and end-to-end managed campaigns — executed by real community members.
          </p>
        </div>

        {/* 500+ Reddit Publishers Network Callout Banner */}
        <div className="relative overflow-hidden mb-12 sm:mb-16 rounded-3xl bg-white border-2 border-[#FF4500]/25 p-7 sm:p-10 shadow-sm">
          <div 
            className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#FFF0E9] to-transparent opacity-70 pointer-events-none blur-2xl" 
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF4500] text-xs font-extrabold uppercase tracking-wider mb-3">
                <Users2 className="w-3.5 h-3.5" />
                <span>Our Exclusive Publisher Network</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1B] tracking-tight mb-3">
                500+ Vetted Reddit Publishers Ready to Do the Work
              </h3>
              <p className="text-sm sm:text-base text-[#576F76] leading-relaxed">
                We maintain an active network of over 500 established Reddit publishers with aged accounts, authentic karma, and niche authority across hundreds of target subreddits. They publish your threads, contribute meaningful comments, and deliver natural engagement that sticks.
              </p>
            </div>

            {/* Right Quick Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="bg-[#F6F7F8] p-4 sm:p-5 rounded-2xl border border-[#EDEFF1] text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#FF4500] block mb-0.5">500+</span>
                <span className="text-xs font-bold text-[#1A1A1B] block">Reddit Publishers</span>
                <span className="text-[11px] text-[#576F76]">In our active network</span>
              </div>
              <div className="bg-[#F6F7F8] p-4 sm:p-5 rounded-2xl border border-[#EDEFF1] text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#1A1A1B] block mb-0.5">1,000+</span>
                <span className="text-xs font-bold text-[#1A1A1B] block">Subreddits</span>
                <span className="text-[11px] text-[#576F76]">Across every niche</span>
              </div>
              <div className="bg-[#F6F7F8] p-4 sm:p-5 rounded-2xl border border-[#EDEFF1] text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#1A1A1B] block mb-0.5">Aged</span>
                <span className="text-xs font-bold text-[#1A1A1B] block">High Karma</span>
                <span className="text-[11px] text-[#576F76]">Vetted user accounts</span>
              </div>
              <div className="bg-[#F6F7F8] p-4 sm:p-5 rounded-2xl border border-[#EDEFF1] text-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 block mb-0.5">100%</span>
                <span className="text-xs font-bold text-[#1A1A1B] block">Natural Work</span>
                <span className="text-[11px] text-[#576F76]">Manual execution</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#EDEFF1] p-7 sm:p-8 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#FF4500]/40 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#FFF0E9] border border-[#FF4500]/20 flex items-center justify-center text-[#FF4500] transition-colors duration-200 group-hover:bg-[#FF4500] group-hover:text-white shadow-2xs">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <span className="inline-flex items-center text-[11px] font-bold tracking-wider uppercase text-[#576F76] bg-[#F6F7F8] border border-[#EDEFF1] px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-black text-[#1A1A1B] mb-3 group-hover:text-[#FF4500] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#576F76] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div className="pt-5 border-t border-[#EDEFF1]/80 mt-auto">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#576F76] block mb-3">
                    What&rsquo;s Included:
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A1A1B] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF4500] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-[#EDEFF1]/60 flex items-center justify-between text-xs text-[#576F76]">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#FF4500] group-hover:translate-x-0.5 transition-transform">
                      <span>Reserve early access</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] font-medium bg-[#F6F7F8] px-2 py-0.5 rounded border border-[#EDEFF1]">
                      Coming soon
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#576F76] leading-relaxed">
            All services are manually executed by our publisher network to ensure authentic participation, strict subreddit compliance, and enduring community trust.
          </p>
        </div>

      </div>
    </section>
  );
}
