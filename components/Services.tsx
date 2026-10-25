import React from "react";
import { Compass, MessageSquareQuote, SearchCheck, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    title: "Reddit Marketing Strategy",
    description:
      "Identify relevant communities, understand audience needs, research competitors, and build a clear Reddit marketing strategy.",
    icon: Compass,
    tag: "COMING SOON",
    features: [
      "Subreddit ecosystem mapping",
      "Audience culture & tone analysis",
      "Organic & paid roadmap planning",
    ],
  },
  {
    title: "Community Engagement",
    description:
      "Support meaningful discussions through relevant, transparent, and helpful participation that respects each community's culture.",
    icon: MessageSquareQuote,
    tag: "COMING SOON",
    features: [
      "Authentic, value-first commentary",
      "AMA (Ask Me Anything) orchestration",
      "Community trust & reputation stewardship",
    ],
  },
  {
    title: "Audience Insights",
    description:
      "Explore public conversations to understand customer questions, recurring challenges, product feedback, and audience interests.",
    icon: SearchCheck,
    tag: "COMING SOON",
    features: [
      "Voice-of-customer discovery",
      "Sentiment & friction monitoring",
      "Emerging trend identification",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F7F8] border-t border-b border-[#EDEFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EDEFF1] text-[#576F76] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            What We&rsquo;re Building
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1B] tracking-tight mb-5">
            Good Conversations. Better Connections.
          </h2>
          <p className="text-base sm:text-lg text-[#576F76] leading-relaxed">
            We&rsquo;re preparing thoughtful ways for brands to discover communities, participate meaningfully, and learn from the conversations that matter.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#EDEFF1] p-7 lg:p-8 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#FF4500]/30 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon + Coming Soon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] border border-[#FF4500]/15 flex items-center justify-center text-[#FF4500] transition-colors duration-200 group-hover:bg-[#FF4500] group-hover:text-white">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#576F76] bg-[#F6F7F8] border border-[#EDEFF1] px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#1A1A1B] mb-3 group-hover:text-[#FF4500] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#576F76] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Focus Capabilities List */}
                <div className="pt-5 border-t border-[#EDEFF1]/80 mt-auto">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#576F76] block mb-2.5">
                    Upcoming Focus:
                  </span>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#1A1A1B]/80 font-medium">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4500] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#576F76]">
            Every service is engineered around community guidelines, authentic engagement, and strict respect for moderators and audience culture.
          </p>
        </div>

      </div>
    </section>
  );
}
