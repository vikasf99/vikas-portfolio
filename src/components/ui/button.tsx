"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "secondary" | "ghost";
  size?: "default" | "icon";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "secondary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-primary)]",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "secondary" &&
            "bg-[color:var(--background-subtle)] text-[color:var(--text-tertiary)] hover:bg-[color:color-mix(in oklab,var(--background-subtle),#000 8%)] dark:hover:bg-[color:color-mix(in oklab,var(--background-subtle),#fff 8%)]",
          variant === "ghost" &&
            "bg-transparent text-[color:var(--text-tertiary)] hover:bg-[color:var(--background-subtle)]",
          size === "default" && "h-9 px-3 py-2",
          size === "icon" && "h-9 w-9 p-0",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
