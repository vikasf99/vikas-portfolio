"use client";

import * as React from "react";
import { Play, Pause } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { FluidButtonCard } from "@/components/ui/fluid-button-card";

type FilterType = "ui-interactions" | "animations";

interface VideoCardProps {
  src: string;
}

function VideoCard({ src }: VideoCardProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const playButtonRef = React.useRef<HTMLButtonElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const lastPlayTimeRef = React.useRef<number>(0);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      lastPlayTimeRef.current = Date.now();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent mouse move from triggering
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to beginning
      setIsPlaying(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only pause if video is playing and it's been at least 300ms since play was clicked
    // This prevents immediate pausing when clicking the play button
    if (
      isPlaying &&
      videoRef.current &&
      Date.now() - lastPlayTimeRef.current > 300
    ) {
      // Check if mouse is not over the play button
      if (
        playButtonRef.current &&
        !playButtonRef.current.contains(e.target as Node)
      ) {
        handlePause();
      }
    }
  };

  return (
    <Card
      ref={cardRef}
      className="group relative aspect-[2/1] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="relative h-full w-full">
        {!isLoaded && (
          <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        )}
        <video
          ref={videoRef}
          src={src}
          className={`h-full w-full object-cover ${
            isLoaded ? "block" : "hidden"
          }`}
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleVideoEnd}
        />
        {isLoaded && (
          <button
            ref={playButtonRef}
            type="button"
            onClick={handleToggle}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-transform hover:scale-110">
              {isPlaying ? (
                <Pause className="h-6 w-6 text-white" />
              ) : (
                <Play className="h-6 w-6 text-white" />
              )}
            </div>
          </button>
        )}
      </div>
    </Card>
  );
}

export function FilterableContent() {
  const [activeFilter, setActiveFilter] =
    React.useState<FilterType>("ui-interactions");

  return (
    <>
      <div className="flex w-full items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("ui-interactions")}
          className={`
            rounded-md px-3 py-2 text-sm font-medium leading-normal hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-primary)]
            ${
              activeFilter === "ui-interactions"
                ? "bg-[color:var(--background-inverse)] text-[color:var(--text-inverse)]"
                : "bg-[color:var(--background-subtle)] text-[color:var(--text-tertiary)]"
            }
          `}
        >
          UI Interactions
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("animations")}
          className={`
            rounded-md px-3 py-2 text-sm font-medium leading-normal hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-primary)]
            ${
              activeFilter === "animations"
                ? "bg-[color:var(--background-inverse)] text-[color:var(--text-inverse)]"
                : "bg-[color:var(--background-subtle)] text-[color:var(--text-tertiary)]"
            }
          `}
        >
          Animations
        </button>
      </div>

      {activeFilter === "ui-interactions" && (
        <section className="flex w-full flex-col gap-4">
          <FluidButtonCard
            title="Fluid Button"
            description="From the new effects of iPhone from the release of IOS 16 there were some new metal effects and really wanted the reward of creating this fluid interaction in Swift UI."
          />
        </section>
      )}

      {activeFilter === "animations" && (
        <section className="flex w-full flex-col gap-4">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <VideoCard src="/figma/animations/animations-1.MP4" />
            <VideoCard src="/figma/animations/animtions-2.MP4" />
            <VideoCard src="/figma/animations/animations-3.MP4" />
            <VideoCard src="/figma/animations/animations-4.MP4" />
            <VideoCard src="/figma/animations/animtions-5.MP4" />
            <VideoCard src="/figma/animations/animations-6.MP4" />
          </div>
        </section>
      )}
    </>
  );
}
