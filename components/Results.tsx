"use client";

import React from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { resultsCaseStudies } from "@/lib/contentConfig";

export function Results() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("switch-contact-tab", { detail: "brand" }));
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#101017] border-y border-[#22222E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E] text-gray-300 text-xs font-bold tracking-wider uppercase mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#FF4500]" />
            <span>Demonstrated Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Real Community Engagement Results
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            See how thoughtful Reddit participation translates into enduring referral traffic and brand trust.
          </p>
        </div>

        {/* 3 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {resultsCaseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-[#14141A] rounded-2xl border border-[#22222E] p-7 flex flex-col justify-between hover:border-[#FF4500]/40 transition-all duration-300 group"
            >
              <div>
                {/* Category Pill */}
                <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-[#FF4500] bg-[#FF4500]/10 border border-[#FF4500]/20 px-2.5 py-1 rounded-full mb-5">
                  {study.brandCategory}
                </span>

                {/* Big Metric Display */}
                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-white block">
                    {study.metricNumber}
                  </span>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {study.metricLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#FF4500] transition-colors">
                  {study.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {study.summary}
                </p>
              </div>

              {/* Subreddits Sample Footnote */}
              <div className="pt-4 border-t border-[#22222E]">
                <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">
                  Subreddits Targeted
                </span>
                <span className="text-xs font-mono text-gray-300">{study.subredditsSample}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance */}
        <div className="text-center">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-[#FF4500] transition-colors"
          >
            <span>Want similar community visibility for your product?</span>
            <span className="text-[#FF4500] underline underline-offset-4 flex items-center">
              Start your campaign <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
