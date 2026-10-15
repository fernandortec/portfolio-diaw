import { useLocale } from "@/components/context/use-locale"
import {
  ArrowUpRight,
  Braces,
  Clock3,
  Coffee,
  Dumbbell,
  Film,
  GraduationCap,
  ShoppingBag,
  Wallet,
  type LucideIcon,
} from "lucide-react"

const previews = {
  coffee: {
    src: "/projects/coffee-delivery.png",
  },
  timer: {
    src: "/projects/ignite-timer.png",
  },
  tv: {
    src: "/projects/tv-shows-home.png",
  },
  collegetown: {
    src: "/projects/collegetown-test.png",
  },
  "ignite-shop": {
    src: "/projects/ignite-shop.png",
  },
}

type Project = {
  name: string
  description: string
  descriptionEn: string
  href: string
  category: string
  categoryEn: string
  stack?: string
  icon: LucideIcon
  preview?: keyof typeof previews
  date: string
}

const projects: Project[] = [
  {
    name: "Coffee Delivery",
    description: "Catálogo de cafés com carrinho de compras e checkout.",
    descriptionEn: "Coffee catalog with a shopping cart and checkout.",
    href: "https://github.com/fernandortec/coffee-shop-delivery",
    category: "Frontend · E-commerce",
    categoryEn: "Frontend · E-commerce",
    stack: "React · TypeScript",
    icon: Coffee,
    preview: "coffee",
    date: "2024-03-23",
  },
  {
    name: "TV Shows",
    description: "Catálogo de séries com busca e páginas de detalhes.",
    descriptionEn: "TV show catalog with search and detail pages.",
    href: "https://github.com/fernandortec/tv-shows",
    category: "Frontend · Streaming",
    categoryEn: "Frontend · Streaming",
    stack: "React · TypeScript",
    icon: Film,
    preview: "tv",
    date: "2024-04-17",
  },
  {
    name: "DT Money",
    description: "Controle de receitas e despesas com resumo de saldo e busca de transações.",
    descriptionEn: "Income and expense tracker with balance summary and transaction search.",
    href: "https://github.com/fernandortec/dt-money",
    category: "Frontend · Finanças",
    categoryEn: "Frontend · Finance",
    stack: "React · TypeScript",
    icon: Wallet,
    date: "2024-03-25",
  },
  {
    name: "Ignite Timer",
    description: "Cronômetro de foco com ciclos de trabalho e histórico de sessões.",
    descriptionEn: "Focus timer with work cycles and a session history.",
    href: "https://github.com/fernandortec/ignite-timer",
    category: "Frontend · Produtividade",
    categoryEn: "Frontend · Productivity",
    stack: "React · TypeScript",
    icon: Clock3,
    preview: "timer",
    date: "2024-02-19",
  },
  {
    name: "Pizza Shop API",
    description: "API para gerenciamento de pedidos de uma pizzaria.",
    descriptionEn: "API for managing a pizza shop's orders.",
    href: "https://github.com/fernandortec/pizza-shop-api",
    category: "Backend · API",
    categoryEn: "Backend · API",
    stack: "TypeScript",
    icon: Braces,
    date: "2024-04-07",
  },
  {
    name: "Gympass API",
    description: "API de academias inspirada no Gympass, desenvolvida com Node.js e Fastify.",
    descriptionEn: "Gym discovery API inspired by Gympass, built with Node.js and Fastify.",
    href: "https://github.com/fernandortec/gympass-style-app",
    category: "Backend · API",
    categoryEn: "Backend · API",
    stack: "TypeScript · Fastify",
    icon: Dumbbell,
    date: "2024-03-21",
  },
  {
    name: "Collegetown",
    description: "Comparação de diretórios universitários com versões arquivadas no Wayback Machine.",
    descriptionEn: "Compares university directories with archived versions from the Wayback Machine.",
    href: "https://github.com/fernandortec/collegetown-test",
    category: "Educação · Monitoramento",
    categoryEn: "Education · Monitoring",
    icon: GraduationCap,
    preview: "collegetown",
    date: "2026-04-28",
  },
  {
    name: "Ignite Shop",
    description: "Loja de camisetas com catálogo de produtos.",
    descriptionEn: "T-shirt store with a product catalog.",
    href: "https://github.com/fernandortec/ignite-shop",
    category: "Frontend · E-commerce",
    categoryEn: "Frontend · E-commerce",
    icon: ShoppingBag,
    preview: "ignite-shop",
    date: "2024-05-05",
  },
]

