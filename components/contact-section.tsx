import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"
import { Icons } from "@/components/icons"

const socialLinks = [
  { href: "https://github.com/fernandortec", label: "GitHub", icon: Icons.github },
  { href: "https://www.linkedin.com/in/fernandortec", label: "LinkedIn", icon: Icons.linkedin },
  { href: "https://wa.me/5531993750285", label: "WhatsApp", icon: Icons.whatsapp },
]

const currentYear = new Date().getFullYear()

export function ContactSection({ language = "pt" }: { language?: "pt" | "en" }) {
  const english = language === "en"

  return (
    <footer
      id="contact"
      className="relative z-[1] mx-auto mb-10 grid w-[min(100%_-_2.5rem,_72rem)] grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] items-stretch gap-[clamp(2rem,7vw,6rem)] rounded-[2rem] border border-[rgb(140_178_217_/_16%)] bg-[radial-gradient(ellipse_at_22%_0%,rgb(102_153_204_/_11%),transparent_46%),rgb(9_18_27_/_86%)] p-[clamp(1.5rem,4vw,3rem)] shadow-[inset_0_1px_rgb(255_255_255_/_4%)] max-[700px]:mb-4 max-[700px]:w-[min(100%_-_2rem,_42rem)] max-[700px]:grid-cols-1 max-[700px]:gap-8 max-[700px]:rounded-3xl max-[700px]:p-6"
    >
      <div className="flex flex-col items-start justify-center">
        <p className="mb-[0.9rem] text-[0.68rem] font-[650] tracking-[0.23em] text-steel-blue-300">
          {english ? "LET'S CONNECT" : "VAMOS CONVERSAR"}
        </p>
        <h2 id="contact-heading" className="m-0 text-[clamp(2.4rem,5.5vw,3.8rem)] font-[570] leading-[1.05] tracking-[-0.07em] text-steel-blue-50">
          {english ? "Let's connect" : "Vamos nos conectar"}<span className="text-steel-blue-300">.</span>
        </h2>
        <p className="mt-[1.2rem] max-w-[32rem] text-[clamp(1rem,1.7vw,1.17rem)] leading-[1.7] text-charcoal-300">
          {english
            ? "I'm open to talking about new projects, ideas, and opportunities. If you have something in mind, just reach out."
            : "Estou aberto a conversar sobre novos projetos, ideias e oportunidades. Se você tem algo em mente, é só me chamar."}
        </p>
        <div className="mt-8 flex flex-wrap gap-[0.7rem] max-[420px]:w-full max-[420px]:flex-col max-[420px]:items-stretch">
          <a
            className="inline-flex min-h-[2.8rem] items-center justify-center gap-[0.55rem] rounded-[0.8rem] border border-transparent bg-steel-blue-50 px-4 py-[0.7rem] text-[0.87rem] font-[540] text-steel-blue-950 no-underline transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 hover:bg-steel-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none max-[420px]:w-full"
            href="mailto:fernandorfigueiredotec@gmail.com"
          >
            <Mail size={17} />
            {english ? "Get in touch" : "Entre em contato"}
          </a>
          <a
            className="inline-flex min-h-[2.8rem] items-center justify-center gap-[0.55rem] rounded-[0.8rem] border border-[rgb(140_178_217_/_18%)] px-4 py-[0.7rem] text-[0.87rem] font-[540] text-steel-blue-50 no-underline transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 hover:border-[rgb(140_178_217_/_42%)] hover:bg-[rgb(25_51_77_/_55%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none max-[420px]:w-full"
            href="#projects-heading"
          >
            {english ? "View projects" : "Ver projetos"}
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <div className="flex min-h-60 flex-col items-center justify-center rounded-[1.4rem] border border-[rgb(140_178_217_/_13%)] bg-[linear-gradient(145deg,rgb(17_25_34_/_85%),rgb(9_18_27_/_92%))] p-8 text-center max-[700px]:min-h-52">
        <nav className="flex gap-[0.7rem]">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              className="group relative grid size-11 place-items-center rounded-[0.8rem] border border-[rgb(140_178_217_/_14%)] text-steel-blue-100 transition-[border-color,background-color,color] duration-150 hover:border-[rgb(140_178_217_/_42%)] hover:bg-[rgb(25_51_77_/_55%)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none"
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon width={19} height={19} />
              <ArrowUpRight className="absolute right-[0.35rem] top-[0.35rem] opacity-0 transition-opacity duration-150 group-hover:opacity-80 motion-reduce:transition-none" size={12} />
            </a>
          ))}
          <a
            className="grid size-11 place-items-center rounded-[0.8rem] border border-[rgb(140_178_217_/_14%)] text-steel-blue-100 transition-[border-color,background-color,color] duration-150 hover:border-[rgb(140_178_217_/_42%)] hover:bg-[rgb(25_51_77_/_55%)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none"
            href="mailto:fernandorfigueiredotec@gmail.com"
          >
            <Mail size={18} />
          </a>
        </nav>
        <a
          className="mt-5 text-[0.85rem] text-steel-blue-100 no-underline transition-colors duration-150 hover:text-steel-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none max-[420px]:break-all max-[420px]:text-[0.75rem]"
          href="mailto:fernandorfigueiredotec@gmail.com"
        >
          fernandorfigueiredotec@gmail.com
        </a>
        <p className="mt-4 text-[0.76rem] text-charcoal-300">© {currentYear} Fernando Rodrigues</p>
        <p className="mt-[0.35rem] text-[0.76rem] text-charcoal-500">
          {english ? "Made in Belo Horizonte." : "Feito em Belo Horizonte."}
        </p>
      </div>
    </footer>
  )
}
