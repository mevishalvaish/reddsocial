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
      {/* Abstract Conversation & Connected-Thread Symbol */}
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
          aria-label="ReddSocial Icon"
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
          
          {/* Main conversation bubble (primary orange-red) */}
          <path
            d="M13 14C13 11.7909 14.7909 10 17 10H25C27.2091 10 29 11.7909 29 14V21C29 23.2091 27.2091 25 25 25H20L15.5 28.5V25H15C13.8954 25 13 24.1046 13 23V14Z"
            fill="#FF4500"
          />
          
          {/* Overlapping secondary thread loop / connection */}
          <path
            d="M19 18C19 16.8954 19.8954 16 21 16H27C28.1046 16 29 16.8954 29 18V23C29 24.1046 28.1046 25 27 25H25.5V27.5L22.5 25H21C19.8954 25 19 24.1046 19 23V18Z"
            fill={isDarkBg ? "#FFFFFF" : "#FFFFFF"}
            fillOpacity="0.95"
          />

          {/* Connected community accent dot */}
          <circle cx="20" cy="17.5" r="1.5" fill="#FFFFFF" />
          <circle cx="24" cy="20.5" r="1.5" fill="#FF4500" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-tight">
          <div className={`font-bold tracking-tight ${textClasses} flex items-center`}>
            <span className={primaryTextColor}>Redd</span>
            <span className="text-[#FF4500]">Social</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF4500] ml-0.5 mb-1" />
          </div>
          {showTagline && (
            <span className={`text-[10px] tracking-wider uppercase font-medium ${secondaryTextColor}`}>
              Be Part of the Conversation
            </span>
          )}
        </div>
      )}
    </div>
  );
}
