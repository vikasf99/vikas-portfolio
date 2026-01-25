import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ExperimentCardProps {
  icon?: React.ReactNode;
  iconSrc?: string;
  iconBg?: string;
  iconFill?: boolean;
  title: string;
  description: string;
  href?: string;
  excludeDarkModeFilter?: boolean;
}

export function ExperimentCard({
  icon,
  iconSrc,
  iconBg = "bg-[color:var(--background-subtle)]",
  iconFill = false,
  title,
  description,
  href,
  excludeDarkModeFilter = false,
}: ExperimentCardProps) {
  const content = (
    <div
      className={cn(
        "flex w-full items-center gap-3 rounded-[14px] border border-[color:var(--border-subtle)] bg-[color:var(--background-primary)] p-4 transition-colors hover:bg-[color:var(--background-subtle)]",
      )}
    >
      <div
        className={cn(
          "relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg",
          iconBg,
        )}
      >
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt=""
            width={48}
            height={48}
            {...(!excludeDarkModeFilter && { "data-icon-image": true })}
            className={cn(
              "h-full w-full",
              iconFill ? "object-cover" : "object-contain p-2",
            )}
          />
        ) : (
          icon && (
            <div className="flex h-full w-full items-center justify-center p-2">
              {icon}
            </div>
          )
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
        <p className="truncate text-base font-semibold leading-none text-[color:var(--text-primary)]">
          {title}
        </p>
        <p className="line-clamp-2 text-sm font-light leading-5 text-[color:var(--text-tertiary)]">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    // Check if it's an internal link (starts with /) or external
    const isInternal = href.startsWith("/");
    
    if (isInternal) {
      return (
        <Link href={href} className="block">
          {content}
        </Link>
      );
    }
    
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
