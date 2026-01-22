"use client";

import * as React from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  title: string;
  section: "Work" | "Play";
  href?: string;
  action?: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const commandItems: CommandItem[] = [
  {
    id: "property-portfolio",
    title: "Property Portfolio",
    section: "Work",
    href: "https://vkaaas.framer.website/portfolio-case-study",
  },
  {
    id: "bayut-token-system",
    title: "Bayut Token System",
    section: "Work",
    href: "https://vkaaas.framer.website/designsystemtokens-case-study",
  },
  {
    id: "interactions-motion",
    title: "Interactions & Motion",
    section: "Play",
    href: "/interaction-motion",
  },
  {
    id: "fujifolder",
    title: "FujiFolder",
    section: "Play",
    href: "https://fuji-folder.figma.site/",
  },
  {
    id: "headspace-ui-kit",
    title: "Headspace UI kit",
    section: "Play",
    href: "https://www.figma.com/community/file/1011946115965632470",
  },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Filter items based on search
  const filteredItems = React.useMemo(() => {
    if (!search.trim()) {
      return commandItems;
    }
    const query = search.toLowerCase();
    return commandItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.section.toLowerCase().includes(query),
    );
  }, [search]);

  // Group items by section
  const groupedItems = React.useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.section]) {
        groups[item.section] = [];
      }
      groups[item.section].push(item);
    });
    return groups;
  }, [filteredItems]);

  // Reset selected index when search changes
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Focus input when opened
  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      setSearch("");
      setSelectedIndex(0);
    }
  }, [open]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;

    const flatItems = filteredItems;
    const totalItems = flatItems.length;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % totalItems);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + totalItems) % totalItems);
        break;
      case "Enter":
      case "Return":
        e.preventDefault();
        if (flatItems[selectedIndex]) {
          handleSelectItem(flatItems[selectedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        onOpenChange(false);
        break;
    }
  };

  // Scroll selected item into view
  React.useEffect(() => {
    if (listRef.current && filteredItems.length > 0) {
      const selectedElement = listRef.current.querySelector(
        `[data-item-index="${selectedIndex}"]`,
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex, filteredItems.length]);

  const handleSelectItem = (item: CommandItem) => {
    if (item.href) {
      if (item.href.startsWith("/")) {
        router.push(item.href);
      } else {
        window.open(item.href, "_blank", "noopener,noreferrer");
      }
    } else if (item.action) {
      item.action();
    }
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
    setSearch("");
  };

  if (!open) return null;

  const flatItems = filteredItems;
  const hasResults = flatItems.length > 0;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Command Palette */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--background-primary)] shadow-md">
        {/* Search Input */}
        <div className="flex items-center gap-2 border-b border-[color:var(--border-subtle)] px-3 py-2">
          <Search className="h-4 w-4 shrink-0 text-[color:var(--icon-subtle)]" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search"
            className="flex-1 bg-transparent text-sm leading-normal text-[color:var(--text-primary)] placeholder:text-[color:var(--text-tertiary)] focus:outline-none"
          />
          <button
            type="button"
            onClick={handleClose}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm text-[color:var(--icon-subtle)] hover:bg-[color:var(--background-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          className="max-h-[300px] overflow-y-auto p-1"
        >
          {hasResults ? (
            Object.entries(groupedItems).map(([section, items]) => (
              <div key={section}>
                {/* Section Header */}
                <div className="px-3 py-2">
                  <p className="text-xs font-medium leading-normal text-[color:var(--text-tertiary)]">
                    {section}
                  </p>
                </div>
                
                {/* Section Items */}
                {items.map((item) => {
                  const flatIndex = flatItems.findIndex((i) => i.id === item.id);
                  const isSelected = flatIndex === selectedIndex;
                  
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-item-index={flatIndex}
                      onClick={() => handleSelectItem(item)}
                      onMouseEnter={() => setSelectedIndex(flatIndex)}
                      className={cn(
                        "flex w-full items-center justify-between gap-2 rounded-sm px-3 py-2 text-left text-sm leading-normal transition-colors",
                        isSelected
                          ? "bg-[color:var(--background-subtle)] text-[color:var(--text-primary)]"
                          : "text-[color:var(--text-primary)] hover:bg-[color:var(--background-subtle)]",
                      )}
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[color:var(--icon-subtle)] opacity-50" />
                    </button>
                  );
                })}
              </div>
            ))
          ) : (
            <div className="px-3 py-8 text-center">
              <p className="text-sm leading-normal text-[color:var(--text-tertiary)]">
                No result matching your search
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Hook for keyboard shortcut
export function useCommandPalette() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return { open, setOpen };
}
