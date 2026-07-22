"use client";

import { useMemo, useState } from "react";
import { neighborhoods } from "@/content/neighborhoods";
import { lifestyles, type LifestyleId } from "@/content/lifestyles";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/** "all" shows every neighborhood; otherwise filter by one lifestyle. */
type Filter = LifestyleId | "all";

/**
 * NeighborhoodExplorer — "Find Your Indy", the signature section.
 *
 * An editorial, filterable guide rather than a listing directory. A row of
 * lifestyle chips narrows the set of neighborhood "plates"; the grid is
 * asymmetric on large screens (a featured plate spans two columns/rows) and
 * collapses to clean stacked cards on mobile.
 *
 * Accessibility:
 * - Chips are real <button>s with `aria-pressed`; the whole row is a group.
 * - An aria-live region announces how many neighborhoods match after filtering.
 *
 * Data-driven: everything here comes from content/neighborhoods.ts and
 * content/lifestyles.ts — see those files to add areas or lifestyle tags.
 */
export function NeighborhoodExplorer() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? neighborhoods
        : neighborhoods.filter((n) => n.tags.includes(filter)),
    [filter],
  );

  const handleFilter = (next: Filter) => {
    setFilter(next);
    track("neighborhood_filter", { filter: next });
  };

  return (
    <section
      id="neighborhoods"
      className="border-t border-hairline py-20 md:py-28"
      aria-labelledby="neighborhoods-heading"
    >
      <div className="container-editorial">
        {/* Section header */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div data-reveal className="md:col-span-8">
            <Eyebrow withRule>Find Your Indy</Eyebrow>
            <h2
              id="neighborhoods-heading"
              className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] text-ink md:text-6xl"
            >
              Every neighborhood has a personality. Which one is&nbsp;
              <span className="italic text-red">yours</span>?
            </h2>
          </div>
          <p data-reveal className="text-grey-600 md:col-span-4">
            A starting point, not a full map — these are a few of the places
            around Indianapolis worth knowing. Filter by the life you want to
            live.
          </p>
        </div>

        {/* Lifestyle filter chips */}
        <div
          data-reveal
          className="mt-10 flex flex-wrap gap-2.5"
          role="group"
          aria-label="Filter neighborhoods by lifestyle"
        >
          <Chip active={filter === "all"} onClick={() => handleFilter("all")}>
            All
          </Chip>
          {lifestyles.map((l) => (
            <Chip
              key={l.id}
              active={filter === l.id}
              onClick={() => handleFilter(l.id)}
            >
              {l.label}
            </Chip>
          ))}
        </div>

        {/* Live-region count for screen readers */}
        <p className="sr-only" aria-live="polite">
          {visible.length} neighborhood{visible.length === 1 ? "" : "s"} shown.
        </p>

        {/* Neighborhood grid */}
        <ul
          className="mt-10 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-flow:dense]"
        >
          {visible.map((n) => {
            const featured = Boolean(n.feature);
            return (
              <li
                key={n.id}
                data-reveal
                className={cn(
                  "group",
                  featured && "lg:col-span-2 lg:row-span-2",
                )}
              >
                <article className="flex h-full flex-col">
                  {/* Image */}
                  <div
                    className={cn(
                      "w-full overflow-hidden",
                      featured ? "aspect-[16/11]" : "aspect-[4/3]",
                    )}
                  >
                    <PlaceholderImage
                      label={n.image.alt}
                      productionPath={n.image.productionPath}
                      tone={featured ? "red" : "ink"}
                      className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-1 flex-col pt-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        className={cn(
                          "font-display text-ink",
                          featured ? "text-3xl md:text-4xl" : "text-2xl",
                        )}
                      >
                        {n.name}
                      </h3>
                      {/* Decorative "Explore" cue. Becomes a link to a
                          neighborhood page in Phase 2 (see README roadmap). */}
                      <span
                        aria-hidden
                        className="translate-x-0 text-sm font-medium text-grey-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red group-hover:opacity-100"
                      >
                        Explore →
                      </span>
                    </div>

                    <p className="mt-1.5 eyebrow text-grey-400">
                      {n.descriptors.join(" · ")}
                    </p>

                    <p
                      className={cn(
                        "mt-3 leading-relaxed text-grey-600",
                        featured ? "max-w-lg text-lg" : "text-base",
                      )}
                    >
                      {n.blurb}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/**
 * A single filter chip. Uses `aria-pressed` so assistive tech announces its
 * toggle state; styling flips to the red accent when active.
 */
function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-red bg-red text-paper"
          : "border-hairline bg-transparent text-ink hover:border-ink",
      )}
    >
      {children}
    </button>
  );
}
