# Find Your Place — Indianapolis Real Estate

An editorial, magazine-style marketing site for an Indianapolis-area realtor,
built around a single idea: **buying or selling a home is really about finding
the neighborhood, community, and place where you belong.**

This is intentionally *not* a Zillow-style listings template. It reads like a
local lifestyle guide with a strong personal brand.

> **Status: Phase 1 — Design Direction.** This build establishes the visual
> language and the homepage's signature sections (hero, realtor introduction,
> and the neighborhood explorer) for review before the remaining sections are
> added. See [Roadmap](#roadmap--future-enhancements).

---

## Table of contents

1. [Design philosophy](#design-philosophy)
2. [Tech stack](#tech-stack)
3. [Local development](#local-development)
4. [Build & production](#build--production)
5. [Deployment](#deployment)
6. [Environment variables](#environment-variables)
7. [Project structure](#project-structure)
8. [Editing content](#editing-content)
   - [Realtor information](#update-realtor-information)
   - [Neighborhoods](#update-neighborhood-content)
   - [Lifestyle filters](#how-the-lifestyle-system-works)
   - [Contact info & CTAs](#update-contact-info--ctas)
   - [Replacing placeholder images](#replace-placeholder-images)
9. [Analytics](#analytics)
10. [Accessibility](#accessibility)
11. [Performance](#performance)
12. [Roadmap / future enhancements](#roadmap--future-enhancements)
13. [What we still need from you](#what-we-still-need-from-you)

---

## Design philosophy

- **Editorial, not corporate.** High-contrast Didone headlines
  (Playfair Display) paired with a clean grotesque (Inter), generous
  whitespace, hairline rules, and asymmetric grids.
- **A distinctive palette:** white / red / black / grey. A single decisive red
  accent (`#c1121f`) is used sparingly for emphasis — deliberately avoiding the
  beige-and-gold realtor cliché.
- **Indianapolis is a character**, not a backdrop. The neighborhood explorer is
  the signature section and treats the city as a lifestyle guide.
- **The realtor is a guide, not a billboard.** She is introduced with warmth and
  local expertise rather than a résumé or a giant headshot.
- **Progressive, welcoming paths.** Visitors choose where to begin
  (Buying / Selling / Moving / Just Exploring) — helpful directions, not a
  hard-sell funnel.

## Tech stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | [Next.js 15](https://nextjs.org) (App Router)      |
| Language       | TypeScript                                         |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` tokens) |
| Fonts          | `next/font` — Playfair Display + Inter (self-hosted) |
| Rendering      | Static (fully prerendered marketing pages)         |
| Hosting        | Vercel / Netlify / Cloudflare Pages (any static host) |

No database, CMS, auth, or backend — this is a static marketing site by design.

## Local development

**Prerequisites:** Node.js 18.18+ (built and tested on Node 24) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build locally
npm run lint       # ESLint (next/core-web-vitals + typescript)
npm run typecheck  # tsc --noEmit
```

## Build & production

```bash
npm run build
npm run start   # or deploy the output — see below
```

- **Build command:** `npm run build`
- **Output:** `.next/` (managed by the host adapter; no manual output dir needed
  on Vercel/Netlify)

## Deployment

The site is a standard Next.js app and deploys with zero configuration on
**Vercel** (recommended, first-class Next.js support):

1. Push this repo to GitHub (already set up).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js**. Build command and output are auto-detected.
4. Add any [environment variables](#environment-variables) (none required yet).
5. Deploy. HTTPS and a preview URL are provisioned automatically.

To use a custom domain, add it in the host's dashboard and update
`site.url` in [`content/site.ts`](content/site.ts) so canonical/OpenGraph URLs
resolve correctly.

> Netlify and Cloudflare Pages also work; both auto-detect Next.js. A fuller
> deployment guide (with domain + analytics wiring) lands with Phase 2.

## Environment variables

None are required today. When the contact form and analytics are wired up in
Phase 2, add keys via an `.env.local` (git-ignored) and the host's dashboard —
`.env*` files are already git-ignored, and `.env.example` will document the keys.
**Never commit private API keys.**

## Project structure

```
app/
  layout.tsx        # <html>, fonts, SEO metadata, JSON-LD, skip link
  page.tsx          # homepage — composes the sections in order
  globals.css       # design tokens (@theme) + base styles + motion
components/
  Header.tsx        # wordmark, nav, "Let's Talk" CTA, mobile menu
  Footer.tsx        # minimal footer w/ placeholder contact (id="contact")
  Hero.tsx          # editorial masthead
  RealtorIntro.tsx  # "A local guide for your next move"
  NeighborhoodExplorer.tsx  # signature filterable "Find Your Indy" section
  RevealController.tsx      # activates scroll-reveal page-wide
  ui/
    Eyebrow.tsx         # small uppercase tracked label
    PlaceholderImage.tsx# labeled image placeholder (see below)
    PathLink.tsx        # hero "path" link with analytics hook
content/            # ALL editable copy/data lives here
  site.ts           # brand, nav, CTAs, contact, canonical URL
  realtor.ts        # name, bio, credibility stats, portrait
  neighborhoods.ts  # the neighborhood guide data
  lifestyles.ts     # lifestyle filter categories
lib/
  analytics.ts      # vendor-agnostic track() integration point
  useReveal.ts      # IntersectionObserver scroll-reveal hook
  utils.ts          # cn() classname helper
```

**Content is separated from presentation:** to change what the site *says*, edit
`content/*`. To change how it *looks*, edit `components/*` and `globals.css`.

## Editing content

### Update realtor information

Edit [`content/realtor.ts`](content/realtor.ts). Replace every `[BRACKETED]`
placeholder with real, verified details. The credibility figures
(`stats`) are placeholders on purpose — **do not invent** years of experience,
client counts, or sales volume; fill them in only once confirmed.

### Update neighborhood content

Edit [`content/neighborhoods.ts`](content/neighborhoods.ts). To **add a
neighborhood**, copy an entry and set:

- `id` — unique kebab-case slug
- `name`, `descriptors` (three lifestyle words), `blurb`
- `tags` — one or more lifestyle ids from `lifestyles.ts` (drives filtering)
- `feature: true` (optional) — gives it the large editorial slot
- `image.alt` / `image.productionPath` — for the real photo

The list is presented as a curated guide and explicitly *not* an exhaustive list
of areas served.

### How the lifestyle system works

The filter chips in the Neighborhood Explorer come from
[`content/lifestyles.ts`](content/lifestyles.ts). Each neighborhood declares
which lifestyle `tags` it matches. Selecting a chip filters the grid to
neighborhoods carrying that tag — a simple, curated mapping (no recommendation
engine). To add a filter: add an entry in `lifestyles.ts`, then add its `id` to
the relevant neighborhoods' `tags`. The chip and filtering appear automatically.

### Update contact info & CTAs

Edit [`content/site.ts`](content/site.ts):

- `contact` — phone/email display text **and** the `tel:`/`mailto:` hrefs
- `headerCta` / `paths` / `nav` — labels and destinations
- `url` — the canonical production domain

### Replace placeholder images

The site ships with **no production photography** to avoid generic stock. Every
image slot renders [`PlaceholderImage`](components/ui/PlaceholderImage.tsx),
which displays the intended shot and the exact path where the file belongs
(e.g. `/images/hero-indianapolis.jpg`). To swap in a real photo:

1. Add the file under `public/` at the `productionPath` shown on the placeholder.
2. Replace the `<PlaceholderImage />` at that call site with a
   [`next/image`](https://nextjs.org/docs/app/api-reference/components/image)
   `<Image>` (keep the descriptive alt text).

Image slots to fill: hero (`Hero.tsx`), realtor portrait (`RealtorIntro.tsx`),
and one per neighborhood (`neighborhoods.ts`).

## Analytics

No vendor is hard-coded. Interactions call `track()` in
[`lib/analytics.ts`](lib/analytics.ts) (a no-op that logs in dev) and CTAs carry
`data-analytics` attributes. To connect Plausible / GA4 / PostHog / Vercel
Analytics, implement the body of `track()` — nothing else changes. Events already
wired: `cta_click`, `path_select`, `neighborhood_filter`.

## Accessibility

- Semantic landmarks, a single `<h1>`, and ordered headings
- "Skip to content" link; visible red focus rings site-wide
- Mobile menu and filter chips are keyboard-operable (`aria-expanded`,
  `aria-pressed`); Escape closes the menu
- Live region announces neighborhood result counts
- `prefers-reduced-motion` disables all entrance/scroll animation
- Content is visible without JavaScript (the reveal hidden-state is JS-gated)

## Performance

- Static prerendering; minimal client JS (only the header menu, filter, and
  reveal hook are interactive)
- Self-hosted fonts via `next/font` (no layout shift, no external requests)
- The hero (LCP) uses a CSS-only entrance animation and never waits on JS
- Production images should be added as `next/image` for automatic sizing/lazy
  loading

## Roadmap / future enhancements

Planned for **Phase 2** (after this design direction is approved):

- "What brings you here?" audience selector
- Lifestyle matcher ("What's your kind of place?")
- "A Day in Indianapolis" editorial timeline
- Process ("We Talk / We Explore / We Move")
- Testimonials (real, or clearly-labeled placeholders)
- Full contact section with a working form (Formspree/Resend) + spam protection
- Expanded footer (service areas, social links)
- Per-neighborhood detail pages (the "Explore" affordance becomes a link)
- Deployment + analytics fully wired

## What we still need from you

To move from placeholders to launch:

- Realtor name, title, bio, and **verified** stats
- Phone, email, and preferred contact method
- Professional portrait + Indianapolis/neighborhood photography
- Confirmed list of areas actually served
- 3–5 real testimonials (with permission)
- Chosen domain name and analytics provider
- Contact form destination (email service)

---

Built with Next.js. Equal Housing Opportunity.
