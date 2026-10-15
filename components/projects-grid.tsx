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
  tall?: boolean
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
    tall: true,
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
    tall: true,
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
    stack: "Wayback Machine",
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

const projectsByDate = [...projects].sort((a, b) => b.date.localeCompare(a.date))

const copy = {
  "pt-BR": {
    label: "CÓDIGO E PRÁTICA",
    heading: "Projetos",
    description: "Aplicações e APIs que desenvolvi. O código de cada projeto está no GitHub.",
    repositories: "Todos os repositórios",
  },
  "en-US": {
    label: "CODE IN PRACTICE",
    heading: "Projects",
    description: "Applications and APIs I've built. Find the source code for each project on GitHub.",
    repositories: "All repositories",
  },
}

function formatProjectDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(
    new Date(`${date}T00:00:00Z`),
  )
}

function ProjectPreview({ kind }: { kind: NonNullable<Project["preview"]> }) {
  const { src } = previews[kind]

  return (
    <img
      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
      src={src}
      loading="lazy"
      decoding="async"
      width={960}
      height={600}
    />
  )
}

function ProjectCard({ project, locale }: {
  project: Project
  locale: string
}) {
  const { name, description, descriptionEn, href, category, categoryEn, stack, icon: Icon, preview, date, tall } = project
  const formattedDate = formatProjectDate(date, locale)

  return (
    <a
      className={`group flex aspect-square min-w-0 flex-col overflow-hidden rounded-xl border border-steel-blue-200/15 bg-[#101d29] transition-colors hover:border-steel-blue-300/60 motion-reduce:transition-none ${tall ? "lg:row-span-2 lg:aspect-auto" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="h-[48%] min-h-32 shrink-0 overflow-hidden border-b border-steel-blue-200/10 bg-steel-blue-950">
        {preview ? (
          <ProjectPreview kind={preview} />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_center,#19334d,#0d1926)]">
            <Icon className="size-12 text-steel-blue-300" strokeWidth={1.25} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-xl font-semibold leading-snug tracking-tight">{name}</h3>
          <ArrowUpRight className="mt-1 shrink-0 text-steel-blue-300" size={18} />
        </div>
        <p className="mt-2 text-xs font-medium text-steel-blue-200">{locale === "en-US" ? categoryEn : category}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-charcoal-200">
          {locale === "en-US" ? descriptionEn : description}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-5 text-xs text-steel-blue-200">
          {stack && <span>{stack}</span>}
          <time className="tabular-nums text-charcoal-300" dateTime={date}>{formattedDate}</time>
        </div>
      </div>
    </a>
  )
}

export function ProjectsGrid() {
  const { locale } = useLocale()
  const text = copy[locale]

  return (
    <section className="page-section pb-20 sm:pb-28" id="projects">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="section-label">{text.label}</p>
          <h2 id="projects-heading" className="section-heading">{text.heading}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-300">{text.description}</p>
        </div>
        <a
          className="inline-flex min-h-11 items-center gap-2 text-sm text-steel-blue-200 hover:text-steel-blue-50"
          href="https://github.com/fernandortec"
          target="_blank"
          rel="noreferrer"
        >
          {text.repositories} <ArrowUpRight size={16} />
        </a>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projectsByDate.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            locale={locale}
          />
        ))}
      </div>
    </section>
  )
}
