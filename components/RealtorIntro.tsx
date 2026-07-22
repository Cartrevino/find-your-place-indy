import { realtor } from "@/content/realtor";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

/**
 * RealtorIntro — "A local guide for your next move."
 *
 * Asymmetric editorial layout: the portrait occupies a narrower column offset
 * against a wide text column, with a hairline stat row beneath. Framed as a
 * personal story rather than a résumé. All credibility figures are placeholders
 * (see content/realtor.ts) — nothing is fabricated.
 */
export function RealtorIntro() {
  return (
    <section
      id="guide"
      className="border-t border-hairline bg-surface py-20 md:py-28"
      aria-labelledby="guide-heading"
    >
      <div className="container-editorial grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Portrait */}
        <div data-reveal className="md:col-span-5 md:col-start-1">
          <div className="aspect-[4/5] w-full max-w-md">
            <PlaceholderImage
              label={`Natural, professional portrait of ${realtor.name} — approachable, on location in Indianapolis`}
              productionPath={realtor.portrait.productionPath}
              tone="grey"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-7 md:pt-6">
          <div data-reveal>
            <Eyebrow withRule>Your Guide</Eyebrow>
            <h2
              id="guide-heading"
              className="mt-5 max-w-xl font-display text-4xl leading-[1.05] text-ink md:text-6xl"
            >
              {realtor.positioning}
            </h2>
          </div>

          <div data-reveal className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-grey-600">
            {realtor.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <p data-reveal className="mt-8 font-display text-xl text-ink">
            {realtor.name}
            <span className="mt-1 block font-sans text-sm font-medium uppercase tracking-widest text-grey-400">
              {realtor.title}
            </span>
          </p>

          {/* Credibility stat row — placeholders until confirmed */}
          <dl
            data-reveal
            className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3"
          >
            {realtor.stats.map((stat) => (
              <div key={stat.label} className="bg-surface p-6">
                <dt className="font-display text-4xl text-red md:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-grey-600">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
