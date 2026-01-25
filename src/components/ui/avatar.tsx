import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export function AvatarImage({
  className,
  src,
  alt,
  priority,
}: {
  className?: string;
  src: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      className={cn("aspect-square h-full w-full object-cover", className)}
      src={src}
      alt={alt ?? ""}
      width={96}
      height={96}
      priority={priority}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-[color:var(--background-subtle)] text-[color:var(--text-primary)]",
        className,
      )}
      {...props}
    />
  );
}
