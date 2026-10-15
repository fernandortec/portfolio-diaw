import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"

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
]

export function ContactSection() {
  return (
    <footer className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <p className="contact-eyebrow">VAMOS CONVERSAR</p>
        <h2 id="contact-heading">Vamos nos conectar<span>.</span></h2>
        <p className="contact-description">
          Estou aberto a conversar sobre novos projetos, ideias e oportunidades.
          Se você tem algo em mente, é só me chamar.
        </p>
        <div className="contact-actions">
          <a className="contact-button contact-button--primary" href="mailto:fernandorfigueiredotec@gmail.com">
            <Mail aria-hidden="true" size={17} />
            Entre em contato
          </a>
          <a className="contact-button contact-button--secondary" href="#projects-heading">
            Ver projetos
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-socials" aria-label="Redes sociais">
          {socialLinks.map(({ href, label, icon }) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
              {icon}
              <ArrowUpRight className="contact-social-arrow" aria-hidden="true" size={12} />
            </a>
          ))}
          <a href="mailto:fernandorfigueiredotec@gmail.com" aria-label="Enviar e-mail">
            <Mail aria-hidden="true" size={18} />
          </a>
        </div>
        <a className="contact-email" href="mailto:fernandorfigueiredotec@gmail.com">
          fernandorfigueiredotec@gmail.com
        </a>
        <p className="contact-credit">© {new Date().getFullYear()} Fernando Rodrigues</p>
        <p className="contact-built">Feito com cuidado, em Belo Horizonte.</p>
      </div>
    </footer>
  )
}
