/**
 * Lifestyle categories used to filter/highlight neighborhoods in the
 * Neighborhood Explorer ("Find Your Indy").
 *
 * HOW IT WORKS
 * - Each lifestyle has a stable `id` and a display `label`.
 * - Neighborhoods (see neighborhoods.ts) reference these ids in their `tags`.
 * - The Explorer renders one filter chip per lifestyle here, in this order.
 *
 * HOW TO ADD A LIFESTYLE
 * 1. Add an entry below with a new unique `id`.
 * 2. Add that `id` to the `tags` array of any matching neighborhood.
 * That's it — the chip and filtering behavior appear automatically.
 */

export const lifestyles = [
  { id: "walkable", label: "Walkable" },
  { id: "family", label: "Family-Friendly" },
  { id: "urban", label: "Urban" },
  { id: "quiet", label: "Quiet" },
  { id: "creative", label: "Creative" },
  { id: "connected", label: "Connected" },
  { id: "growing", label: "Growing" },
] as const;

/** Union of valid lifestyle ids — keeps neighborhood tags type-safe. */
export type LifestyleId = (typeof lifestyles)[number]["id"];
