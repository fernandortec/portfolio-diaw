import { ArrowDown, Globe2, MapPin } from "lucide-react"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/ui/dock"

const links = [
  { href: "https://github.com/fernandortec", icon: Icons.github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/fernandortec", icon: Icons.linkedin, label: "LinkedIn" },
  { href: "mailto:fernandorfigueiredotec@gmail.com", icon: Icons.email, label: "Enviar e-mail" },
  { href: "https://wa.me/5531993750285", icon: Icons.whatsapp, label: "WhatsApp" },
]

export function AboutMeDock({ language, onLanguageChange }: { language: "pt" | "en"; onLanguageChange: (language: "pt" | "en") => void }) {
  const copy = language === "pt" ? {
    portfolio: "FERNANDO RODRIGUES · PORTFÓLIO",
    title: "Engenheiro de Software Full Stack",
    bio: "Desenvolvo aplicações web e APIs com TypeScript, React e Node.js. Minha experiência inclui sistemas de reservas, pagamentos e integrações bancárias.",
    location: "Belo Horizonte, Brasil",
    email: "Enviar e-mail",
    projects: "Conheça meus projetos",
    links: "Links do Fernando",
  } : {
    portfolio: "FERNANDO RODRIGUES · PORTFOLIO",
    title: "Full Stack Software Engineer",
    bio: "I build web applications and APIs with TypeScript, React, and Node.js. My experience includes booking systems, payments, and banking integrations.",
    location: "Belo Horizonte, Brazil",
    email: "Send email",
    projects: "Explore my projects",
    links: "Fernando's links",
  }
  const localizedLinks = links.map((link) => link.label === "Enviar e-mail" ? { ...link, label: copy.email } : link)
  return (
    <section lang={language === "pt" ? "pt-BR" : "en"} className="relative z-[1] mx-auto flex min-h-[min(52rem,100svh)] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8" aria-labelledby="portfolio-name">
      <div className="language-switcher" role="group" aria-label={language === "pt" ? "Selecionar idioma" : "Choose language"}>
        <Globe2 aria-hidden="true" className="language-globe" />
        {(["en", "pt"] as const).map((option) => (
          <button key={option} type="button" lang={option} aria-pressed={language === option} onClick={() => onLanguageChange(option)}>
            {option.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="max-w-[46rem]">
        <p className="mb-[1.2rem] text-[0.72rem] font-[650] tracking-[0.23em] text-steel-blue-200">{copy.portfolio}</p>
        <h1 id="portfolio-name" className="m-0 text-[clamp(2.7rem,8vw,6.4rem)] font-[620] leading-[1.05] tracking-[-0.055em] text-steel-blue-50 [&_span]:text-steel-blue-200">Fernando Rodrigues<span>.</span></h1>
        <p className="mt-[1.3rem] text-[clamp(1.1rem,2vw,1.4rem)] font-[450] tracking-[-0.02em] text-steel-blue-100">{copy.title}</p>
        <p className="mx-auto mt-[0.85rem] max-w-[34rem] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.75] text-charcoal-300 max-[480px]:max-w-[25rem]">
          {copy.bio}
        </p>
        <p className="mt-[1.05rem] inline-flex items-center gap-[0.4rem] text-[0.86rem] text-charcoal-200"><MapPin aria-hidden="true" className="size-[0.95rem] text-steel-blue-200" /> {copy.location}</p>
      </div>

      <TooltipProvider>
        <nav aria-label={copy.links}>
          <Dock iconSize={48} iconMagnification={56} direction="middle" className="mt-8 border-charcoal-700/70 bg-steel-blue-950/70 shadow-[0_16px_50px_rgb(0_0_0_/_28%),inset_0_1px_rgb(255_255_255_/_6%)]">
            {localizedLinks.map(({ href, icon: Icon, label }) => (
              <DockIcon key={label}>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <a
                        href={href}
                        aria-label={label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "flex size-11 items-center justify-center rounded-full text-steel-blue-100 transition-[color,background-color,transform] duration-[160ms] ease-in-out hover:-translate-y-0.5 hover:bg-steel-blue-800/60 hover:text-steel-blue-200 [&_svg]:size-[1.15rem]"
                        )}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                      />
                    }
                  >
                    <Icon aria-hidden="true" />
                  </TooltipTrigger>
                  <TooltipContent><p>{label}</p></TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </nav>
      </TooltipProvider>
      <a href="#projects" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-steel-blue-200 hover:text-steel-blue-50">
        {copy.projects} <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
