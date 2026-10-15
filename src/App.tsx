import { AboutMeDock } from "@/components/about-me-dock";
import { ContactSection } from "@/components/contact-section";
import { LocaleProvider } from "@/components/context/locale-provider";
import { ExperienceList } from "@/components/experience-list";
import { FloatingNavbar } from "@/components/floating-navbar";
import { ProjectsGrid } from "@/components/projects-grid";
import PatternWaves from "@/components/ui/pattern-waves/index.jsx";


export function App() {
  return (
    <LocaleProvider>
      <div className="relative isolate min-h-screen">
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <PatternWaves
            preset="silk"
            color="#6699cc"
            backgroundColor="#09121b"
            fade="edges"
            fadeSize={0.42}
            opacity={0.3}
            className="h-full w-full"
          />
        </div>
        <a className="skip-link" href="#content">Pular para o conteúdo</a>
        <div className="relative z-10">
          <FloatingNavbar />
          <main id="content" tabIndex={-1}>
            <AboutMeDock  />
            <ExperienceList />
            <ProjectsGrid />
          </main>
          <ContactSection />
        </div>
      </div>
    </LocaleProvider>
  );
}
