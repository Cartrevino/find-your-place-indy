"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Site header: wordmark, minimal nav, and the persistent "Let's Talk" CTA.
 *
 * Behavior:
 * - Transparent over the hero, then gains a paper background + hairline once the
 *   user scrolls, so it stays legible over any section.
 * - Below `md` the nav collapses into an accessible slide-down menu.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the menu on Escape for keyboard users.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-hairline bg-paper/95 backdrop-blur-sm"
          : "border-b border-transparent",
      )}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-ink md:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          {site.brand}
          <span className="text-red">.</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-red"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.headerCta.href}
            data-analytics="cta:header-lets-talk"
            onClick={() => track("cta_click", { id: "header-lets-talk" })}
            className="inline-flex items-center border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-red hover:bg-red hover:text-paper"
          >
            {site.headerCta.label}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden>
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-6 bg-ink transition-all duration-300",
                menuOpen ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-0.5 w-6 bg-ink transition-opacity duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-6 bg-ink transition-all duration-300",
                menuOpen ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-hairline bg-paper transition-[max-height] duration-300 ease-out md:hidden",
          menuOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <nav
          aria-label="Primary mobile"
          className="container-editorial flex flex-col gap-1 py-4"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-hairline py-3 font-display text-2xl text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.headerCta.href}
            data-analytics="cta:mobile-lets-talk"
            onClick={() => {
              track("cta_click", { id: "mobile-lets-talk" });
              setMenuOpen(false);
            }}
            className="mt-3 inline-flex items-center justify-center bg-red px-5 py-3.5 text-sm font-medium text-paper"
          >
            {site.headerCta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
