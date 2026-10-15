const experiences = [
  {
    period: "Jun 2026 — atual",
    periodEn: "Jun 2026 — present",
    title: "Engenheiro de Software com IA nativa",
    context: "IDent",
    description:
      "Reconstruo a aplicação legada da empresa, usando inteligência artificial no processo de desenvolvimento.",
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

export function ExperienceList({ language = "pt" }: { language?: "pt" | "en" }) {
  const english = language === "en"
  return (
    <section
      id="experience"
      className="page-section pb-20 pt-12 sm:pb-28"
    >
      <div className="mb-8">
        <p className="section-label">
          {english ? "CAREER JOURNEY" : "TRAJETÓRIA PROFISSIONAL"}
        </p>
        <h2
          id="experiences-heading"
          className="section-heading"
        >
          {english ? "Experience" : "Experiência"}
        </h2>
      </div>

      <ol className="m-0 list-none border-t border-charcoal-700/70 p-0">
        {experiences.map((experience) => (
          <li
            key={`${experience.period}-${experience.title}`}
            className="grid grid-cols-[11rem_minmax(0,1fr)] gap-x-7 border-b border-charcoal-700/70 py-7 max-[560px]:grid-cols-1 max-[560px]:gap-y-3 max-[560px]:py-6"
          >
            <p className="m-0 pt-1 text-[0.76rem] font-medium tracking-[0.08em] text-charcoal-300">
              {english ? experience.periodEn : experience.period}
            </p>
            <div>
              <h3 className="m-0 text-[1.15rem] font-[560] tracking-[-0.025em] text-steel-blue-100">
                {english ? experience.titleEn : experience.title}
              </h3>
              <p className="mb-0 mt-1 text-[0.86rem] text-steel-blue-200">
                {english ? experience.contextEn : experience.context}
              </p>
              <p className="mb-0 mt-3 max-w-[39rem] text-[0.93rem] leading-[1.75] text-charcoal-300">
                {english ? experience.descriptionEn : experience.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
