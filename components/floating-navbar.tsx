import { useEffect, useState } from "react"
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useLocale } from "@/components/context/use-locale"

const links = [
  { id: "about", pt: "Sobre", en: "About" },
  { id: "experience", pt: "Experiência", en: "Experience" },
  { id: "projects", pt: "Projetos", en: "Projects" },
]

// Adapted from Aceternity UI's Floating Navbar pattern:
// https://ui.aceternity.com/components/floating-navbar
export function FloatingNavbar() {
  const { locale, setLocale } = useLocale()
  const [activeId, setActiveId] = useState("about")
  const [visible, setVisible] = useState(true)
  const { scrollY } = useScroll()
  const reducedMotion = useReducedMotion()
  const english = locale === "en-US"

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    if (Math.abs(current - previous) > 3) setVisible(current < 120 || current < previous)
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveId(entry.target.id)
    }, { rootMargin: "-15% 0px -65% 0px" })
    for (const { id } of links) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header initial={false} animate={{ y: visible ? 0 : -110 }}
      transition={{ duration: reducedMotion ? 0 : 0.25 }}
      onFocusCapture={() => setVisible(true)}
      className="portfolio-header fixed inset-x-0 top-5 z-50 mx-auto w-[calc(100%-2rem)] max-w-3xl">
      <div className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-[#0c1722]/90 p-2 shadow-[0_8px_40px_#0006,inset_0_1px_#ffffff0a] backdrop-blur-xl">
        <a href="#about" aria-label={english ? "Fernando — home" : "Fernando — início"} className="px-3 text-lg font-semibold tracking-tighter">fr<span className="text-steel-blue-300">.</span></a>
        <nav aria-label={english ? "Main navigation" : "Navegação principal"} className="flex items-center gap-1">
          {links.map(({ id, pt, en }) => (
            <a key={id} href={`#${id}`} onClick={() => { setActiveId(id); setVisible(true) }} aria-current={activeId === id ? "location" : undefined}
              className="relative rounded-full px-3 py-2.5 text-xs text-steel-blue-200 transition-colors hover:text-white sm:px-5 sm:text-sm">
              {activeId === id && <motion.span layoutId="nav-pill" transition={{ duration: reducedMotion ? 0 : 0.25 }} className="absolute inset-0 rounded-full bg-white/[0.08]" />}
              <span className="relative">{english ? en : pt}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-3">
          <button type="button" onClick={() => setLocale(english ? "pt-BR" : "en-US")} aria-label={english ? "Mudar para português" : "Switch to English"} className="min-h-10 px-2 text-xs text-steel-blue-200 hover:text-white">{english ? "PT" : "EN"}</button>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-steel-blue-100 px-5 py-2.5 text-sm font-medium text-steel-blue-950 sm:inline-flex">{english ? "Let's talk" : "Vamos conversar"}<ArrowUpRight size={15} /></a>
        </div>
      </div>
    </motion.header>
  )
}
