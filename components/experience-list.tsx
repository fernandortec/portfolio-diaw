import { motion } from "motion/react"

const experiences = [
  {
    period: "Jun 2026 — atual",
    title: "Software Engineer AI Native",
    context: "IDent",
    description:
      "Reconstruindo do zero a aplicação legada da empresa, com inteligência artificial integrada ao processo de desenvolvimento.",
  },
  {
    period: "Nov 2024 — Fev 2026",
    title: "Desenvolvedor Fullstack",
    context: "Ecodrive",
    description:
      "Desenvolvi e escalei uma plataforma global de doações, trabalhando em integrações com Shopify e pagamentos, processamento de dados e fluxos confiáveis. Também implementei pipelines ETL com AWS Lambda e DynamoDB.",
  },
  {
    period: "Fev 2024 — Nov 2024",
    title: "Engenheiro Fullstack",
    context: "Utrip",
    description:
      "Atuei em uma plataforma SaaS multi-tenant de reservas para hotéis, desenvolvendo fluxos de checkout e pagamentos, investigando incidentes em produção e mantendo pipelines automatizados de CI/CD.",
  },
  {
    period: "Set 2023 — Fev 2024",
    title: "Desenvolvedor Fullstack · Freelancer",
    context: "DYGO Brasil",
    description:
      "Projetei e desenvolvi uma plataforma de fidelidade para provedores de seguros, incluindo arquitetura, modelagem de dados, gestão de equipes e treinamentos.",
  },
  {
    period: "Fev 2022 — Out 2022",
    title: "Desenvolvedor Fullstack Júnior",
    context: "ioasys · Projeto para Suvinil",
    description:
      "Desenvolvi um sistema administrativo para automatizar fluxos de trabalho e centralizar processos operacionais da Suvinil.",
  },
  {
    period: "Mai 2020 — Jan 2022",
    title: "Estagiário em Engenharia de Software",
    context: "Plusdin",
    description:
      "Trabalhei na integração com APIs bancárias e na consistência dos dados em fluxos financeiros, em colaboração com equipes externas.",
  },
]

export function ExperienceList() {
  return (
    <section
      className="relative z-[1] mx-auto w-full max-w-[58rem] px-5 pb-28 pt-16 max-[480px]:px-4 max-[480px]:pb-20"
      aria-labelledby="experiences-heading"
    >
      <div className="mb-8">
        <p className="mb-3 text-[0.68rem] font-[650] tracking-[0.23em] text-[#a4e8dd]">
          TRAJETÓRIA PROFISSIONAL
        </p>
        <h2
          id="experiences-heading"
          className="m-0 text-[clamp(2rem,5vw,3.25rem)] font-[580] leading-tight tracking-[-0.06em] text-[#f2f8f7]"
        >
          Experiências<span className="text-[#a4e8dd]">.</span>
        </h2>
      </div>

      <ol className="m-0 list-none border-t border-[rgb(206_241_236_/_16%)] p-0">
        {experiences.map((experience, index) => (
          <motion.li
            key={`${experience.period}-${experience.title}`}
            initial={{ opacity: 0, filter: "blur(10px)", y: 14 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
            className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-x-7 border-b border-[rgb(206_241_236_/_16%)] py-7 max-[560px]:grid-cols-1 max-[560px]:gap-y-3 max-[560px]:py-6"
          >
            <p className="m-0 pt-1 text-[0.76rem] font-medium tracking-[0.08em] text-[#829492]">
              {experience.period}
            </p>
            <div>
              <h3 className="m-0 text-[1.15rem] font-[560] tracking-[-0.025em] text-[#e5f0ed]">
                {experience.title}
              </h3>
              <p className="mb-0 mt-1 text-[0.86rem] text-[#a4e8dd]">
                {experience.context}
              </p>
              <p className="mb-0 mt-3 max-w-[39rem] text-[0.93rem] leading-[1.75] text-[#9baead]">
                {experience.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
