import React from "react";
import {
  MessageSquare,
  MessagesSquare,
  ArrowBigUp,
  Users2,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck
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
    title: "Thread Posting",
    badge: "Discussion Starter",
    description:
      "Engaging, subreddit-relevant discussion threads crafted and published by aged, high-karma Reddit accounts from our network to put your brand in front of target audiences.",
    icon: MessageSquare,
    deliverables: [
      "Subreddit-specific hooks and angles",
      "Native tone and strict rule compliance",
      "Posted by vetted, high-karma accounts",
    ],
  },
  {
    title: "Comments",
    badge: "Contextual Placement",
    description:
      "Strategic, thoughtful comments placed in active, top-ranking threads where potential buyers are actively asking questions and looking for solutions.",
    icon: MessagesSquare,
    deliverables: [
      "Natural conversation insertion",
      "Answers direct buyer pain points",
      "Permanent ranking thread visibility",
    ],
  },
  {
    title: "Upvotes",
    badge: "Visibility Booster",
    description:
      "Targeted upvote momentum delivered by real community publishers to push your threads and comments to the top of target subreddits for maximum organic reach.",
    icon: ArrowBigUp,
    deliverables: [
      "Natural delivery pacing",
      "Top-of-subreddit ranking support",
      "Maximum organic thread reach",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F7F8] border-t border-b border-[#EDEFF1] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#EDEFF1] text-[#576F76] text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1B] tracking-tight mb-5">
            Thread Posting, Comments &amp; Upvotes
          </h2>
          <p className="text-base sm:text-lg text-[#576F76] leading-relaxed">
            The three essential building blocks of Reddit growth. We handle the copywriting, placement, and ranking through our private network of real Reddit publishers.
          </p>
        </div>

        {/* 500+ Reddit Publishers Network Callout */}
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
                <span>Our Publisher Network</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1B] tracking-tight mb-3">
                500+ Reddit Publishers in Our Network Do the Work
              </h3>
              <p className="text-sm sm:text-base text-[#576F76] leading-relaxed">
                You don&rsquo;t need to risk your own brand accounts or burn new profiles. We have an exclusive network of 500+ active, aged Reddit publishers with real karma across hundreds of target subreddits ready to publish your threads, leave authentic comments, and deliver upvotes.
              </p>
            </div>

            {/* Right Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="bg-[#F6F7F8] p-4 sm:p-5 rounded-2xl border border-[#EDEFF1] text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#FF4500] block mb-0.5">500+</span>
                <span className="text-xs font-bold text-[#1A1A1B] block">Reddit Publishers</span>
                <span className="text-[11px] text-[#576F76]">In our private network</span>
              </div>
              <div className="bg-[#F6F7F8] p-4 sm:p-5 rounded-2xl border border-[#EDEFF1] text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#1A1A1B] block mb-0.5">100%</span>
                <span className="text-xs font-bold text-[#1A1A1B] block">Real Accounts</span>
                <span className="text-[11px] text-[#576F76]">Aged with organic karma</span>
              </div>
              <div className="bg-[#F6F7F8] p-4 sm:p-5 rounded-2xl border border-[#EDEFF1] text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#1A1A1B] block mb-0.5">Manual</span>
                <span className="text-xs font-bold text-[#1A1A1B] block">Human Work</span>
                <span className="text-[11px] text-[#576F76]">Zero automated bots</span>
              </div>
              <div className="bg-[#F6F7F8] p-4 sm:p-5 rounded-2xl border border-[#EDEFF1] text-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 block mb-0.5">Active</span>
                <span className="text-xs font-bold text-[#1A1A1B] block">Ready to Post</span>
                <span className="text-[11px] text-[#576F76]">Across any niche</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Services Grid: Thread Posting, Comments, Upvotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
                  <p className="text-sm text-[#576F76] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div className="pt-5 border-t border-[#EDEFF1]/80 mt-auto">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#576F76] block mb-3">
                    Key Features:
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

        {/* Reassurance Banner */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-5 rounded-2xl bg-white border border-[#EDEFF1]">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#1A1A1B] font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Executed 100% Manually by Real Reddit Publishers</span>
          </div>
          <p className="mt-1 text-xs text-[#576F76]">
            Every post, comment, and upvote is delivered by active accounts in our network with established community history.
          </p>
        </div>

      </div>
    </section>
  );
}
