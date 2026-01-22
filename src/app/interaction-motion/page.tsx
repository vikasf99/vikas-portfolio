"use client";

import * as React from "react";
import Link from "next/link";
import { Command, ArrowLeft } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/portfolio/mode-toggle";
import { FilterableContent } from "@/components/portfolio/filterable-content";
import { CommandPalette, useCommandPalette } from "@/components/ui/command-palette";

export default function InteractionMotionPage() {
  const { open, setOpen } = useCommandPalette();
  return (
    <div className="flex min-h-screen justify-center bg-[color:var(--background-primary)] px-6 pb-36 pt-14">
      <main className="flex w-full max-w-[640px] flex-col gap-14">
        <header className="sticky top-0 z-50 flex w-full items-center gap-3 bg-[color:var(--background-primary)]/95 backdrop-blur-sm py-4">
          <div className="flex flex-1 items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[80px] border border-[color:var(--border-subtle)] bg-[color:var(--background-subtle)]">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="/figma/avatar.png"
                  alt="Avatar"
                  className="block dark:hidden"
                  priority
                />
                <AvatarImage
                  src="/figma/avatar-dark.png"
                  alt="Avatar"
                  className="hidden dark:block"
                />
              </Avatar>
            </div>
            <p className="text-[30px] font-normal leading-none text-[color:var(--text-primary)]">
              Vikas Shetty
            </p>
          </div>

          <button
            aria-label="Command palette"
            type="button"
            onClick={() => setOpen(true)}
            className="hidden lg:flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-[color:var(--background-subtle)] px-3 py-2 text-[color:var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-primary)]"
          >
            <Command className="h-4 w-4" />
            <span className="text-sm font-medium leading-5">K</span>
          </button>

          <ModeToggle />
        </header>

        <Link
          href="/"
          className="flex w-fit items-center gap-2 text-sm font-medium text-[color:var(--text-primary)] hover:text-[color:var(--text-tertiary)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back Home</span>
        </Link>

        <section className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col gap-4">
            <h1 className="text-xl font-medium leading-none text-[color:var(--text-primary)]">
              Interaction & Motion
            </h1>
            <p className="text-base font-light leading-normal text-[color:var(--text-primary)]">
              I&apos;m a big fan of interactions and something interesting that
              keeps the user interface engaging through motion, using this space
              to show share what I create.
            </p>
          </div>

          <FilterableContent />
        </section>

        <footer className="flex w-full flex-col gap-5">
          <Separator />
          <div className="flex w-full items-center justify-between text-sm font-light leading-none text-[color:var(--text-tertiary)]">
            <p>© Vikas Shetty 2026</p>
            <p>Less is more</p>
          </div>
        </footer>
      </main>
      <CommandPalette open={open} onOpenChange={setOpen} />
    </div>
  );
}
