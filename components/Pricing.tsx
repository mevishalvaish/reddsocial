"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { pricingPlans } from "@/lib/contentConfig";

export function Pricing() {
  const selectPlanAndScroll = (planName: string) => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("switch-contact-tab", {
          detail: { tab: "brand", service: `${planName} Package` },
        })
      );
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0B0B0F] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E] text-gray-300 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span>Pricing for Brands</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Simple, Transparent Campaign Packages
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Choose the right level of subreddit presence for your brand. All packages feature manual delivery by verified, aged accounts.
          </p>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const isPopular = Boolean(plan.popular);
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-[#161622] border-2 border-[#FF4500] shadow-2xl shadow-[#FF4500]/15 lg:-translate-y-2"
                    : "bg-[#14141A] border border-[#22222E] hover:border-[#FF4500]/40"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF4500] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1 tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge || "Most Popular"}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#22222E]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-xs text-gray-500 font-medium">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isPopular ? "text-[#FF4500]" : "text-gray-400"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => selectPlanAndScroll(plan.name)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                    isPopular
                      ? "bg-[#FF4500] hover:bg-[#E03D00] text-white shadow-lg shadow-[#FF4500]/30"
                      : "bg-[#1E1E2A] hover:bg-[#FF4500] hover:text-white text-gray-200 border border-[#2E2E3E]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
            * We never guarantee specific upvote totals or position rankings, as Reddit moderation and organic votes are driven by community reception. We guarantee manual, compliant, high-quality deliverables by real aged accounts.
          </p>
        </div>

      </div>
    </section>
  );
}
