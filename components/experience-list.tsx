import { useLocale } from "@/components/context/use-locale"

const experiences = [
  {
    period: "Jun 2026 — atual",
    periodEn: "Jun 2026 — present",
    title: "Engenheiro de Software com IA nativa",
    context: "IDent",
    description:
      "Trabalho na reconstrução da aplicação legada da IDent, com IA integrada ao fluxo de desenvolvimento.",
    titleEn: "AI-Native Software Engineer",
    contextEn: "IDent",
    descriptionEn: "Rebuilding the company's legacy application with artificial intelligence integrated into the development process.",
  },
  {
    period: "Nov 2024 — Fev 2026",
    periodEn: "Nov 2024 — Feb 2026",
    title: "Desenvolvedor Full Stack",
    context: "Ecodrive",
    description:
      "Desenvolvi integrações com Shopify e sistemas de pagamento para uma plataforma global de doações. Implementei pipelines de dados com AWS Lambda e DynamoDB.",
    titleEn: "Full Stack Developer",
    contextEn: "Ecodrive",
    descriptionEn: "Built Shopify and payment integrations for a global donations platform. Implemented data pipelines with AWS Lambda and DynamoDB.",
  },
  {
    period: "Fev 2024 — Nov 2024",
    periodEn: "Feb 2024 — Nov 2024",
    title: "Engenheiro Full Stack",
    context: "Utrip",
    description:
      "Desenvolvi checkout e pagamentos em uma plataforma de reservas para hotéis. Também investiguei incidentes em produção e mantive os pipelines de CI/CD.",
    titleEn: "Full Stack Engineer",
    contextEn: "Utrip",
    descriptionEn: "Built checkout and payment flows for a hotel booking platform. Also investigated production incidents and maintained CI/CD pipelines.",
  },
  {
    period: "Set 2023 — Fev 2024",
    periodEn: "Sep 2023 — Feb 2024",
    title: "Desenvolvedor Full Stack · Freelancer",
    context: "DYGO Brasil",
    description:
      "Desenvolvi uma plataforma de fidelidade para provedores de seguros, da arquitetura à modelagem de dados. Também atuei na gestão da equipe e em treinamentos.",
    titleEn: "Full Stack Developer · Freelance",
    contextEn: "DYGO Brasil",
    descriptionEn: "Built a loyalty platform for insurance providers, from architecture to data modeling. Also supported team management and training.",
  },
  {
    period: "Fev 2022 — Out 2022",
    periodEn: "Feb 2022 — Oct 2022",
    title: "Desenvolvedor Full Stack Júnior",
    context: "ioasys · Projeto para Suvinil",
    description:
      "Desenvolvi um sistema administrativo para automatizar e centralizar processos operacionais da Suvinil.",
    titleEn: "Junior Full Stack Developer",
    contextEn: "ioasys · Project for Suvinil",
    descriptionEn: "Built an administrative system to automate and centralize Suvinil's operational processes.",
  },
  {
    period: "Mai 2020 — Jan 2022",
    periodEn: "May 2020 — Jan 2022",
    title: "Estagiário em Engenharia de Software",
    context: "Plusdin",
    description:
      "Integrei APIs bancárias e trabalhei na consistência de dados financeiros com equipes externas.",
    titleEn: "Software Engineering Intern",
    contextEn: "Plusdin",
    descriptionEn: "Integrated banking APIs and worked with external teams to improve financial data consistency.",
  },
]

const focus = [
  ["Modernização de software", "IA no desenvolvimento"],
  ["Shopify", "Pagamentos", "AWS Lambda", "DynamoDB"],
  ["Reservas", "Checkout", "CI/CD"],
  ["Arquitetura", "Modelagem de dados", "Mentoria"],
  ["Suvinil", "Automação de processos"],
  ["APIs bancárias", "Dados financeiros"],
]
const focusEn = [
  ["Software modernization", "AI-assisted development"],
  ["Shopify", "Payments", "AWS Lambda", "DynamoDB"],
  ["Bookings", "Checkout", "CI/CD"],
  ["Architecture", "Data modeling", "Mentoring"],
  ["Suvinil", "Process automation"],
  ["Banking APIs", "Financial data"],
]

export function ExperienceList() {
  const { locale } = useLocale()
  const english = locale === "en-US"
  return (
    <section id="experience" className="page-section pb-24 pt-12 sm:pb-32" aria-labelledby="experiences-heading">
      <div className="grid grid-cols-1 gap-10 min-[801px]:grid-cols-[0.8fr_1.5fr] min-[801px]:gap-20">
        <header className="self-start min-[801px]:sticky min-[801px]:top-32">
          <p className="section-label">{english ? "01 / EXPERIENCE" : "01 / EXPERIÊNCIA"}</p>
          <h2 id="experiences-heading" className="section-heading">{english ? "Work experience" : "Experiência profissional"}</h2>
          <p className="mt-5 max-w-xs text-base leading-7 text-charcoal-300 max-[800px]:max-w-xl">{english ? "Work across product teams, from Shopify and payment integrations to hotel checkout and data pipelines." : "Atuei em produtos de e-commerce, pagamentos, reservas de hotéis e pipelines de dados."}</p>
          <span className="mt-8 inline-flex items-center gap-2 text-xs text-steel-blue-200"><span className="size-1.5 rounded-full bg-steel-blue-300" />{english ? "2020 — present" : "2020 — até aqui"}</span>
        </header>
        <ol className="m-0 list-none border-l border-steel-blue-300/20 py-0 pl-5 min-[601px]:pl-[1.8rem]">
          {experiences.map((experience, index) => (
            <li key={experience.context} className={`relative mb-5 rounded-2xl border p-5 transition-colors duration-200 hover:border-steel-blue-300/30 min-[601px]:p-[1.8rem] ${index === 0 ? "border-steel-blue-300/25 bg-[linear-gradient(130deg,#19334d88,#0c1722ee)]" : "border-steel-blue-300/10 bg-[#0c1722cc]"}`}>
              <span className={`absolute left-[-1.65rem] top-[2.1rem] size-[0.65rem] rounded-full border-2 border-steel-blue-400 bg-steel-blue-950 shadow-[0_0_0_6px_#09121b] min-[601px]:left-[-2.15rem] ${index === 0 ? "bg-steel-blue-200 shadow-[0_0_0_6px_#09121b,0_0_20px_#6699cc66]" : ""}`} aria-hidden="true" />
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-charcoal-300">{english ? experience.periodEn : experience.period}</p>
                {index === 0 && <span className="rounded-full border border-steel-blue-300/20 bg-steel-blue-300/10 px-[0.65rem] py-[0.3rem] text-[0.65rem] text-steel-blue-200">{english ? "Currently here" : "Atualmente"}</span>}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-steel-blue-50">{english ? experience.contextEn : experience.context}</h3>
              <p className="mt-1.5 text-sm text-steel-blue-200">{english ? experience.titleEn : experience.title}</p>
              <p className="mt-4 text-sm leading-7 text-charcoal-300">{english ? experience.descriptionEn : experience.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{(english ? focusEn : focus)[index].map(tag => <span className="rounded-[0.35rem] border border-steel-blue-300/10 px-[0.6rem] py-[0.3rem] text-[0.65rem] text-charcoal-300" key={tag}>{tag}</span>)}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
