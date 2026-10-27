"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Briefcase, DollarSign } from "lucide-react";
import { faqData } from "@/lib/contentConfig";

export function FAQ() {
  const [activeTab, setActiveTab] = useState<"brands" | "earners">("brands");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentQuestions = activeTab === "brands" ? faqData.brands : faqData.earners;

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#101017] border-t border-[#22222E] scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E] text-gray-300 text-xs font-bold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF4500]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-400">
            Clear, honest answers for both our marketing clients and our Reddit user community.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#14141A] border border-[#22222E]">
            <button
              type="button"
              onClick={() => {
                setActiveTab("brands");
                setOpenIndex(0);
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "brands"
                  ? "bg-[#FF4500] text-white shadow-lg shadow-[#FF4500]/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>For Brands</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("earners");
                setOpenIndex(0);
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "earners"
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>For Earners</span>
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {currentQuestions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#14141A] rounded-2xl border border-[#22222E] overflow-hidden transition-colors hover:border-[#2E2E3E]"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white focus:outline-none"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#FF4500]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-[#1C1C26]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
