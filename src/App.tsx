import { AboutMeDock } from "@/components/about-me-dock";
import { ProjectsGrid } from "@/components/projects-grid";
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
        fade="none"
        opacity={0.85}
        interactive
        cursorSize={70}
        cursorStrength={0.55}
        className="portfolio-waves"
      />
      <ProjectsGrid />
    </main>
  )
}
