"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, DollarSign, CheckCircle2, ArrowRight } from "lucide-react";
import { howItWorksConfig } from "@/lib/contentConfig";

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"brands" | "earners">("brands");

  const scrollToContact = (tab: "brand" | "earner") => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("switch-contact-tab", { detail: tab }));
    }
  };

  const steps = activeTab === "brands" ? howItWorksConfig.brandSteps : howItWorksConfig.earnerSteps;

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#0B0B0F] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E] text-gray-300 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span>Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {howItWorksConfig.headline}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            {howItWorksConfig.subheadline}
          </p>
        </div>

        {/* Animated Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#14141A] border border-[#22222E] shadow-xl">
            <button
              type="button"
              onClick={() => setActiveTab("brands")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "brands" ? "text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "brands" && (
                <motion.div
                  layoutId="howItWorksActiveTab"
                  className="absolute inset-0 bg-[#FF4500] rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Briefcase className="w-4 h-4 relative z-10" />
              <span className="relative z-10">For Brands</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("earners")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "earners" ? "text-black shadow-lg" : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "earners" && (
                <motion.div
                  layoutId="howItWorksActiveTab"
                  className="absolute inset-0 bg-emerald-400 rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <DollarSign className="w-4 h-4 relative z-10" />
              <span className="relative z-10">For Earners</span>
            </button>
          </div>
        </div>

        {/* Steps Grid with Framer Motion Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-[#14141A] rounded-2xl border border-[#22222E] p-6 hover:border-[#FF4500]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-black ${
                        activeTab === "brands" ? "text-[#FF4500]" : "text-emerald-400"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                      Step {index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#22222E] flex items-center gap-1.5 text-[11px] text-gray-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                  <span>Verified milestone</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Action button corresponding to active tab */}
        <div className="text-center">
          {activeTab === "brands" ? (
            <button
              type="button"
              onClick={() => scrollToContact("brand")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold text-sm shadow-xl shadow-[#FF4500]/25 transition-all active:scale-95"
            >
              <span>Get Started as a Brand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => scrollToContact("earner")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm shadow-xl shadow-emerald-500/25 transition-all active:scale-95"
            >
              <span>Apply to Earn Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
