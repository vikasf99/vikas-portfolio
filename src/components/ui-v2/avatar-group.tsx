"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const AvatarGroupContext = React.createContext<{
  tooltipClassName?: string;
}>({});

export interface AvatarGroupTooltipProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Tooltip content (e.g. name, role). */
  children?: React.ReactNode;
}

function AvatarGroupTooltip({
  className,
  children,
  ...props
}: AvatarGroupTooltipProps) {
  const { tooltipClassName } = React.useContext(AvatarGroupContext);
  return (
    <div
      role="tooltip"
      className={cn(
        "absolute bottom-full left-1/2 z-[100] mb-1.5 w-fit min-w-[220px] -translate-x-1/2 rounded-md px-2.5 py-1.5 text-xs font-medium text-[color:var(--text-primary)] bg-[color:var(--background-primary)] border border-[color:var(--border-subtle)] shadow-sm pointer-events-none [&>*]:whitespace-nowrap",
        "origin-bottom transform-gpu",
        "opacity-0 scale-95 translate-y-1 -rotate-y-90 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-y-0",
        tooltipClassName,
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </div>
  );
}

export interface AvatarGroupItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Injected by AvatarGroup. */
  index?: number;
  /** Injected by AvatarGroup. */
  total?: number;
  /** Injected by AvatarGroup. */
  tooltipClassName?: string;
}

const AvatarGroupItem = React.forwardRef<HTMLDivElement, AvatarGroupItemProps>(
  (
    {
      className,
      children,
      index = 0,
      total = 1,
      tooltipClassName: _tooltipClassName,
      ...props
    },
    ref,
  ) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex shrink-0 cursor-pointer rounded-full border border-[color:var(--border-inverse)] ring-2 ring-[color:var(--background-primary)] transition-transform duration-200 ease-out [&:not(:first-child)]:-ml-2",
          hovered && "scale-110",
          className,
        )}
        style={{
          zIndex: hovered ? (total ?? 1) + 1 : index,
          perspective: "500px",
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
AvatarGroupItem.displayName = "AvatarGroupItem";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max number of avatar items to show before overflow count. */
  max?: number;
  /** Class name applied to all AvatarGroupTooltip elements. */
  tooltipClassName?: string;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max, tooltipClassName, style, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const visible = max != null ? childArray.slice(0, max) : childArray;
    const overflowCount = max != null ? Math.max(0, childArray.length - max) : 0;
    const total = visible.length;

    return (
      <AvatarGroupContext.Provider value={{ tooltipClassName }}>
        <div
          ref={ref}
          className={cn("flex flex-row gap-0", className)}
          data-slot="avatar-group"
          style={{ marginTop: 16, marginBottom: 0, ...style }}
          {...props}
        >
          {visible.map((child, i) =>
            React.isValidElement(child)
              ? React.cloneElement(
                  child as React.ReactElement<AvatarGroupItemProps>,
                  {
                    key: (child as React.ReactElement).key ?? i,
                    index: i,
                    total,
                    tooltipClassName,
                  },
                )
              : child,
          )}
          {overflowCount > 0 && (
            <div
              className={cn(
                "relative -ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-inverse)] bg-[color:var(--background-subtle)] text-xs font-medium text-[color:var(--text-tertiary)] ring-2 ring-[color:var(--background-primary)]",
              )}
              style={{ zIndex: total }}
            >
              +{overflowCount}
            </div>
          )}
        </div>
      </AvatarGroupContext.Provider>
    );
  },
);
AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup, AvatarGroupItem, AvatarGroupTooltip };
