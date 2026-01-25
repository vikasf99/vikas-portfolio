"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "rainbow";
}

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(({ className, children, variant = "rainbow", ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "group relative flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold leading-none text-[color:var(--text-inverse)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-primary)] overflow-hidden transition-opacity hover:opacity-90",
        className,
      )}
      {...props}
    >
      {variant === "rainbow" && (
        <>
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 p-[1px]">
            <div className="h-full w-full rounded-xl bg-[color:var(--text-primary)]" />
          </div>
          {/* Gradient glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-50 blur-md -z-10 group-hover:opacity-75 transition-opacity" />
        </>
      )}
      {/* Content */}
      <div className="relative flex items-center gap-2">{children}</div>
    </button>
  );
});

GradientButton.displayName = "GradientButton";
