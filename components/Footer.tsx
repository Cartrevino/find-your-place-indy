import { site } from "@/content/site";

/**
 * Minimal footer for the design-direction phase.
 *
 * Contact values are placeholders from content/site.ts. A fuller footer
 * (social links, service areas, sitemap) is planned for Phase 2 alongside the
 * contact section.
 */
export function Footer() {
  const year = 2026; // static build; update as needed or derive at build time

  return (
    <footer id="contact" className="border-t border-hairline bg-paper">
      <div className="container-editorial grid gap-10 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="font-display text-3xl text-ink md:text-4xl">
            {site.brand}
            <span className="text-red">.</span>
          </p>
          <p className="mt-3 max-w-sm text-grey-600">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end md:text-right">
          <div>
            <p className="eyebrow text-grey-400">Phone</p>
            <a
              href={site.contact.phoneHref}
              data-analytics="contact:phone"
              className="font-display text-2xl text-ink transition-colors hover:text-red"
            >
              {site.contact.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow text-grey-400">Email</p>
            <a
              href={site.contact.emailHref}
              data-analytics="contact:email"
              className="font-display text-2xl text-ink transition-colors hover:text-red"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-editorial flex flex-col gap-2 border-t border-hairline py-6 text-sm text-grey-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.brand}. Serving the Indianapolis metro.
        </p>
        <p>
          Equal Housing Opportunity · REALTOR®
        </p>
      </div>
    </footer>
  );
}
