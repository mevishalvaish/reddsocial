import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  showTagline?: boolean;
  iconOnly?: boolean;
}

export function Logo({
  className = "",
  size = "md",
  variant = "light",
  showTagline = false,
  iconOnly = false,
}: LogoProps) {
  // Dimensions based on size
  const iconDimensions = {
    sm: { width: 28, height: 28 },
    md: { width: 34, height: 34 },
    lg: { width: 44, height: 44 },
  }[size];

  const textClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  const isDarkBg = variant === "dark";
  const primaryTextColor = isDarkBg ? "text-white" : "text-[#1A1A1B]";
  const secondaryTextColor = isDarkBg ? "text-[#EDEFF1]" : "text-[#576F76]";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* ConvoLift Symbol: Conversation Bubble + Dynamic Upward Lift Waveform */}
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105"
        style={{
          width: iconDimensions.width,
          height: iconDimensions.height,
        }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
          aria-label="ConvoLift Icon"
        >
          {/* Base rounded squircle container */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            fill={isDarkBg ? "#252526" : "#FFF0E9"}
            stroke={isDarkBg ? "#3A3A3C" : "#FF4500"}
            strokeWidth="1.5"
            strokeOpacity={isDarkBg ? "0.6" : "0.2"}
          />

          {/* Conversation Bubble body (Convo) */}
          <path
            d="M11 14C11 11.7909 12.7909 10 15 10H25C27.2091 10 29 11.7909 29 14V21C29 23.2091 27.2091 25 25 25H18L13.5 28.5V25H13C11.8954 25 11 24.1046 11 23V14Z"
            fill="#FF4500"
          />

          {/* Upward Growth Surge / Lift Arrow (White inner ascending waveform) */}
          <path
            d="M17 21L21 16L24 19L27 13"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Arrowhead on the top right lift tip */}
          <path
            d="M24 13H27V16"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Lift Apex Sparkle Dot */}
          <circle cx="28.5" cy="11.5" r="1.5" fill="#FF4500" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-tight">
          <div className={`font-black tracking-tight ${textClasses} flex items-center`}>
            <span className={primaryTextColor}>Convo</span>
            <span className="text-[#FF4500]">Lift</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF4500] ml-0.5 mb-1" />
          </div>
          {showTagline && (
            <span className={`text-[10px] tracking-wider uppercase font-bold ${secondaryTextColor}`}>
              Turn Conversations Into Growth
            </span>
          )}
        </div>
      )}
    </div>
  );
}
