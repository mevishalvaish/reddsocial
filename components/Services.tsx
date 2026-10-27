"use client";

import React from "react";
import {
  MessageSquare,
  MessagesSquare,
  CornerDownRight,
  Users2,
  ArrowBigUp,
  CheckCircle2,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { brandServices } from "@/lib/contentConfig";

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-[#FF4500]" />;
      case "MessagesSquare":
        return <MessagesSquare className="w-6 h-6 text-[#FF4500]" />;
      case "CornerDownRight":
        return <CornerDownRight className="w-6 h-6 text-[#FF4500]" />;
      case "ArrowBigUp":
        return <ArrowBigUp className="w-6 h-6 text-[#FF4500] fill-[#FF4500]/20" />;
      case "Users2":
      default:
        return <Users2 className="w-6 h-6 text-[#FF4500]" />;
    }
  };

  const scrollToBrandContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("switch-contact-tab", { detail: "brand" }));
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0B0B0F] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E] text-[#FF4500] text-xs font-bold tracking-wider uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Services for Brands</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Reddit Marketing Services
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Reach target subreddits naturally with genuine posts, comments, replies, and community conversations placed by real accounts.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {brandServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#14141A] rounded-2xl border border-[#22222E] p-6 hover:border-[#FF4500]/50 hover:bg-[#181822] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top: Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center transition-colors group-hover:bg-[#FF4500] group-hover:text-white">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 bg-[#1A1A24] border border-[#2E2E3E] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Community
                  </span>
                </div>

                {/* Title & Short Benefit */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF4500] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {service.shortBenefit}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 pt-4 border-t border-[#22222E] mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4500] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <button
                type="button"
                onClick={scrollToBrandContact}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-[#2E2E3E] bg-[#1A1A24] hover:bg-[#FF4500] hover:text-white text-xs font-bold text-gray-200 transition-all active:scale-95 group-hover:border-[#FF4500]/40"
              >
                <span>Select Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Global CTA Button Below */}
        <div className="text-center">
          <button
            type="button"
            onClick={scrollToBrandContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold text-base shadow-xl shadow-[#FF4500]/25 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4500]"
          >
            <span>Contact Us to Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
