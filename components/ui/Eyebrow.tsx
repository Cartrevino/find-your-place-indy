import { cn } from "@/lib/utils";

/**
 * Small uppercase tracked label used above headlines and as editorial captions.
 * Optionally renders a short leading rule for a more "magazine masthead" feel.
 */
export function Eyebrow({
  children,
  withRule = false,
  className,
}: {
  children: React.ReactNode;
  /** Show a short horizontal rule before the text. */
  withRule?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3 text-red", className)}>
      {withRule && <span aria-hidden className="h-px w-8 bg-red" />}
      {children}
    </span>
  );
}
