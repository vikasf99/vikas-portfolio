"use client";

import * as React from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface FluidButtonCardProps {
  className?: string;
  videoSrc?: string;
  title?: string;
  description?: string;
}

export function FluidButtonCard({
  className,
  videoSrc = "/figma/animations/fluid-button.mp4",
  title = "Title",
  description = "Property watchlist to see potential before making a move",
}: FluidButtonCardProps) {
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
      className={cn("group flex w-full flex-col overflow-hidden p-0", className)}
      onMouseMove={handleMouseMove}
    >
      {/* Video Section - Top 75-80% */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {!isLoaded && videoSrc && (
          <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        )}
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
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
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <div className="flex h-full w-full flex-col gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-full w-full ${
                    i % 2 === 0
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Section - Bottom 20-25% */}
      <div className="flex flex-col gap-[6px] bg-[color:var(--background-primary)] p-4">
        <h2 className="text-base font-semibold leading-none text-[color:var(--text-primary)]">
          {title}
        </h2>
        <p className="text-sm font-light leading-normal text-[color:var(--text-tertiary)]">
          {description}
        </p>
      </div>
    </Card>
  );
}
