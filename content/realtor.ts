/**
 * Realtor profile content.
 *
 * HOW TO EDIT
 * - Replace every [BRACKETED] placeholder with real, verified information.
 * - `stats` are shown in the "local guide" section. Leave them as placeholders
 *   until the realtor confirms real figures — NEVER fabricate numbers, sales
 *   volume, or years of experience.
 * - `portrait` describes the production headshot that should replace the
 *   labeled placeholder in the RealtorIntro component.
 */

export const realtor = {
  name: "[REALTOR NAME]",
  title: "REALTOR® · Indianapolis Metro",

  /** One-line positioning statement shown as the section headline lead-in. */
  positioning: "A local guide for your next move.",

  /**
   * Short editorial bio. Written to convey personality and local expertise
   * rather than reading like a résumé. Replace with the realtor's real story.
   */
  bio: [
    "I help people find more than an address. I help them find the corner coffee shop they'll go to every Saturday, the tree-lined street they'll want to walk, the community that will still feel like the right fit five years from now.",
    "I've spent years getting to know Indianapolis neighborhood by neighborhood — from downtown lofts to Zionsville front porches — so that when we start looking, we're looking for your life, not just a listing.",
  ],

  /**
   * Credibility metrics. PLACEHOLDERS ONLY.
   * `value` accepts any string so it can hold "[YEARS]" now and "12" later.
   */
  stats: [
    { value: "[YEARS]", label: "Years guiding Indy buyers & sellers" },
    { value: "[CLIENTS]", label: "Families helped home" },
    { value: "[VOLUME]", label: "In closed sales volume" },
  ],

  /** Production portrait to swap in for the placeholder. */
  portrait: {
    /** Descriptive alt text for the real image. */
    alt: "[REALTOR NAME], Indianapolis real estate agent",
    /** Where the production file should live once provided. */
    productionPath: "/images/realtor-portrait.jpg",
  },
} as const;

export type Realtor = typeof realtor;
