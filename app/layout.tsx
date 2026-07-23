import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { site } from "@/content/site";
import { realtor } from "@/content/realtor";
import "./globals.css";

/**
 * Fonts are loaded with next/font so they're self-hosted, preloaded, and free
 * of layout shift. The CSS variables they expose are consumed by the design
 * tokens in globals.css (--font-display / --font-sans).
 *
 * - Playfair Display: the high-contrast Didone display serif for headlines.
 * - Inter: the clean grotesque for body copy and UI.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Site-wide SEO metadata. Update `site.url` (content/site.ts) once the domain is
 * chosen so canonical/OG URLs resolve correctly. Add /public/og-image.jpg for
 * rich link previews.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — Indianapolis Real Estate Guide`,
    template: `%s · ${site.brand}`,
  },
  description:
    "A local guide to buying, selling, and settling into the Indianapolis metro — Carmel, Fishers, Zionsville, Broad Ripple, Fountain Square, and beyond. Find the neighborhood that fits your life.",
  keywords: [
    "Indianapolis realtor",
    "Indianapolis real estate agent",
    "Carmel realtor",
    "Fishers realtor",
    "Zionsville realtor",
    "moving to Indianapolis",
    "buying a home in Indianapolis",
    "selling a home in Indianapolis",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — Indianapolis Real Estate Guide`,
    description:
      "More than a house — the neighborhood, community, and place that fits your life. A local guide to the Indianapolis metro.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — Indianapolis Real Estate Guide`,
    description:
      "A local guide to buying, selling, and settling into the Indianapolis metro.",
  },
  robots: { index: true, follow: true },
};

/**
 * RealEstateAgent structured data for local SEO. Values referencing the realtor
 * or contact are placeholders until confirmed — replace before launch.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: realtor.name,
  description: "Indianapolis metro real estate guide.",
  areaServed: "Indianapolis Metropolitan Area, Indiana",
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the inline script in <body> adds a `js` class to
    // <html> before hydration — an intentional server/client mismatch scoped to
    // this element only.
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/*
         * Add a `js` class synchronously, before the body paints, so the
         * scroll-reveal hidden-state only applies when JavaScript is available.
         * Without JS (or before hydration) all content renders visible.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD is static, trusted content — safe to inject.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
