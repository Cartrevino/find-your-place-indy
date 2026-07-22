/**
 * Tiny utilities shared across components.
 */

/**
 * Join class names, dropping falsy values. Keeps JSX readable when toggling
 * conditional classes without pulling in a dependency like `clsx`.
 *
 * @example cn("base", isActive && "active")
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
