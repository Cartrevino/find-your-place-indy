import type { LifestyleId } from "./lifestyles";

/**
 * Indianapolis-area neighborhoods featured in the Neighborhood Explorer.
 *
 * IMPORTANT
 * - This is an editorial guide, not a listing directory, and it is NOT meant to
 *   imply these are the only areas served. The `note` in NeighborhoodExplorer
 *   makes that explicit to visitors.
 * - Descriptions aim to be warm and specific without leaning on stereotypes or
 *   unverifiable claims. Refine copy freely.
 *
 * HOW TO ADD A NEIGHBORHOOD
 * 1. Copy an entry below and give it a unique `id` (kebab-case).
 * 2. Set `descriptors` to three short lifestyle words (shown under the name).
 * 3. Set `tags` to any ids from lifestyles.ts — these drive the filter chips.
 * 4. Optionally set `feature: true` to give it the large editorial slot.
 * 5. Update `image.alt` / `image.productionPath` for the real photo.
 *
 * The first entry with `feature: true` is rendered large on desktop.
 */

export interface Neighborhood {
  id: string;
  name: string;
  /** Three punchy lifestyle words shown beneath the name, e.g. "Eclectic. Walkable. Creative." */
  descriptors: [string, string, string];
  /** One or two sentences of editorial description. */
  blurb: string;
  /** Lifestyle ids this neighborhood matches (see lifestyles.ts). */
  tags: LifestyleId[];
  /** When true, eligible for the large feature slot in the desktop layout. */
  feature?: boolean;
  image: {
    alt: string;
    /** Where the production photograph should be placed. */
    productionPath: string;
  };
}

export const neighborhoods: Neighborhood[] = [
  {
    id: "fountain-square",
    name: "Fountain Square",
    descriptors: ["Eclectic", "Walkable", "Creative"],
    blurb:
      "A historic district reborn as one of the city's most characterful corners — murals, music venues, vintage bowling, and dinner a short stroll from the front door.",
    tags: ["walkable", "creative", "urban"],
    feature: true,
    image: {
      alt: "A street scene in Fountain Square, Indianapolis",
      productionPath: "/images/neighborhoods/fountain-square.jpg",
    },
  },
  {
    id: "carmel",
    name: "Carmel",
    descriptors: ["Polished", "Family-Friendly", "Connected"],
    blurb:
      "Known for its roundabouts, the Arts & Design District, and the Monon Trail — a suburb that invests heavily in walkable public spaces.",
    tags: ["family", "connected", "walkable"],
    image: {
      alt: "The Arts & Design District in Carmel, Indiana",
      productionPath: "/images/neighborhoods/carmel.jpg",
    },
  },
  {
    id: "broad-ripple",
    name: "Broad Ripple",
    descriptors: ["Relaxed", "Social", "Active"],
    blurb:
      "Canal paths and the Monon Trail meet a lively village of cafés, galleries, and patios — easygoing during the day, sociable after dark.",
    tags: ["walkable", "creative", "connected"],
    image: {
      alt: "The canal and village area of Broad Ripple, Indianapolis",
      productionPath: "/images/neighborhoods/broad-ripple.jpg",
    },
  },
  {
    id: "downtown",
    name: "Downtown",
    descriptors: ["Urban", "Central", "Alive"],
    blurb:
      "Loft living beside the Cultural Trail, the canal, and the stadiums — everything within reach for people who want to live in the middle of it.",
    tags: ["urban", "walkable", "connected"],
    image: {
      alt: "The downtown Indianapolis skyline",
      productionPath: "/images/neighborhoods/downtown.jpg",
    },
  },
  {
    id: "mass-ave",
    name: "Mass Ave",
    descriptors: ["Artful", "Vibrant", "Walkable"],
    blurb:
      "A diagonal cut of theaters, independent shops, and restaurants — the city's arts spine, dense and endlessly walkable.",
    tags: ["urban", "creative", "walkable"],
    image: {
      alt: "The Massachusetts Avenue arts district in Indianapolis",
      productionPath: "/images/neighborhoods/mass-ave.jpg",
    },
  },
  {
    id: "zionsville",
    name: "Zionsville",
    descriptors: ["Charming", "Quiet", "Historic"],
    blurb:
      "A brick-paved Main Street, mature trees, and small-town calm within easy reach of the city — storybook without feeling far away.",
    tags: ["quiet", "family", "walkable"],
    image: {
      alt: "The brick Main Street of Zionsville, Indiana",
      productionPath: "/images/neighborhoods/zionsville.jpg",
    },
  },
  {
    id: "fishers",
    name: "Fishers",
    descriptors: ["Modern", "Growing", "Family-Friendly"],
    blurb:
      "A fast-growing community with a reinvented downtown, ample parks, and room for young families to settle in and grow.",
    tags: ["family", "growing", "connected"],
    image: {
      alt: "The Nickel Plate District in downtown Fishers, Indiana",
      productionPath: "/images/neighborhoods/fishers.jpg",
    },
  },
  {
    id: "westfield",
    name: "Westfield",
    descriptors: ["Open", "Growing", "Active"],
    blurb:
      "Home to Grand Park and a wave of new development — space to spread out with amenities catching up quickly.",
    tags: ["growing", "family", "quiet"],
    image: {
      alt: "A park and open space in Westfield, Indiana",
      productionPath: "/images/neighborhoods/westfield.jpg",
    },
  },
  {
    id: "geist",
    name: "Geist",
    descriptors: ["Serene", "Scenic", "Spacious"],
    blurb:
      "Life along the reservoir — water views, boating, and breathing room for those who want the quiet side of the metro.",
    tags: ["quiet", "family"],
    image: {
      alt: "The Geist Reservoir waterfront near Indianapolis",
      productionPath: "/images/neighborhoods/geist.jpg",
    },
  },
];
