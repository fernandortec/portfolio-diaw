import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { useLocale } from "@/components/context/use-locale"


const links = [
  { id: "experience", label: { "pt-BR": "Experiência", "en-US": "Experience" } },
  { id: "projects", label: { "pt-BR": "Projetos", "en-US": "Projects" } },
  { id: "contact", label: { "pt-BR": "Contato", "en-US": "Contact" }, contact: true },
]

export function FloatingNavbar() {
  const { locale } = useLocale()
  const [activeId, setActiveId] = useState("experience")

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) setActiveId(visibleSection.target.id)
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="floating-navbar sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="floating-navbar__shell mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/[0.09] bg-steel-blue-950/85 px-4 shadow-[0_12px_36px_rgb(0_0_0_/_22%),inset_0_1px_rgb(255_255_255_/_5%)] backdrop-blur-xl sm:px-6">
        <a
          href="#"
          className="shrink-0 text-base font-semibold tracking-[-0.06em] text-steel-blue-50 transition-colors hover:text-steel-blue-200"
        >
          FR<span className="text-steel-blue-300">.</span>
        </a>

        <nav
          className="primary-nav"
        >
          <ul className="primary-nav__list">
            {links.map(({ id, label, contact }) => (
              <li className="primary-nav__item" key={id}>
                <a
                  href={`#${id}`}
                  className={`primary-nav__link${contact ? " primary-nav__link--contact" : ""}`}
                  onClick={() => setActiveId(id)}
                >
                  {label[locale]}
                  {contact && <ArrowUpRight className="size-3.5" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
