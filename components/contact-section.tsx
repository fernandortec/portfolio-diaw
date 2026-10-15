import { useLocale } from "@/components/context/use-locale"
import { Icons } from "@/components/icons"
import { ArrowRight, ArrowUpRight, Send } from "lucide-react"
import { useState, type SubmitEvent } from "react"

const socialLinks = [
  { href: "https://github.com/fernandortec", label: "GitHub", icon: Icons.github },
  { href: "https://www.linkedin.com/in/fernandortec", label: "LinkedIn", icon: Icons.linkedin },
  { href: "https://wa.me/5531993750285", label: "WhatsApp", icon: Icons.whatsapp },
]

const currentYear = new Date().getFullYear()

export function ContactSection() {
  const { locale } = useLocale()
  const english = locale === "en-US"
  const [status, setStatus] = useState<"idle" | "ready">("idle")

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()
    const subject = english ? `Portfolio contact from ${name}` : `Contato pelo portfólio: ${name}`
    const body = english
      ? `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      : `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`

    window.location.href = `mailto:fernandorfigueiredotec@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus("ready")
  }

  return (
    <footer
      id="contact"
      className="relative z-[1] mx-auto mb-10 grid w-[min(100%_-_2.5rem,_72rem)] grid-cols-[minmax(0,0.85fr)_minmax(20rem,1.15fr)] items-stretch gap-[clamp(2rem,7vw,6rem)] rounded-[2rem] border border-[rgb(140_178_217_/_16%)] bg-[radial-gradient(ellipse_at_22%_0%,rgb(102_153_204_/_11%),transparent_46%),rgb(9_18_27_/_86%)] p-[clamp(1.5rem,4vw,3rem)] shadow-[inset_0_1px_rgb(255_255_255_/_4%)] max-[700px]:mb-4 max-[700px]:w-[min(100%_-_2rem,_42rem)] max-[700px]:grid-cols-1 max-[700px]:gap-8 max-[700px]:rounded-3xl max-[700px]:p-6"
    >
      <div className="flex flex-col items-start justify-center">
        <p className="mb-[0.9rem] text-[0.68rem] font-[650] tracking-[0.23em] text-steel-blue-300">
          {english ? "LET'S CONNECT" : "VAMOS CONVERSAR"}
        </p>
        <h2 id="contact-heading" className="m-0 text-[clamp(2.4rem,5.5vw,3.8rem)] font-[570] leading-[1.05] tracking-[-0.07em] text-steel-blue-50">
          {english ? "Contact" : "Contato"}{english && <span className="text-steel-blue-300">.</span>}
        </h2>
        <p className="mt-[1.2rem] max-w-[32rem] text-[clamp(1rem,1.7vw,1.17rem)] leading-[1.7] text-charcoal-300">
          {english
            ? "For project inquiries or job opportunities, contact me by email, LinkedIn, or WhatsApp."
            : "Para conversar sobre projetos ou oportunidades de trabalho, entre em contato por e-mail, LinkedIn ou WhatsApp."}
        </p>
        <div className="mt-8 flex flex-wrap gap-[0.7rem] max-[420px]:w-full max-[420px]:flex-col max-[420px]:items-stretch">
          <a
            className="inline-flex min-h-[2.8rem] items-center justify-center gap-[0.55rem] rounded-[0.8rem] border border-[rgb(140_178_217_/_18%)] px-4 py-[0.7rem] text-[0.87rem] font-[540] text-steel-blue-50 no-underline transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 hover:border-[rgb(140_178_217_/_42%)] hover:bg-[rgb(25_51_77_/_55%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none max-[420px]:w-full"
            href="#projects-heading"
          >
            {english ? "View projects" : "Ver projetos"}
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-[1.4rem] border border-[rgb(140_178_217_/_13%)] bg-[linear-gradient(145deg,rgb(17_25_34_/_85%),rgb(9_18_27_/_92%))] p-7 max-[700px]:p-5">
        <h3 className="mb-5 text-lg font-medium text-steel-blue-50">{english ? "Send me a message" : "Envie uma mensagem"}</h3>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
            <label className="grid gap-1.5 text-left text-sm text-steel-blue-100">
              {english ? "Name" : "Nome"}
              <input className="min-h-11 rounded-lg border border-[rgb(140_178_217_/_20%)] bg-[rgb(9_18_27_/_70%)] px-3 text-foreground placeholder:text-charcoal-500 focus-visible:border-steel-blue-300" name="name" autoComplete="name" placeholder={english ? "Your name" : "Seu nome"} required minLength={2} maxLength={100} />
            </label>
            <label className="grid gap-1.5 text-left text-sm text-steel-blue-100">
              E-mail
              <input className="min-h-11 rounded-lg border border-[rgb(140_178_217_/_20%)] bg-[rgb(9_18_27_/_70%)] px-3 text-foreground placeholder:text-charcoal-500 focus-visible:border-steel-blue-300" name="email" type="email" autoComplete="email" placeholder={english ? "you@example.com" : "voce@exemplo.com"} required maxLength={254} />
            </label>
          </div>
          <label className="grid gap-1.5 text-left text-sm text-steel-blue-100">
            {english ? "Message" : "Mensagem"}
            <textarea className="min-h-32 resize-y rounded-lg border border-[rgb(140_178_217_/_20%)] bg-[rgb(9_18_27_/_70%)] p-3 text-foreground placeholder:text-charcoal-500 focus-visible:border-steel-blue-300" name="message" placeholder={english ? "How can I help?" : "Como posso ajudar?"} required minLength={10} maxLength={5000} />
          </label>
          <input type="hidden" name="_subject" value={english ? "Portfolio contact" : "Contato pelo portfólio"} />
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-steel-blue-50 px-4 font-medium text-steel-blue-950 transition-colors hover:bg-steel-blue-100" type="submit">
            <Send size={17} />
            {english ? "Open email draft" : "Preparar e-mail"}
          </button>
          <p aria-live="polite" className="min-h-5 text-center text-sm text-steel-blue-200">
            {status === "ready" && (english ? "Your email app should open with the message ready to send." : "Seu aplicativo de e-mail deve abrir com a mensagem pronta para enviar.")}
          </p>
        </form>
      </div>

      <div className="col-span-2 flex flex-col items-center justify-center border-t border-[rgb(140_178_217_/_13%)] pt-6 text-center max-[700px]:col-span-1">
        <nav className="flex gap-[0.7rem]">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              className="group relative grid size-11 place-items-center rounded-[0.8rem] border border-[rgb(140_178_217_/_14%)] text-steel-blue-100 transition-[border-color,background-color,color] duration-150 hover:border-[rgb(140_178_217_/_42%)] hover:bg-[rgb(25_51_77_/_55%)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-300 motion-reduce:transition-none"
              key={label}
              aria-label={label}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon width={19} height={19} />
              <ArrowUpRight className="absolute right-[0.35rem] top-[0.35rem] opacity-0 transition-opacity duration-150 group-hover:opacity-80 motion-reduce:transition-none" size={12} />
            </a>
          ))}
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
