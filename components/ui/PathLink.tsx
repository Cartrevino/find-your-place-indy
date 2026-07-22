"use client";

import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * An editorial "path" link used for the hero directions (I'm Buying, Selling,
 * Moving, Just Exploring). Styled as an underlined text link with an arrow that
 * nudges on hover — deliberately understated so the paths feel like an invitation,
 * not a hard-sell button row.
 *
 * Fires a `path_select` analytics event and carries a `data-analytics` hook.
 */
export function PathLink({
  id,
  label,
  href,
  className,
}: {
  id: string;
  label: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      data-analytics={`path:${id}`}
      onClick={() => track("path_select", { id })}
      className={cn(
        "group inline-flex items-center gap-2 text-base font-medium text-ink transition-colors hover:text-red",
        className,
      )}
    >
      <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-red">
        {label}
      </span>
      <span
        aria-hidden
        className="translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
