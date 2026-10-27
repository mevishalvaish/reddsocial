"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  iconOnly?: boolean;
}

export function Logo({
  className = "",
  size = "md",
  showTagline = false,
  iconOnly = false,
}: LogoProps) {
  const iconDimensions = {
    sm: { width: 30, height: 30 },
    md: { width: 36, height: 36 },
    lg: { width: 44, height: 44 },
  }[size];

  const textClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Convolift Dark SaaS Vector Mark: Squircle + Speech Bubble + Ascending Growth Stroke */}
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{
          width: iconDimensions.width,
          height: iconDimensions.height,
        }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(255,69,0,0.25)]"
          aria-label="Convolift Icon"
        >
          {/* Base Dark Squircle with Orange Gradient Border */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="11"
            fill="#14141A"
            stroke="url(#logoBorderGrad)"
            strokeWidth="1.8"
          />

          <defs>
            <linearGradient id="logoBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF7700" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="bubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#E03D00" />
            </linearGradient>
          </defs>

          {/* Speech Bubble Base */}
          <path
            d="M11 14C11 11.7909 12.7909 10 15 10H25C27.2091 10 29 11.7909 29 14V21C29 23.2091 27.2091 25 25 25H18L13.5 28.5V25H13C11.8954 25 11 24.1046 11 23V14Z"
            fill="url(#bubbleGrad)"
          />

          {/* Ascending Growth Line (Lift) */}
          <path
            d="M17 21L21 16L24 19L27 13"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Growth Arrowhead */}
          <path
            d="M24 13H27V16"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Sparkle Apex Dot */}
          <circle cx="28.5" cy="11.5" r="1.5" fill="#FF4500" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <div className={`font-black tracking-tight ${textClasses} flex items-center`}>
            <span className="text-white">Convo</span>
            <span className="text-[#FF4500]">lift</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF4500] ml-0.5 mb-1" />
          </div>
          {showTagline && (
            <span className="text-[10px] tracking-wider uppercase font-semibold text-gray-400 mt-1">
              Reddit Marketing, Done Right
            </span>
          )}
        </div>
      )}
    </div>
  );
}
