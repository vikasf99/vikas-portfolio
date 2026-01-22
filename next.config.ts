import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Next/Turbopack uses THIS project as the root.
  // This prevents accidentally treating a parent directory (e.g. home folder)
  // as the workspace when multiple lockfiles exist on disk.
  turbopack: {
    root: __dirname,
  },
  // Fix network interface detection issues
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
