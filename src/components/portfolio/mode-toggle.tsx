"use client";

import { useTheme } from "@/components/theme/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="flex items-center gap-[11px]">
      <button
        aria-label="Light mode"
        type="button"
        className={[
          "flex h-9 items-center justify-center rounded-md px-2 py-[10px]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-primary)]",
          isLight ? "border border-[color:var(--border-subtle)]" : "opacity-50",
        ].join(" ")}
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4 text-[color:var(--icon-primary)]" />
      </button>
      <button
        aria-label="Dark mode"
        type="button"
        className={[
          "flex h-9 items-center justify-center rounded-md px-2 py-[10px]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-primary)]",
          !isLight ? "border border-[color:var(--border-subtle)]" : "opacity-50",
        ].join(" ")}
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4 text-[color:var(--icon-primary)]" />
      </button>
    </div>
  );
}
