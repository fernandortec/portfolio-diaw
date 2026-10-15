import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"
import { Icons } from "@/components/icons"

const socialLinks = [
  {
    href: "https://github.com/fernandortec",
    label: "GitHub",
    icon: (
      <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/fernandortec",
    label: "LinkedIn",
    icon: (
      <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/31993750285",
    label: "WhatsApp",
    icon: <Icons.whatsapp aria-hidden="true" width={19} height={19} />,
  },
]

export function ContactSection() {
  return (
    <footer className="relative z-[1] mx-auto mb-10 grid w-[min(100%_-_2.5rem,_72rem)] grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] items-stretch gap-[clamp(2rem,7vw,6rem)] rounded-[2rem] border border-[rgb(140_178_217_/_16%)] bg-[radial-gradient(ellipse_at_22%_0%,rgb(102_153_204_/_11%),transparent_46%),rgb(9_18_27_/_86%)] p-[clamp(1.5rem,4vw,3rem)] shadow-[inset_0_1px_rgb(255_255_255_/_4%)] max-[700px]:mb-4 max-[700px]:w-[min(100%_-_2rem,_42rem)] max-[700px]:grid-cols-1 max-[700px]:gap-8 max-[700px]:rounded-3xl max-[700px]:p-6" aria-labelledby="contact-heading">
      <div className="flex flex-col items-start justify-center">
        <p className="mb-[0.9rem] text-[0.68rem] font-[650] tracking-[0.23em] text-steel-blue-300">VAMOS CONVERSAR</p>
        <h2 id="contact-heading" className="m-0 text-[clamp(2.4rem,5.5vw,3.8rem)] font-[570] leading-[1.05] tracking-[-0.07em] text-steel-blue-50">Vamos nos conectar<span className="text-steel-blue-300">.</span></h2>
        <p className="mt-[1.2rem] max-w-[32rem] text-[clamp(1rem,1.7vw,1.17rem)] leading-[1.7] text-charcoal-300">
          Estou aberto a conversar sobre novos projetos, ideias e oportunidades.
          Se você tem algo em mente, é só me chamar.
        </p>
        <div className="mt-8 flex flex-wrap gap-[0.7rem] max-[420px]:w-full max-[420px]:flex-col max-[420px]:items-stretch">
          <a className="inline-flex min-h-[2.8rem] items-center justify-center gap-[0.55rem] rounded-[0.8rem] border border-transparent bg-steel-blue-50 px-4 py-[0.7rem] text-[0.87rem] font-[540] text-steel-blue-950 no-underline transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 hover:bg-steel-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none max-[420px]:w-full" href="mailto:fernandorfigueiredotec@gmail.com">
            <Mail aria-hidden="true" size={17} />
            Entre em contato
          </a>
          <a className="inline-flex min-h-[2.8rem] items-center justify-center gap-[0.55rem] rounded-[0.8rem] border border-[rgb(140_178_217_/_18%)] px-4 py-[0.7rem] text-[0.87rem] font-[540] text-steel-blue-50 no-underline transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 hover:border-[rgb(140_178_217_/_42%)] hover:bg-[rgb(25_51_77_/_55%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none max-[420px]:w-full" href="#projects-heading">
            Ver projetos
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>

      <div className="flex min-h-60 flex-col items-center justify-center rounded-[1.4rem] border border-[rgb(140_178_217_/_13%)] bg-[linear-gradient(145deg,rgb(17_25_34_/_85%),rgb(9_18_27_/_92%))] p-8 text-center max-[700px]:min-h-52">
        <div className="flex gap-[0.7rem]" aria-label="Redes sociais">
          {socialLinks.map(({ href, label, icon }) => (
            <a className="group relative grid size-11 place-items-center rounded-[0.8rem] border border-[rgb(140_178_217_/_14%)] text-steel-blue-100 transition-[border-color,background-color,color] duration-150 hover:border-[rgb(140_178_217_/_42%)] hover:bg-[rgb(25_51_77_/_55%)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none" key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
              {icon}
              <ArrowUpRight className="absolute top-[0.35rem] right-[0.35rem] opacity-0 transition-opacity duration-150 group-hover:opacity-80 motion-reduce:transition-none" aria-hidden="true" size={12} />
            </a>
          ))}
          <a className="grid size-11 place-items-center rounded-[0.8rem] border border-[rgb(140_178_217_/_14%)] text-steel-blue-100 transition-[border-color,background-color,color] duration-150 hover:border-[rgb(140_178_217_/_42%)] hover:bg-[rgb(25_51_77_/_55%)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none" href="mailto:fernandorfigueiredotec@gmail.com" aria-label="Enviar e-mail">
            <Mail aria-hidden="true" size={18} />
          </a>
        </div>
        <a className="mt-5 text-[0.85rem] text-steel-blue-100 no-underline transition-colors duration-150 hover:text-steel-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none max-[420px]:break-all max-[420px]:text-[0.75rem]" href="mailto:fernandorfigueiredotec@gmail.com">
          fernandorfigueiredotec@gmail.com
        </a>
        <p className="mt-4 text-[0.76rem] text-charcoal-300">© {new Date().getFullYear()} Fernando Rodrigues</p>
        <p className="mt-[0.35rem] text-[0.76rem] text-charcoal-500">Feito com cuidado, em Belo Horizonte.</p>
      </div>
    </footer>
  )
}
