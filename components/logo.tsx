"use client"

import React from "react"

type LogoSizes = "sm" | "md" | "lg"

interface LogoProps {
  size?: LogoSizes
}

// Настройки размеров
const sizeConfig = {
  sm: {
    height: "32px",
    className: "h-8",
  },
  md: {
    height: "40px",
    className: "h-10",
  },
  lg: {
    height: "48px",
    className: "h-12",
  },
}

export default function Logo({ size = "lg" }: LogoProps) {
  const { className } = sizeConfig[size]

  return (
    <div className="flex items-center gap-2">
      {/* Очень простой SVG-круг для тестирования */}
      <div className={className}>
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
          <circle cx="20" cy="20" r="18" fill="#4FD1C5" />
        </svg>
      </div>
      <div className="text-white font-fixedsys text-xl md:text-2xl font-bold">
        <span className="text-teal-400">Hippocrat</span>
        <span className="text-indigo-400">Digital</span>
      </div>
    </div>
  )
}
