import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"


const LanguageBlock = (language: string) => (
       <p className="mt-2 flex items-center gap-2 text-sm text-neutral-400">
            {language && (
              <span className="flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-steel-blue-400" />
                {language}
              </span>
            )}
          </p>
)

const projects = [
  {
    Icon: FileTextIcon,
    name: "pizza-shop-api",
    description: "Uma API para ajudar gestores de pizzarias a administrar seus negócios.",
    href: "https://github.com/fernandortec/pizza-shop-api",
    cta: "Ver no GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: InputIcon,
    name: "coffee-shop-delivery",
    description:
      "Aplicação de carrinho de compras para cafeteria: listagem de produtos, edição do carrinho, cadastro de endereço e cálculo do total.",
    href: "https://github.com/fernandortec/coffee-shop-delivery",
    cta: "Ver no GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: CalendarIcon,
    name: "ignite-timer",
    description: "Aplicativo de temporizador desenvolvido durante o módulo de React da Rocketseat.",
    href: "https://github.com/fernandortec/ignite-timer",
    cta: "Ver no GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: BellIcon,
    name: "dt-money",
    description:
      "Aplicativo para organizar as finanças: registre receitas e despesas, consulte totais e pesquise lançamentos.",
    href: "https://github.com/fernandortec/dt-money",
    cta: "Ver no GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: RocketIcon,
    name: "gympass-style-app",
    description: "API de academias inspirada no Gympass, desenvolvida com Fastify e Node.js.",
    href: "https://github.com/fernandortec/gympass-style-app",
    cta: "Ver no GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: GlobeIcon,
    name: "tv-shows",
    description:
      "Serviço de streaming fictício inspirado na Netflix, criado para experimentar a API do TV Maze.",
    href: "https://github.com/fernandortec/tv-shows",
    cta: "Ver no GitHub",
    children: LanguageBlock("TypeScript"),
    stars: 1,
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
]

export function ProjectsGrid() {
  return (
    <BentoGrid className="m-auto w-2/3 lg:grid-rows-2">
      {projects.map((project) => (
        <BentoCard key={project.name} {...project} />
      ))}
    </BentoGrid>
  )
}
