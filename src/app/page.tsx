"use client";

import * as React from "react";
import Image from "next/image";
import { Command, Github, Instagram, Linkedin, Code, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupTooltip,
} from "@/ui-v2/avatar-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/ui-v2/dialog";

export default function Home() {
  const { open, setOpen } = useCommandPalette();
  const [dialogOpen, setDialogOpen] = React.useState<string | null>(null);
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--background-primary)]">
      <header className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-center gap-3 bg-[color:var(--background-primary)]/95 backdrop-blur-sm px-6 py-4" style={{ paddingTop: `max(env(safe-area-inset-top, 0px), 14px)` }}>
        <div className="flex w-full max-w-[640px] items-center gap-3">
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
        </div>
      </header>

      <div className="flex flex-1 justify-center bg-[color:var(--background-primary)] px-6 pb-36" style={{ paddingTop: `calc(max(env(safe-area-inset-top, 0px), 14px) + 96px)` }}>
        <main className="flex w-full max-w-[640px] flex-col gap-14">
          <section className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-wrap items-center gap-4">
            <p className="text-xl font-medium leading-none text-[color:var(--text-primary)]">
              Product Designer @
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
            Neurodivergent thinker, I explore multiple design paths in parallel, then converge on what ships best.
            Designing and building toward design engineering.
          </p>
        </section>

        <section data-section="work" className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-3">
            <p className="text-xl font-medium leading-none text-[color:var(--text-primary)]">
              Selected work
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
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src="/figma/work-bayut-token-system.png"
                      alt="Bayut Token System"
                      fill
                      className="pointer-events-none max-w-none select-none object-contain"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
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

        <section data-section="experiments" className="flex w-full flex-col gap-8">
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
              Some kind words
            </p>
            <p className="text-base font-light leading-6 text-[color:var(--text-tertiary)]">
              A few thoughts from people I've worked with and helped along the way
            </p>
            <AvatarGroup max={3} tooltipClassName="">
              <AvatarGroupItem onClick={() => setDialogOpen("aanchal")}>
                <Avatar className="size-8 overflow-hidden rounded-full">
                  <AvatarImage src="/figma/kind-words/avatar-1.png" alt="" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <AvatarGroupTooltip className="flex flex-col gap-0.5 text-center">
                  <span className="text-sm font-semibold">Aanchal Sukhramani</span>
                  <span className="text-xs font-normal text-[color:var(--text-tertiary)]">
                    Product Designer · Compra
                  </span>
                </AvatarGroupTooltip>
              </AvatarGroupItem>
              <AvatarGroupItem onClick={() => setDialogOpen("mahnoor")}>
                <Avatar className="size-8 overflow-hidden rounded-full">
                  <AvatarImage src="/figma/kind-words/avatar-2.png" alt="" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <AvatarGroupTooltip className="flex flex-col gap-0.5 text-center">
                  <span className="text-sm font-semibold">Mahnoor Irshad</span>
                  <span className="text-xs font-normal text-[color:var(--text-tertiary)]">
                    Product Manager · Bayut App
                  </span>
                </AvatarGroupTooltip>
              </AvatarGroupItem>
              <AvatarGroupItem onClick={() => setDialogOpen("zoe")}>
                <Avatar className="size-8 overflow-hidden rounded-full">
                  <AvatarImage src="/figma/kind-words/avatar-3.png" alt="" />
                  <AvatarFallback>Z</AvatarFallback>
                </Avatar>
                <AvatarGroupTooltip className="flex flex-col gap-0.5 text-center">
                  <span className="text-sm font-semibold">Zoe Chin</span>
                  <span className="text-xs font-normal text-[color:var(--text-tertiary)]">
                    Senior Product Designer · Aurem
                  </span>
                </AvatarGroupTooltip>
              </AvatarGroupItem>
            </AvatarGroup>

            {/* Dialog for Aanchal Sukhramani */}
            <Dialog open={dialogOpen === "aanchal"} onOpenChange={(open) => setDialogOpen(open ? "aanchal" : null)}>
              <DialogContent>
                <DialogHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <AvatarImage src="/figma/kind-words/avatar-1.png" alt="Aanchal Sukhramani" />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <DialogTitle>Aanchal Sukhramani</DialogTitle>
                      <DialogDescription>Product Designer · Compra</DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                <div className="max-h-[400px] overflow-y-auto pr-2">
                  <p className="text-sm leading-6 text-[color:var(--text-primary)]">
                    "When I was starting out and learning product design on my own, Vikas was one of the few who genuinely took the time to guide me. He never made me feel like I was asking too many questions, always patient, reviewing my work and helping me think more deeply about design. Our long calls helped me achieve clarity and confidence early on. I'm truly grateful and I'd highly recommend him for his genuine mentorship and honest guidance."
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Dialog for Mahnoor Irshad */}
            <Dialog open={dialogOpen === "mahnoor"} onOpenChange={(open) => setDialogOpen(open ? "mahnoor" : null)}>
              <DialogContent>
                <DialogHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <AvatarImage src="/figma/kind-words/avatar-2.png" alt="Mahnoor Irshad" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <DialogTitle>Mahnoor Irshad</DialogTitle>
                      <DialogDescription>Product Manager · Bayut App</DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                <div className="max-h-[400px] overflow-y-auto pr-2">
                  <p className="text-sm leading-6 text-[color:var(--text-primary)]">
                    "I had the pleasure of working with Vikas Shetty on the Bayut consumer apps, where we collaborated on several key initiatives, including the Filter redesign, creation of a unified design system, and optimization of the listing page with impactful features like Contacted and Viewed tags. Vikas brought a strong mix of creativity, user empathy, and technical understanding to every project. His attention to detail and collaborative spirit made him an invaluable teammate who consistently elevated the overall user experience."
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Dialog for Zoe Chin */}
            <Dialog open={dialogOpen === "zoe"} onOpenChange={(open) => setDialogOpen(open ? "zoe" : null)}>
              <DialogContent>
                <DialogHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <AvatarImage src="/figma/kind-words/avatar-3.png" alt="Zoe Chin" />
                      <AvatarFallback>Z</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <DialogTitle>Zoe Chin</DialogTitle>
                      <DialogDescription>Senior Product Designer · Aurem</DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                <div className="max-h-[400px] overflow-y-auto pr-2">
                  <p className="text-sm leading-6 text-[color:var(--text-primary)]">
                    "I worked closely with Vikas on some major projects at Bayut.com, including TruBroker, TruEstimate, and Dubai Transactions; and  I would always describe him to others as: an absolute joy to work with, and overall a chill guy 😎. He's easygoing, collaborative, and always enthusiastic about picking up new tools and trends in the market. Vikas is also flexible during discussions and quick at exploring different solutions on the spot — which makes him super fun to brainstorm with!"
                  </p>
                </div>
              </DialogContent>
            </Dialog>
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
      </div>
      <CommandPalette open={open} onOpenChange={setOpen} />
    </div>
  );
}
