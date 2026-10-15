# Portfólio Profissional — Fernando Rodrigues

Portfólio pessoal desenvolvido para apresentar minha trajetória como engenheiro de software full stack, meus projetos e formas de contato. O site usa React e TypeScript e se adapta a celulares, tablets e desktops.

## Índice

- [Links](#links)
- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Projetos apresentados](#projetos-apresentados)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Instalação e execução](#instalação-e-execução)
- [Deploy](#deploy)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Demonstração](#demonstração)
- [Autor](#autor)

## Links

- **Repositório:** [github.com/fernandortec/portfolio-diaw](https://github.com/fernandortec/portfolio-diaw)
- **Site publicado:** pendente de deploy.
- **Protótipo no Figma:** pendente de inclusão.

## Sobre o projeto

Este site reúne informações profissionais em uma única página para que recrutadores, equipes e possíveis clientes possam conhecer minha experiência, explorar projetos e entrar em contato.

O portfólio apresenta uma introdução profissional, experiências e projetos selecionados, além de links para GitHub, LinkedIn, WhatsApp e e-mail. Foi desenvolvido como projeto acadêmico da disciplina de Desenvolvimento e Integração de Aplicações Web (DIAW), no curso de Engenharia de Software.

## Funcionalidades

- Apresentação profissional e localização.
- Seção de experiências profissionais com cargo, organização, período e descrição.
- Grade de projetos com imagens separadas das descrições e links para os repositórios no GitHub. Os cards têm altura conforme o conteúdo, sem cortes de texto.
- Grade de projetos ordenada do mais recente ao mais antigo, com a data do primeiro marco no histórico público do GitHub em destaque em cada card.
- Links de contato para e-mail, WhatsApp, LinkedIn e GitHub.
- Grade com uma, duas ou três colunas conforme a largura disponível.
- Navegação por âncoras, link para pular ao conteúdo e indicação de foco no teclado.
- Respeito à preferência por movimento reduzido no fundo e nos links sociais.
- Fundo animado restrito à apresentação e links sociais com ampliação ao passar o mouse.

### Itens planejados

- Apresentação “Sobre Mim” em português e inglês.
- Formulário com nome, e-mail e mensagem, com envio de e-mail.
- Capturas de tela ou GIFs para todos os projetos apresentados.
- Publicação do site e inclusão do link de produção.

## Projetos apresentados

Os cards apontam para os repositórios correspondentes no GitHub.

| Projeto | Descrição | Tecnologias exibidas | Repositório |
| --- | --- | --- | --- |
| Coffee Shop Delivery | Catálogo, carrinho e checkout para uma cafeteria. | React, TypeScript | [Repositório](https://github.com/fernandortec/coffee-shop-delivery) |
| Tv Shows | Catálogo de séries com páginas de exploração e detalhes. | React, TypeScript | [Repositório](https://github.com/fernandortec/tv-shows) |
| DT Money | Aplicação para organizar receitas e despesas. | React, TypeScript | [Repositório](https://github.com/fernandortec/dt-money) |
| Ignite Timer | Timer para organizar ciclos de foco e trabalho. | React, TypeScript | [Repositório](https://github.com/fernandortec/ignite-timer) |
| Pizza Shop API | API para gestão de pedidos de uma pizzaria. | TypeScript | [Repositório](https://github.com/fernandortec/pizza-shop-api) |
| Gympass Style App | API de academias inspirada no Gympass. | TypeScript, Fastify | [Repositório](https://github.com/fernandortec/gympass-style-app) |
| Collegetown Test | Ferramenta para comparar diretórios universitários atuais e arquivados. | Wayback Machine | [Repositório](https://github.com/fernandortec/collegetown-test) |
| Ignite Shop | Catálogo de camisetas e produtos. | — | [Repositório](https://github.com/fernandortec/ignite-shop) |

## Tecnologias

### Aplicação

- **React 19** — construção da interface.
- **TypeScript 6** — tipagem estática.
- **Vite 8** — servidor de desenvolvimento e build.
- **Tailwind CSS 4** — estilos responsivos e tokens visuais.
- **Motion** — animações de interface.
- **Lucide React** e **Radix UI Icons** — ícones.
- **Base UI** — componentes de interface.
- **Geist** — fonte da interface.

### Ferramentas de desenvolvimento

- **Oxlint** — análise estática do código.
- **React Compiler** via Babel — compilação otimizada de componentes React.
- **TypeScript** — verificação de tipos durante o build.

As dependências e versões declaradas estão listadas em [`package.json`](./package.json), e as versões resolvidas estão registradas em [`package-lock.json`](./package-lock.json).

## Arquitetura

O projeto é uma aplicação frontend de página única (SPA), sem API, banco de dados ou servidor próprio. O ponto de entrada renderiza o componente `App`, que compõe as seções do portfólio. Os dados de experiências e projetos estão definidos nos componentes que os exibem. As imagens estáticas dos projetos ficam em `public/projects`.

```text
Navegador
  └── React SPA (Vite)
      ├── Apresentação e links
      ├── Experiências
      ├── Projetos
      └── Contato (links diretos)
```

O contato por e-mail usa um link `mailto:`. Ainda não há envio de mensagens por formulário nem serviço de backend integrado.

## Instalação e execução

### Pré-requisitos

- Node.js em versão compatível com Vite 8.
- npm.

### Executar localmente

```bash
git clone https://github.com/fernandortec/portfolio-diaw.git
cd portfolio-diaw
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local — normalmente `http://localhost:5173`.

### Outros comandos

```bash
npm run build    # verifica os tipos e gera a versão de produção em dist/
npm run preview  # serve localmente o build de produção
npm run lint     # executa o Oxlint
```

O projeto não requer variáveis de ambiente para a funcionalidade atual. Não há script de testes automatizados configurado no `package.json`.

## Deploy

O projeto pode ser publicado como site estático na Vercel ou em outro serviço compatível com Vite.

Configuração básica para a Vercel:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Depois da publicação, substitua “pendente de deploy” na seção [Links](#links) pelo endereço público do site. A configuração do deploy ainda não está documentada neste repositório.

## Estrutura de pastas

```text
.
├── components/
│   ├── ui/                    # Componentes de interface reutilizáveis
│   ├── about-me-dock.tsx      # Apresentação e links sociais
│   ├── contact-section.tsx    # Links de contato e rodapé
│   ├── experience-list.tsx    # Lista de experiências
│   └── projects-grid.tsx      # Galeria de projetos
├── lib/
│   └── utils.ts               # Funções utilitárias
├── public/
│   ├── icons.svg
│   └── projects/              # Imagens de projetos
├── src/
│   ├── assets/                # Recursos estáticos
│   ├── styles/globals.css     # Estilos globais e tema
│   ├── App.tsx                # Composição principal da página
│   └── main.tsx               # Inicialização da aplicação
├── index.html
├── package.json
└── vite.config.ts
```

## Demonstração

As imagens abaixo são arquivos locais já incluídos no repositório. Elas ilustram alguns projetos exibidos no portfólio:

| Coffee Shop Delivery | Tv Shows |
| --- | --- |
| ![Página da cafeteria Coffee Delivery](/public/projects/coffee-delivery.png) | ![Página inicial do catálogo Tv Shows](/public/projects/tv-shows-home.png) |

## Autor

**Fernando Rodrigues** — Engenheiro de Software Full Stack, de Belo Horizonte, Brasil.

- [GitHub](https://github.com/fernandortec)
- [LinkedIn](https://www.linkedin.com/in/fernandortec)
- [E-mail](mailto:fernandorfigueiredotec@gmail.com)
- [WhatsApp](https://wa.me/5531993750285)
