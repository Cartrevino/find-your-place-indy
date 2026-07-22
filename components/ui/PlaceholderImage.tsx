import { cn } from "@/lib/utils";

/**
 * Labeled image placeholder.
 *
 * The site ships without production photography. Rather than pulling in generic
 * stock (which would undercut the "authentic Indianapolis" brand), every image
 * slot renders this component: a tasteful graphic block that clearly states what
 * production photo belongs there and where the file should live.
 *
 * TO REPLACE WITH A REAL PHOTO
 * - Drop the file at the `productionPath` shown on the placeholder (under /public).
 * - Swap this component for a `next/image` <Image> at the same call site.
 * - Keep the descriptive `label`/alt text so the image stays accessible.
 */
export function PlaceholderImage({
  label,
  productionPath,
  className,
  tone = "ink",
}: {
  /** Human description of the intended production image (also acts as alt). */
  label: string;
  /** Where the real file should be placed under /public. */
  productionPath?: string;
  className?: string;
  /** Visual tone of the placeholder block. */
  tone?: "ink" | "grey" | "red";
}) {
  const tones = {
    ink: "bg-ink text-paper",
    grey: "bg-hairline text-grey-600",
    red: "bg-red text-paper",
  } as const;

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden p-5",
        tones[tone],
        className,
      )}
    >
      {/* Subtle diagonal hatch so the block reads as "placeholder", not a design element. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 11px)",
        }}
      />
      <span className="eyebrow relative opacity-80">Production image</span>
      <span className="relative max-w-[28ch] font-display text-lg leading-snug">
        {label}
      </span>
      {productionPath && (
        <span className="relative font-mono text-[0.7rem] opacity-70">
          {productionPath}
        </span>
      )}
    </div>
  );
}
