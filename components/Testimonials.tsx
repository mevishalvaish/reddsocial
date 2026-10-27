"use client";

import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { testimonialsData } from "@/lib/contentConfig";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E] text-gray-300 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            What Clients &amp; Workers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Real feedback from startup founders and our verified Reddit worker community.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#14141A] rounded-2xl border border-[#22222E] p-7 flex flex-col justify-between hover:border-[#FF4500]/30 transition-all duration-300 group"
            >
              <div>
                {/* Top: Star Rating & Audience Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      item.audience === "brand"
                        ? "text-[#FF4500] bg-[#FF4500]/10 border-[#FF4500]/20"
                        : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                    }`}
                  >
                    {item.audience === "brand" ? "Client Brand" : "Active Earner"}
                  </span>
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Bio */}
              <div className="pt-4 border-t border-[#22222E] flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#2E2E3E] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">{item.name}</h3>
                  <p className="text-[11px] text-gray-400">
                    {item.role} • <span className="text-gray-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