const projectsByDate = [...projects].sort((a, b) => a.date.localeCompare(b.date))

const copy = {
  "pt-BR": {
    label: "02 / PROJETOS",
    heading: "Projetos",
    description: "Aplicações e APIs que desenvolvi.",
    repositories: "Todos os repositórios",
  },
  "en-US": {
    label: "02 / PROJECTS",
    heading: "Projects",
    description: "Applications and APIs I've built.",
    repositories: "All repositories",
  },
}

function formatProjectDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(
    new Date(`${date}T00:00:00Z`),
  )
}

function ProjectPreview({ kind, name }: { kind: NonNullable<Project["preview"]>; name: string }) {
  const { src } = previews[kind]

  return (
    <img
      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
      alt={`Preview — ${name}`}
      src={src}
      loading="lazy"
      decoding="async"
      width={960}
      height={600}
    />
  )
}

function ProjectCard({ project, locale, index }: { project: Project; locale: string; index: number }) {
  const { name, description, descriptionEn, href, category, categoryEn, stack, icon: Icon, preview, date } = project
  const english = locale === "en-US"
  return (
    <a className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-steel-blue-300/15 bg-[#0c1722ed] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-steel-blue-300/45 motion-reduce:transform-none motion-reduce:transition-none" href={href} target="_blank" rel="noreferrer">
      <div data-variant={index % 3 === 1 ? "alternate" : "default"} className="relative aspect-[16/10] overflow-hidden border-b border-steel-blue-300/10 p-6 pb-0">
        <div className="flex h-[27px] items-center gap-[5px] rounded-t-[7px] border border-white/[0.07] border-b-0 bg-[#111923] px-[10px]" aria-hidden="true"><span className="size-[5px] rounded-full bg-white/20" /><span className="size-[5px] rounded-full bg-white/20" /><span className="size-[5px] rounded-full bg-white/20" /><span className="ml-auto mr-auto pr-5 text-[9px] text-charcoal-300">{name.toLowerCase().replaceAll(" ", "-")}</span><span className="size-[5px] rounded-full bg-white/20" /></div>
        {preview ? <div className="h-[calc(100%-27px)] overflow-hidden border border-white/[0.07] border-b-0"><ProjectPreview kind={preview} name={name} /></div> : (
          <div className="grid h-[calc(100%-27px)] place-items-center bg-[#0a141f]">
            <Icon size={54} strokeWidth={1.1} className="text-steel-blue-300" aria-hidden="true" />
          </div>
        )}
        <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-steel-blue-50 text-steel-blue-950 shadow-[0_4px_20px_#0004] transition-transform duration-200 group-hover:rotate-45 motion-reduce:transform-none motion-reduce:transition-none"><ArrowUpRight size={20} /></span>
      </div>
      <div className="flex flex-1 flex-col p-[1.4rem] min-[601px]:p-[1.7rem]">
        <div className="mb-3 flex items-center justify-between gap-3 text-[11px] tracking-wide text-charcoal-300"><span>{english ? categoryEn : category}</span><span className="font-mono text-charcoal-500">{String(index + 1).padStart(2, "0")}</span></div>
        <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-charcoal-300">{english ? descriptionEn : description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6 text-xs">{stack && <span className="text-steel-blue-200">{stack}</span>}<time className="ml-auto text-charcoal-400" dateTime={date}>{formatProjectDate(date, locale)}</time></div>
      </div>
    </a>
  )
}

export function ProjectsGrid() {
  const { locale } = useLocale()
  const text = copy[locale]
  return (
    <section className="page-section pb-24 sm:pb-32" id="projects" aria-labelledby="projects-heading">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div><p className="section-label">{text.label}</p><h2 id="projects-heading" className="section-heading">{text.heading}</h2><p className="mt-4 max-w-lg text-base leading-7 text-charcoal-300">{text.description}</p></div>
        <a className="inline-flex min-h-11 items-center gap-2 text-sm text-steel-blue-200 hover:text-white" href="https://github.com/fernandortec" target="_blank" rel="noreferrer">{text.repositories}<ArrowUpRight size={16} /></a>
      </header>
      <div className="grid grid-cols-1 gap-6 min-[601px]:grid-cols-2 min-[601px]:gap-7">{projectsByDate.map((project, index) => <ProjectCard key={project.name} project={project} locale={locale} index={index} />)}</div>
    </section>
  )
}
