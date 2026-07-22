import { site } from "@/content/site";
import { realtor } from "@/content/realtor";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PathLink } from "@/components/ui/PathLink";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

/**
 * Hero — the editorial masthead.
 *
 * Composition (desktop): a magazine-style split. An oversized Didone headline
 * ("Find Your Place.") sits on the left and layers slightly over a tall
 * Indianapolis image on the right, so type and city feel woven together rather
 * than stacked. A thin masthead rule up top carries the section label and a
 * subtle credit to the realtor — she's present as the guide, not a giant headshot.
 *
 * On mobile the layers unstack into a clean vertical rhythm: label → headline →
 * image → supporting copy → paths.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="container-editorial">
        {/* Masthead rule. The realtor credit lives under the image (below) so
            the rising hero image can bleed up over this rule without collision. */}
        <div
          className="rise flex items-center justify-between border-b border-hairline pb-4"
          style={{ animationDelay: "0.05s" }}
        >
          <Eyebrow withRule>Indianapolis Real Estate</Eyebrow>
        </div>

        {/* Headline + image, layered on desktop */}
        <div className="relative grid gap-8 pt-8 md:grid-cols-12 md:gap-0 md:pt-12">
          {/* Headline block */}
          <div className="relative z-10 md:col-span-7 md:pt-6">
            <h1
              id="hero-heading"
              className="rise font-display font-normal leading-[0.92] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", animationDelay: "0.12s" }}
            >
              Find
              <br />
              Your{" "}
              <span className="italic text-red">Place</span>
              <span className="text-red">.</span>
            </h1>
          </div>

          {/* Image — sits in the right columns and rises toward the masthead for
              an asymmetric, layered feel WITHOUT covering the headline (which
              would push the red "Place" onto a dark ground and kill contrast). */}
          <div
            className="rise md:col-span-5 md:-mt-20 md:self-start md:pl-10 lg:pl-14"
            style={{ animationDelay: "0.22s" }}
          >
            <div className="aspect-[4/5] w-full">
              <PlaceholderImage
                label="Indianapolis skyline or a characterful neighborhood street — the emotional anchor of the hero"
                productionPath="/images/hero-indianapolis.jpg"
                tone="ink"
              />
            </div>
            {/* Photo-credit-style caption doubling as the realtor credit. */}
            <p className="mt-3 flex items-center justify-between text-sm text-grey-400">
              <span>
                Guided by <span className="text-ink">{realtor.name}</span>
              </span>
              <span>Indianapolis, Indiana</span>
            </p>
          </div>
        </div>

        {/* Supporting copy + paths */}
        <div className="grid gap-10 border-t border-hairline pt-8 pb-16 md:grid-cols-12 md:pb-24">
          <p
            className="rise max-w-md font-display text-2xl leading-snug text-ink md:col-span-6 md:text-3xl"
            style={{ animationDelay: "0.3s" }}
          >
            Real estate is more than a house. It&apos;s the neighborhood, the
            community, and the place that finally feels like&nbsp;yours.
          </p>

          <div
            className="rise md:col-span-6 md:pl-8 lg:pl-16"
            style={{ animationDelay: "0.38s" }}
          >
            <p className="eyebrow text-grey-400">Where should we begin?</p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
              {site.paths.map((path) => (
                <PathLink
                  key={path.id}
                  id={path.id}
                  label={path.label}
                  href={path.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
