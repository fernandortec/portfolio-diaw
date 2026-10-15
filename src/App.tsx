import { AboutMeDock } from "@/components/about-me-dock";
import { ProjectsGrid } from "@/components/projects-grid";
import { ExperienceList } from "@/components/experience-list";
import { ContactSection } from "@/components/contact-section";
import PatternWaves from "@/components/ui/pattern-waves/index.jsx";
import type { ReactElement } from "react";

export function App (): ReactElement {
  return (
    <main className="relative isolate min-h-svh">
      <AboutMeDock />
      <PatternWaves
        preset="silk"
        color="#6699cc"
        backgroundColor="#09121b"
        fade="center"
        fadeSize={0.52}
        opacity={0.5}
        interactive
        cursorSize={70}
        cursorStrength={0.55}
        className="fixed inset-0 z-0 h-dvh w-screen pointer-events-none"
      />
      <ExperienceList />
      <ProjectsGrid />
      <ContactSection />
    </main>
  )
}
