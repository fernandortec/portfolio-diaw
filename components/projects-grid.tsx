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
                <span className="size-3 rounded-full bg-blue-500" />
                {language}
              </span>
            )}
          </p>
)

const projects = [
  {
    Icon: FileTextIcon,
    name: "pizza-shop-api",
    description: "A Pizza shop API made for managers running a new business.",
    href: "https://github.com/fernandortec/pizza-shop-api",
    cta: "View on GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: InputIcon,
    name: "coffee-shop-delivery",
    description:
      "Development of an application to manage a cafeteria's shopping cart: list products, add/remove items, fill in address, and display total.",
    href: "https://github.com/fernandortec/coffee-shop-delivery",
    cta: "View on GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: CalendarIcon,
    name: "ignite-timer",
    description: "Timer APP following @Rocketseat's React.JS module",
    href: "https://github.com/fernandortec/ignite-timer",
    cta: "View on GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: BellIcon,
    name: "dt-money",
    description:
      "Control your finances effectively with DT money, record income and expenses, calculate totals, search expenses and much more",
    href: "https://github.com/fernandortec/dt-money",
    cta: "View on GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: RocketIcon,
    name: "gympass-style-app",
    description: "A gympass style API made with fastify and NodeJS",
    href: "https://github.com/fernandortec/gympass-style-app",
    cta: "View on GitHub",
    children: LanguageBlock("TypeScript"),
    background: <div aria-hidden="true" />,
    className: "lg:col-span-1",
  },
  {
    Icon: GlobeIcon,
    name: "tv-shows",
    description:
      "This project is a fake, streaming service inspired by Netflix. Its objective is to create a streaming platform/shows listing platform to try out the TV MAZE API.",
    href: "https://github.com/fernandortec/tv-shows",
    cta: "View on GitHub",
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
