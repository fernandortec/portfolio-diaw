import { Globe2, MapPin } from "lucide-react"
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
  { href: "https://fernandortec.me", icon: Globe2, label: "Meu site" },
  { href: "mailto:fernandorfigueiredotec@gmail.com", icon: Icons.email, label: "Enviar e-mail" },
]

export function AboutMeDock() {
  return (
    <section className="relative z-[1] flex min-h-svh flex-col items-center justify-center px-5 py-8 text-center max-[480px]:px-4 max-[480px]:py-6" aria-labelledby="portfolio-name">
      <div className="max-w-[46rem]">
        <p className="mb-[1.2rem] text-[0.72rem] font-[650] tracking-[0.23em] text-steel-blue-200">OLÁ, EU SOU O FERNANDO</p>
        <h1 id="portfolio-name" className="m-0 text-[clamp(2.7rem,8vw,6.4rem)] font-[620] leading-[0.98] tracking-[-0.075em] text-steel-blue-50 [&_span]:text-steel-blue-200">Fernando Rodrigues<span>.</span></h1>
        <p className="mt-[1.3rem] text-[clamp(1.1rem,2vw,1.4rem)] font-[450] tracking-[-0.02em] text-steel-blue-100">Engenheiro de Software Fullstack</p>
        <p className="mx-auto mt-[0.85rem] max-w-[34rem] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.75] text-charcoal-300 max-[480px]:max-w-[25rem]">
          Construo produtos digitais com TypeScript, React e Node.js, contribuindo
          também para decisões de arquitetura e soluções que geram impacto.
        </p>
        <p className="mt-[1.05rem] inline-flex items-center gap-[0.4rem] text-[0.86rem] text-charcoal-200"><MapPin aria-hidden="true" className="size-[0.95rem] text-steel-blue-200" /> Belo Horizonte, Brasil</p>
      </div>

      <TooltipProvider>
        <nav aria-label="Links do Fernando">
          <Dock direction="middle" className="mt-8 border-charcoal-700/70 bg-steel-blue-950/70 shadow-[0_16px_50px_rgb(0_0_0_/_28%),inset_0_1px_rgb(255_255_255_/_6%)]">
            {links.map(({ href, icon: Icon, label }) => (
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
      <p className="mt-[1.35rem] inline-flex items-center gap-[0.55rem] text-[0.76rem] text-charcoal-400"><span className="size-[0.45rem] rounded-full bg-steel-blue-300 shadow-[0_0_12px_rgb(140_178_217_/_70%)]" /> TypeScript · React · Node.js</p>
    </section>
  )
}
