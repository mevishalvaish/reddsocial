"use client";

import React from "react";
import {
  ShieldCheck,
  Target,
  PenTool,
  Clock,
  FileCheck2,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { whyConvoliftPoints } from "@/lib/contentConfig";

export function WhyConvoLift() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#FF4500]" />;
      case "Target":
        return <Target className="w-5 h-5 text-[#FF4500]" />;
      case "PenTool":
        return <PenTool className="w-5 h-5 text-[#FF4500]" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#FF4500]" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5 text-[#FF4500]" />;
      case "Headphones":
      default:
        return <Headphones className="w-5 h-5 text-[#FF4500]" />;
    }
  };

  return (
    <section id="why" className="py-20 sm:py-28 bg-[#101017] border-t border-[#22222E] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E] text-gray-300 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span>The Convolift Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Why Brands and Earners Trust Convolift
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Reddit has high standards. Here is how our model delivers organic engagement safely and sustainably without bots or spam.
          </p>
        </div>

        {/* 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyConvoliftPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[#14141A] rounded-2xl border border-[#22222E] p-6 sm:p-7 hover:border-[#FF4500]/40 hover:bg-[#181824] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center mb-5 group-hover:bg-[#FF4500] group-hover:text-white transition-colors">
                  {getIcon(point.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF4500] transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#22222E] flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4500]" />
                <span>Zero bots used • 100% human</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
