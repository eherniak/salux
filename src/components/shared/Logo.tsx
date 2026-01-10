import * as React from "react";
import { cn } from "@/lib/utils";

export type LogoProps = {
  className?: string;
  showText?: boolean;
  theme?: "light" | "dark";
};

export default function Logo({ className, showText = true, theme = "light" }: LogoProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <svg
        className="w-8 h-8 flex-shrink-0"
        viewBox="0 0 100 100"
        fill="none"
        role="img"
        aria-label="Salux logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="24" fill="#0066CC" />
        <path
          d="M32 50C32 40.0589 40.0589 32 50 32C59.9411 32 68 40.0589 68 50"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="7" fill="white" />
        <path d="M36 68H64" stroke="white" strokeWidth="6" strokeLinecap="round" />
      </svg>

      {showText && (
        <span
          className={cn(
            "font-bold text-xl tracking-tight leading-none",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Salux<span className="text-[#0066CC]">Systems</span>
        </span>
      )}
    </div>
  );
}

