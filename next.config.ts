import type { NextConfig } from "next";

/**
 * Next.js configuration.
 *
 * This is a static-friendly marketing site. We keep the config intentionally
 * minimal. When production Indianapolis photography is added, configure
 * `images.remotePatterns` here if the assets are served from a CDN rather than
 * bundled in /public.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
