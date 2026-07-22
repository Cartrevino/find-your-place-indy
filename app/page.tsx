import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { RealtorIntro } from "@/components/RealtorIntro";
import { NeighborhoodExplorer } from "@/components/NeighborhoodExplorer";
import { RevealController } from "@/components/RevealController";

/**
 * Homepage — Phase 1 (design direction).
 *
 * Intentionally a focused subset: the hero, the realtor introduction, and the
 * signature neighborhood explorer, wrapped in the global shell. The remaining
 * sections from the brief (audience selector, lifestyle matcher, "A Day in
 * Indianapolis", process, testimonials, contact form) are planned for Phase 2
 * once this visual language is approved.
 *
 * Section order and composition live here; each section owns its own content.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <RealtorIntro />
        <NeighborhoodExplorer />
      </main>
      <Footer />
      {/* Activates scroll-reveal for [data-reveal] elements across the page. */}
      <RevealController />
    </>
  );
}
