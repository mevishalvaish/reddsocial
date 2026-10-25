import React from "react";
import {
  MessageSquare,
  MessagesSquare,
  Users,
  Search,
  Radar,
  ChartNoAxesCombined,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const mainServices: ServiceItem[] = [
  {
    title: "Reddit Post Creation",
    description:
      "Create engaging, subreddit-relevant posts designed around audience interests, community rules, and brand goals.",
    icon: MessageSquare,
    tag: "Content Strategy",
  },
  {
    title: "Reddit Comment Marketing",
    description:
      "Participate in relevant discussions with helpful, thoughtful comments that contribute genuine value and introduce brands when appropriate.",
    icon: MessagesSquare,
    tag: "Organic Value",
  },
  {
    title: "Community Management",
    description:
      "Help businesses manage Reddit conversations, respond to questions, maintain consistent participation, and build stronger relationships with relevant communities.",
    icon: Users,
    tag: "Moderation & Care",
  },
  {
    title: "Subreddit Research",
    description:
      "Discover relevant subreddits, research community expectations, analyze audience interests, and identify suitable opportunities for participation.",
    icon: Search,
    tag: "Audience Mapping",
  },
  {
    title: "Brand Monitoring",
    description:
      "Track relevant brand mentions, customer feedback, competitor discussions, and emerging conversations to help businesses understand what people are saying.",
    icon: Radar,
    tag: "Real-Time Signals",
  },
  {
    title: "Reddit Ads Management",
    description:
      "Help businesses plan, launch, and optimize Reddit advertising campaigns to reach relevant audiences and support their marketing objectives.",
    icon: ChartNoAxesCombined,
    tag: "Paid Media",
  },
];

const additionalCapabilities = [
  { title: "Reddit SEO & Content Research", category: "Discovery" },
  { title: "Competitor Analysis", category: "Intelligence" },
  { title: "Reddit Reputation Management", category: "Brand Safety" },
  { title: "Organic Engagement Strategy", category: "Growth" },
  { title: "Lead Generation via Discussions", category: "Acquisition" },
  { title: "AMA Campaign Support", category: "Events" },
  { title: "Community Building & Subreddit Ops", category: "Ecosystem" },
  { title: "Reddit Content Calendars & Planning", category: "Strategy" },
  { title: "Reddit Account Audits", category: "Optimization" },
  { title: "Reddit Analytics & Reporting", category: "Performance" },
  { title: "Reddit UGC & Sentiment Research", category: "Insights" },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F7F8] border-t border-b border-[#EDEFF1] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EDEFF1] text-[#576F76] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1B] tracking-tight mb-5">
            Reddit Marketing Built Around Real Conversations
          </h2>
          <p className="text-base sm:text-lg text-[#576F76] leading-relaxed">
            From creating engaging content to managing communities and discovering new opportunities, ReddSocial brings the essential parts of Reddit marketing together.
          </p>
        </div>

        {/* 6 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#EDEFF1] p-7 lg:p-8 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#FF4500]/30 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] border border-[#FF4500]/15 flex items-center justify-center text-[#FF4500] transition-colors duration-200 group-hover:bg-[#FF4500] group-hover:text-white">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <span className="inline-flex items-center text-[11px] font-bold tracking-wider uppercase text-[#576F76] bg-[#F6F7F8] border border-[#EDEFF1] px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#1A1A1B] mb-3 group-hover:text-[#FF4500] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#576F76] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subdued footer indicator */}
                <div className="pt-5 mt-6 border-t border-[#EDEFF1]/80 flex items-center justify-between text-xs text-[#576F76] font-medium">
                  <span className="text-[#FF4500] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Explore capability</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] bg-[#F6F7F8] px-2 py-0.5 rounded border border-[#EDEFF1]">
                    Coming at launch
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 4: "More Ways We Can Help" Compact Secondary Section */}
        <div className="bg-white rounded-3xl border border-[#EDEFF1] p-8 sm:p-10 lg:p-12 shadow-xs">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFF0E9] text-[#FF4500] text-xs font-bold tracking-wider uppercase mb-3">
              Comprehensive Capabilities
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1B] tracking-tight mb-2">
              More Ways We Can Help
            </h3>
            <p className="text-sm sm:text-base text-[#576F76] leading-relaxed">
              Every Reddit campaign requires nuance. Beyond core management, we provide specialized capabilities tailored to your growth goals.
            </p>
          </div>

          {/* Grouped Tags / Compact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {additionalCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#F6F7F8] border border-[#EDEFF1] transition-all hover:bg-white hover:border-[#FF4500]/30 hover:shadow-2xs group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4500] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#1A1A1B] group-hover:text-[#FF4500] transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#576F76] bg-white border border-[#EDEFF1] px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 ml-2">
                  {item.category}
                </span>
              </div>
            ))}
          </div>

          {/* Reassurance Banner on Authentic Participation */}
          <div className="mt-8 pt-6 border-t border-[#EDEFF1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#576F76]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-[#1A1A1B]">
                100% Organic &amp; Compliant:
              </span>
              <span>We never utilize fake upvotes, bot networks, or deceptive participation.</span>
            </div>
            <span className="text-[11px] text-[#576F76] font-semibold bg-[#F6F7F8] px-2.5 py-1 rounded-full border border-[#EDEFF1]">
              Ethical Community Marketing
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
