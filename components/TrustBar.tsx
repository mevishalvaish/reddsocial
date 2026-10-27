"use client";

import React from "react";
import { trustBarStats } from "@/lib/contentConfig";

export function TrustBar() {
  return (
    <section className="border-y border-[#22222E] bg-[#101017] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {trustBarStats.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {item.value.replace(/[^0-9]/g, "")}
                <span className="text-[#FF4500]">{item.value.replace(/[0-9]/g, "")}</span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-400 capitalize mt-1 tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
