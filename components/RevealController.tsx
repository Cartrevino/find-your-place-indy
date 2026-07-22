"use client";

import { useReveal } from "@/lib/useReveal";

/**
 * Headless client component that activates scroll-reveal for the whole page.
 * Rendered once from the (server) homepage so that server-rendered sections can
 * still use `data-reveal` without each becoming a client component.
 */
export function RevealController() {
  useReveal();
  return null;
}
