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
  { href: "https://fernandortec.me", icon: Globe2, label: "Personal website" },
  { href: "mailto:fernandorfigueiredotec@gmail.com", icon: Icons.email, label: "Email Fernando" },
]

export function AboutMeDock() {
  return (
    <section className="portfolio-intro" aria-labelledby="portfolio-name">
      <div className="portfolio-intro__copy">
        <p className="portfolio-intro__eyebrow">HELLO, I’M FERNANDO</p>
        <h1 id="portfolio-name">Fernando Rodrigues<span>.</span></h1>
        <p className="portfolio-intro__role">Full Stack Developer</p>
        <p className="portfolio-intro__bio">
          I build thoughtful web experiences with TypeScript, React, and Node.js.
          Always learning and exploring what’s next in web development.
        </p>
        <p className="portfolio-intro__location"><MapPin aria-hidden="true" /> Belo Horizonte, Brazil</p>
      </div>

      <TooltipProvider>
        <nav aria-label="Fernando’s links">
          <Dock direction="middle" className="portfolio-dock">
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
                          "portfolio-dock__link"
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
      <p className="portfolio-intro__hint"><span /> TypeScript · React · Node.js</p>
    </section>
  )
}
