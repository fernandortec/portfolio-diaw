import { AboutMeDock } from "@/components/ui/about-me-dock";
import PatternWaves from "@/components/ui/pattern-waves/index.jsx";
import type { ReactElement } from "react";

export function App (): ReactElement {
  return (
    <main className="portfolio-shell">
      <AboutMeDock />
      <PatternWaves
        preset="silk"
        color="#b8f5ee"
        backgroundColor="transparent"
        fade="edges"
        fadeSize={0.38}
        opacity={0.85}
        interactive
        cursorSize={70}
        cursorStrength={0.55}
        className="portfolio-waves"
      />
    </main>
  )
}
