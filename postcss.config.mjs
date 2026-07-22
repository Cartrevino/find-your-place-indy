/**
 * PostCSS config for Tailwind CSS v4.
 * Tailwind v4 runs entirely through its PostCSS plugin; design tokens live in
 * app/globals.css under the `@theme` block rather than a tailwind.config file.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
