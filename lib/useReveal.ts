"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal choreography.
 *
 * Watches every element marked with `data-reveal` and adds `is-revealed` when it
 * scrolls into view (see the CSS in app/globals.css for the transition). This is
 * a single shared IntersectionObserver rather than one-per-component to keep the
 * JS footprint minimal.
 *
 * Accessibility: if the user prefers reduced motion, we reveal everything
 * immediately and never attach the observer, so no content depends on motion.
 *
 * Usage: call `useReveal()` once near the top of a client component that renders
 * elements with the `data-reveal` attribute.
 */
export function useReveal(): void {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // No observer under reduced motion — just show content.
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target); // reveal once, then stop watching
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
