/**
 * Vendor-agnostic analytics integration point.
 *
 * The site does not ship a specific analytics vendor. Instead, every tracked
 * interaction calls `track()`, and components tag their CTAs with `data-analytics`
 * attributes. To connect a provider (Plausible, GA4, PostHog, Vercel Analytics…),
 * implement the body of `track()` below — nothing else needs to change.
 *
 * @example
 *   <a data-analytics="cta:lets-talk" onClick={() => track("cta_click", { id: "lets-talk" })}>
 */

export type AnalyticsEvent =
  | "cta_click"
  | "path_select" // hero path chosen (buying/selling/moving/exploring)
  | "neighborhood_filter" // lifestyle chip toggled
  | "neighborhood_open" // a neighborhood "Explore" affordance used
  | "contact_phone"
  | "contact_email"
  | "contact_submit";

/**
 * Record an analytics event. No-op by default so the UI works with zero config.
 * Replace the body with a real call once a provider is chosen.
 */
export function track(
  event: AnalyticsEvent,
  props: Record<string, string | number | boolean> = {},
): void {
  if (process.env.NODE_ENV !== "production") {
    // Helpful during development to confirm events fire without a vendor wired up.
    console.debug(`[analytics] ${event}`, props);
    return;
  }

  // TODO: forward to your analytics provider here, e.g.:
  //   window.plausible?.(event, { props });
  //   window.gtag?.("event", event, props);
}
