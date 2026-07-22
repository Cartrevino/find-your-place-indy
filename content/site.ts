/**
 * Site-wide content: brand, navigation, calls-to-action, and metadata.
 *
 * HOW TO EDIT
 * - Change the brand line, nav links, or CTAs here and every component updates.
 * - Anchor links (starting with "#") scroll to a section id on the homepage.
 * - `contact` values are PLACEHOLDERS. Replace the bracketed text with real
 *   details before launch. Do not invent business facts.
 */

export const site = {
  /** The brand idea. Used in the wordmark and document titles. */
  brand: "Find Your Place",
  tagline: "An Indianapolis real estate guide",

  /** Primary navigation. `href` may be an anchor (#id) or a route (/path). */
  nav: [
    { label: "Neighborhoods", href: "#neighborhoods" },
    { label: "Your Guide", href: "#guide" },
    { label: "Contact", href: "#contact" },
  ],

  /** The persistent header call-to-action. */
  headerCta: { label: "Let's Talk", href: "#contact" },

  /**
   * The four "paths" offered in the hero. These are intentionally framed as
   * helpful directions, not aggressive sales funnels. `href` currently points
   * to the contact anchor; in Phase 2 these can route to dedicated pages.
   */
  paths: [
    { id: "buying", label: "I'm Buying", href: "#contact" },
    { id: "selling", label: "I'm Selling", href: "#contact" },
    { id: "moving", label: "I'm Moving to Indy", href: "#contact" },
    { id: "exploring", label: "I'm Just Exploring", href: "#neighborhoods" },
  ],

  /** Contact details — PLACEHOLDERS until confirmed by the realtor. */
  contact: {
    phone: "[PHONE NUMBER]",
    email: "[EMAIL ADDRESS]",
    /** Machine-readable versions for tel:/mailto: links. */
    phoneHref: "tel:+10000000000",
    emailHref: "mailto:hello@example.com",
  },

  /** Canonical production URL — update when the domain is chosen. */
  url: "https://findyourplace.example.com",
} as const;

export type Site = typeof site;
