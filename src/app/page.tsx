"use client";

import * as React from "react";
import Image from "next/image";
import { Command, Github, Instagram, Linkedin, Code, Play } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/portfolio/mode-toggle";
import { ExperimentCard } from "@/components/portfolio/experiment-card";
import { CommandPalette, useCommandPalette } from "@/components/ui/command-palette";

export default function Home() {
  const { open, setOpen } = useCommandPalette();
  return (
    <div className="flex min-h-screen justify-center bg-[color:var(--background-primary)] px-6 pb-36 pt-14">
      <main className="flex w-full max-w-[640px] flex-col gap-14">
        <header className="sticky top-0 z-50 flex w-full items-center gap-3 bg-[color:var(--background-primary)]/95 backdrop-blur-sm py-4">
          <div className="flex flex-1 items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[80px] border border-[color:var(--border-subtle)] bg-[color:var(--background-subtle)]">
              <Avatar className="h-12 w-12">
                {/* Swap avatar based on theme (dark mode uses avatar-dark.png) */}
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

        <section className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-wrap items-center gap-4">
            <p className="text-xl font-medium leading-none text-[color:var(--text-primary)]">
              Product Designer
            </p>
            <div className="flex items-center gap-[2px]">
              <Image
                src="/figma/brand-dubizzle.svg"
                alt="dubizzle"
                width={24}
                height={24}
              />
              <p className="text-xl font-medium leading-none text-[color:var(--text-primary)]">
                dubizzle
              </p>
            </div>
          </div>
          <p className="text-base font-light leading-6 text-[color:var(--text-tertiary)]">
            Leading the Bayut App, a creative generalist, neurodivergent and
            also transitioning to Design Engineering.
          </p>
        </section>

        <section data-section="work" className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-3">
            <p className="text-xl font-medium leading-none text-[color:var(--text-primary)]">
              My work
            </p>
            <p className="text-base font-light leading-6 text-[color:var(--text-tertiary)]">
              Here’s how I think, decide, and ship under constraints
            </p>
          </div>

          {/* Card-group (Figma 32:7253): always 2-up on desktop, 1-up on small */}
          <div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2">
            <a
              href="https://vkaaas.framer.website/portfolio-case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-90"
            >
              <Card className="w-full min-w-[248px]">
                <CardHeader>
                  <div className="flex flex-col gap-[6px]">
                    <CardTitle>Property Portfolio</CardTitle>
                    <CardDescription>
                      Property watchlist to see potential before making a move
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src="/figma/work-property-portfolio.png"
                      alt=""
                      fill
                      className="pointer-events-none max-w-none select-none object-contain"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </CardFooter>
              </Card>
            </a>

            <a
              href="https://vkaaas.framer.website/designsystemtokens-case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-90"
            >
              <Card className="w-full min-w-[248px]">
                <CardHeader>
                  <div className="flex flex-col gap-[6px]">
                    <CardTitle>Bayut Token System</CardTitle>
                    <CardDescription>
                      Semantic tokens for the Bayut app and design system
                      maintenance
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-[color:var(--background-primary)] pointer-events-none select-none">
                  {/* Center the “main frame” like an object-contain image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-[121.333px] w-[180.96px]">
                      <div className="absolute left-[24.5px] top-0 flex h-[40px] w-[74px] flex-col items-center justify-center gap-[2px]">
                        <p className="text-xs font-extralight leading-4 text-[color:var(--text-primary)]">
                          Border-subtle
                        </p>
                        <div className="flex h-[22px] items-center justify-center">
                          <div className="h-px w-[22px] rotate-90 bg-[color:var(--border-subtle)]" />
                        </div>
                      </div>

                      <div className="absolute bottom-[23.26%] left-0 right-0 top-[32.72%] flex items-center gap-[7.146px] overflow-hidden rounded-[10px] border border-[color:var(--border-subtle)] p-[12.704px]">
                        <div className="h-[25.407px] w-[25.407px] shrink-0 rounded-[4.764px] bg-[#2abb7f]" />
                        <p className="whitespace-nowrap text-lg font-medium leading-7 text-[color:var(--text-primary)]">
                          Brand-primary
                        </p>
                      </div>

                      <div className="absolute bottom-0 right-[19.46px] top-[70.88%] flex flex-col items-center justify-center gap-[4.667px]">
                        <div className="flex h-[14.667px] items-center justify-center">
                          <div className="h-[0.667px] w-[14.667px] rotate-[270deg] bg-[color:var(--border-subtle)]" />
                        </div>
                        <p className="text-xs font-extralight leading-4 text-[color:var(--text-primary)]">
                          content-primary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </CardFooter>
              </Card>
            </a>

            <Card className="w-full min-w-[248px]">
              <CardHeader>
                <div className="flex flex-col gap-[6px]">
                  <CardTitle>TruBroker™ Stories</CardTitle>
                  <CardDescription>
                    Agent sharing stories feature in Bayut app
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/figma/work-trubroker-stories.png"
                    alt=""
                    fill
                    className="pointer-events-none max-w-none select-none object-contain"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </CardFooter>
            </Card>

            <Card className="w-full min-w-[248px]">
              <CardHeader>
                <div className="flex flex-col gap-[6px]">
                  <CardTitle>Detail Page Redesign</CardTitle>
                  <CardDescription>
                    Revamping the property detail section of the app
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/figma/work-detail-page-redesign.png"
                    alt=""
                    fill
                    className="pointer-events-none max-w-none select-none object-contain"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-3">
            <p className="text-xl font-medium leading-none text-[color:var(--text-primary)]">
              Play & Experiments
            </p>
            <p className="text-base font-light leading-6 text-[color:var(--text-tertiary)]">
              These are some of my experiments out of work, where i explored new
              tools workflows, Motion-design/Lottie & currently diving into AI
              workflows with coding
            </p>
          </div>

          <div className="flex w-full flex-col gap-3">
            <ExperimentCard
              icon={<Code className="h-6 w-6 text-[color:var(--icon-subtle)]" />}
              iconSrc="/figma/icon-fujifolder.png"
              title="FujiFolder"
              description="Experimental Figma Make project exploring AI based workflows and rapid prototyping"
              href="https://fuji-folder.figma.site/"
            />
            <ExperimentCard
              icon={
                <div className="relative h-6 w-6">
                  <div className="absolute inset-0 rounded bg-orange-500" />
                  <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-white" />
                  <div className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <div className="absolute bottom-1 left-1/2 h-1 w-3 -translate-x-1/2 rounded-sm bg-white" />
                </div>
              }
              iconSrc="/figma/icon-headspace.png"
              iconBg="bg-[#FFD700]"
              iconFill
              excludeDarkModeFilter
              title="Headspace UI kit"
              description="Created an entire component system for Headspace for the figma community as a design system project"
              href="https://www.figma.com/community/file/1011946115965632470"
            />
            <ExperimentCard
              icon={<Play className="h-6 w-6 text-[color:var(--icon-subtle)]" />}
              iconSrc="/figma/icon-interaction-motion.png"
              title="Interaction & Motion"
              description="Some of my experimental UI interactions made with AI and motion graphics exploring motion design"
              href="/interaction-motion"
            />
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-3">
            <p className="text-xl font-medium leading-none text-[color:var(--text-primary)]">
              Connect with me
            </p>
            <p className="text-base font-light leading-6 text-[color:var(--text-tertiary)]">
              Don’t stay stranger, let’s discuss any interesting project, ideas,
              grab a coffee and get something cool out there.
            </p>
          </div>

          <div className="flex items-start gap-6">
            <a
              href="https://github.com/vikasf99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-[color:var(--icon-subtle)] hover:text-[color:var(--icon-primary)]" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-shetty-52169b16b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-[color:var(--icon-subtle)] hover:text-[color:var(--icon-primary)]" />
            </a>
            <a
              href="https://www.instagram.com/vkas.raw?igsh=MWEzbTRnNWh6cndqbA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-[color:var(--icon-subtle)] hover:text-[color:var(--icon-primary)]" />
            </a>
          </div>
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
