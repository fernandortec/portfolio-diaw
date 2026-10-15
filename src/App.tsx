import { AboutMeDock } from "@/components/about-me-dock";
import { ContactSection } from "@/components/contact-section";
import { ExperienceList } from "@/components/experience-list";
import { FloatingNavbar } from "@/components/floating-navbar";
import { ProjectsGrid } from "@/components/projects-grid";
import PatternWaves from "@/components/ui/pattern-waves/index.jsx";
import { useEffect, useState } from "react";

type Language = "pt" | "en";

export function App() {
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem("portfolio-language") === "en" ? "en" : "pt",
  );

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <>
      <a className="skip-link" href="#content">Pular para o conteúdo</a>
      <FloatingNavbar />
      <main id="content" tabIndex={-1}>
        <div className="relative isolate">
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            <PatternWaves
              preset="silk"
              color="#6699cc"
              backgroundColor="#09121b"
              fade="edges"
              fadeSize={0.52}
              opacity={0.3}
              className="h-full w-full"
            />
          </div>
          <AboutMeDock language={language} onLanguageChange={setLanguage} />
        </div>
        <ExperienceList />
        <ProjectsGrid />
      </main>
      <ContactSection />
    </>
  );
}
