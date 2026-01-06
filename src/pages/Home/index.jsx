import styles from "./style.module.scss";
import perfil from "../../assets/will.jpeg";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { hardSkills, softSkills, projects, certificates } from "../../data/data";
import { MenuMobileModal } from "../../components/MenuMobileModal";

export const Home = ({ showModal, setShowModal }) => {

    const stats = [
        { value: "5", label: "anos como dev", detail: "Full stack Web/Mobile/DApp" },
        { value: "20+", label: "anos em tecnologia", detail: "Suporte e hardware" },
        { value: "20+", label: "projetos entregues", detail: "Web, APIs, landing pages" },
        { value: "8", label: "bootcamps e certificações", detail: "Kenzie, DIO, Alura" },
        { value: "React · Next · Fastify", label: "stack principal", detail: "TypeScript, Postgres, Docker" },
    ];

    const experiences = [
        {
            period: "10/2024 — 01/2026",
            title: "Fullstack Developer (P&D) · ARPT",
            bullets: [
                "Frontend React/Next/TypeScript + MUI; mobile em React Native/Expo (SDK 48 → 52)",
                "APIs REST com Fastify/TypeScript, Zod, Knex, PostgreSQL; rotas protegidas e middlewares",
                "Auth com Keycloak (OAuth2/OIDC), login/logout seguro e fluxos de tokens",
                "Infra com Docker e Nginx (reverse proxy); testes de API com Postman",
                "Scrum/JIRA, Bitbucket e code review; documentação de endpoints e autenticação",
                "Planos e execução de testes (funcional, integração, regressão) para estabilizar fluxos críticos",
                "Performance/carga: ajuste de CPU/memória e limites de upload em Nginx/Docker",
                "Homologação: diagnóstico de falhas em Keycloak/Docker Compose e registro sistemático de bugs",
                "Endpoints de rastreabilidade de tokens na blockchain (auditoria e confiabilidade de dados)",
                "Schemas Zod dinâmicos (CPF/CNPJ) e correções de migrations para integridade de inventário",
                "Sanitização DOMPurify para rich content e correções de layout (max-height mídia, MediaDisplay)",
                "Módulos de incidentes e inventário com renderização otimizada e fallbacks"
            ]
        },
        {
            period: "10/2019 — atual",
            title: "Freelancer Fullstack",
            bullets: [
                "Web, Mobile e DApps com React/Next/TypeScript e UI/UX consistente",
                "APIs Fastify + Knex/PostgreSQL, caching e integração com APIs externas",
                "Auth com Keycloak (silent check, renovação automática) e JWT",
                "Deploy com Docker e Nginx; estratégias de performance e monitoramento",
                "Integração Web3 em EVM/BVM (Solidity/SCrypt) e transações seguras"
            ]
        },
        {
            period: "11/2022 — 07/2023",
            title: "Fullstack (JS/TS) · Menor Preço (voluntário)",
            bullets: [
                "Construção e testes de partes do front e back",
                "React no frontend e testes de API no backend"
            ]
        },
        {
            period: "2023 — 2024",
            title: "Kenzie Academy Brasil · Formação Full Stack",
            bullets: [
                "React, TypeScript, Node/Express, Prisma, Postgres, Zod, Jest/Supertest",
                "Entregas semanais com foco em produto, acessibilidade e padrões de código",
                "Soft skills: comunicação, priorização, trabalho em equipe"
            ]
        },
        {
            period: "Antes de 2023",
            title: "Transição de suporte para dev",
            bullets: [
                "Automação, troubleshooting e primeiros protótipos Web3",
                "Fundamentos de Java, APIs e melhores práticas de deploy" 
            ]
        }
    ];

    const projectTech = {
        "Course Marketplace": ["React", "Node", "Prisma", "PostgreSQL", "Axios", "Auth"],
        "Car Catalog API": ["TypeScript", "Fastify/Express", "Prisma", "JWT", "Swagger", "Zod"],
        "Matriz Trading School": ["React", "Styled Components", "Team Work"],
        "Kenzie Hub": ["React", "CRUD", "Context API", "Zod", "Hook Form"],
        "Burguer Kenzie": ["React", "SASS", "LocalStorage"],
        "Generic Portfolio": ["React", "Figma", "Componentização"],
        "Open Music": ["HTML", "CSS", "JavaScript"],
        "Generic Institutional Website": ["HTML", "CSS", "Responsividade"],
    };

    return (
        <>
            
            <section id="about" className={styles.aboutSection}>
                <div className={styles.heroCard}>
                    <div className={styles.imgProfile}>
                        <img loading="lazy" src={perfil} alt="Foto de perfil de Wilson Oliveira" />
                    </div>
                    <div className={styles.heroCopy}>
                        <p className={styles.kicker}>Desenvolvedor Full Stack • Blockchain learner</p>
                        <div className={styles.heroBadges}>
                            <span>Full Stack · Web · Mobile · DApp</span>
                            <span>Auth: Keycloak · OAuth2/OIDC</span>
                            <span>Infra: Docker · Nginx</span>
                        </div>
                        <h1 className={styles.aboutTitle}>Wilson Oliveira</h1>
                        <p className={styles.aboutLead}>
                            Desenvolvedor Full Stack há 5 anos, com foco em performance, segurança e escalabilidade. Atuo em Web, Mobile e DApps, entregando produtos em React/Next/TypeScript, APIs Fastify/Node com Postgres e autenticação enterprise com Keycloak (OAuth2/OIDC). Experiência em P&D blockchain (EVM/BVM) e infra com Docker/Nginx, apoiado por 20+ anos de base técnica em suporte e hardware.
                        </p>
                        <div className={styles.ctaRow}>
                            <a className={styles.primaryCta} href="https://wa.me/5592994763359" target="_blank" rel="noreferrer">Fale comigo</a>
                            <a className={styles.secondaryCta} href="https://github.com/woliveira1728" target="_blank" rel="noreferrer">Ver GitHub</a>
                        </div>
                        <div className={styles.contactsContainer}>
                            <ul aria-label="Redes sociais">
                                <li>
                                    <a href="https://wa.me/5592994763359" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                                        <FaWhatsapp />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/woliveira1728" target="_blank" rel="noreferrer" aria-label="GitHub">
                                        <FaGithub />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/woliveira1728/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                        <FaLinkedin />
                                    </a>
                                </li>
                            </ul>
                            <a href="mailto:woliveira1728@gmail.com" rel="noreferrer">woliveira1728@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutInfos}>
                    <p>
                        Meu interesse por tecnologia começou cedo, em meados de 2005, quando passei anos fazendo manutenção de computadores. No entanto, foi nessa época que descobri minha verdadeira paixão: escrever código para resolver problemas em sistemas. Decidi então fazer uma transição de carreira e me dedicar integralmente ao desenvolvimento.
                    </p>
                    <p>
                        Essa decisão me levou à Kenzie Academy Brasil, onde tive a oportunidade de me aprofundar no mundo do desenvolvimento web fullstack. Durante meu tempo lá, mergulhei de cabeça em linguagens e tecnologias como HTML5, SASS, JavaScript, TypeScript e ReactJS. Além disso, adquiri softskills essenciais para o sucesso na área, como autoconhecimento, aprendizado autônomo, trabalho em equipe e gerenciamento de crises.
                    </p>
                    <p>
                        Concluí a formação em Desenvolvimento Web Full Stack pela Kenzie Academy Brasil e, hoje, estou no último ano do CST em Análise e Desenvolvimento de Sistemas na ULBRA.
                    </p>
                    <p>
                        Além disso, estou mergulhando no mundo do blockchain, expandindo meu conhecimento em tecnologias como Solidity e Scrypt. Estou entusiasmado com as oportunidades que esta área oferece e comprometido em me tornar proficiente nesta área emergente. Estou entusiasmado com as possibilidades que o futuro reserva e comprometido em continuar aprendendo, crescendo e me tornando um desenvolvedor ainda melhor.
                    </p>
                </div>

                <div className={styles.statsSection} id="highlights">
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <p className={styles.statLabel}>{stat.label}</p>
                            <p className={styles.statDetail}>{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="skills" className={styles.skillsSection}>

                <div className={styles.sectionHeading}>
                    <p className={styles.kicker}>Stack e soft skills</p>
                    <h2>Technologies and Skills</h2>
                    <p className={styles.sectionLead}>Toolkit que uso no dia a dia e habilidades humanas que sustentam meu trabalho.</p>
                </div>

                <div className={styles.skillsContent}>
                    <div className={styles.skillsContainer}>
                        <div className={styles.skills}>
                            <h3>HardSkills</h3>
                            <ul className={styles.cardSkillsContainer}>
                                {hardSkills.map((hardSkill, index) => {
                                    return (
                                        <li key={index} className={styles.skillsCard}>
                                            <img loading="lazy" width="80" height="80" src={hardSkill.img} alt={hardSkill.name} />
                                            <span>{hardSkill.name}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className={styles.skills}>
                            <h3>SoftSkills</h3>
                            <ul className={styles.cardSkillsContainer}>
                                {softSkills.map((hardSkill, index) => {
                                    return (
                                        <li  key={index} className={styles.skillsCard}>
                                            <img loading="lazy" width="80" height="80" src={hardSkill.img} alt={hardSkill.name} />
                                            <span>{hardSkill.name}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className={styles.experienceSection}>
                <div className={styles.sectionHeading}>
                    <p className={styles.kicker}>Caminho profissional</p>
                    <h2>Experiência</h2>
                    <p className={styles.sectionLead}>Da transição ao full stack, com foco em produto e entregas semanais.</p>
                </div>
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDot} aria-hidden="true" />
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineHeader}>
                                    <span className={styles.timelinePeriod}>{exp.period}</span>
                                    <h3>{exp.title}</h3>
                                </div>
                                <ul className={styles.timelineList}>
                                    {exp.bullets.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects" className={styles.projectsSection}>
                <div className={styles.sectionHeading}>
                    <p className={styles.kicker}>Portfólio ativo</p>
                    <h2>Projects</h2>
                    <p className={styles.sectionLead}>Alguns projetos recentes com stack full stack e front-end.</p>
                </div>
                <ul className={styles.cardProjectsContainer}>
                    {projects.map((project, index) => {
                        const tags = projectTech[project.name] || [];
                        return (
                            <li key={index} className={styles.cardProject}>
                                <div className={styles.projectMedia}>
                                    <video
                                        controls
                                        preload="metadata"
                                        muted
                                        playsInline
                                        aria-label={`Prévia em vídeo do projeto ${project.name}`}
                                    >
                                        <source src={project.media} type="video/mp4" />
                                    </video>
                                </div>
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {project.name}
                                </a>
                                <p>{project.description}</p>
                                {tags.length > 0 && (
                                    <div className={styles.tagList}>
                                        {tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </section>

            <section id="certificates" className={styles.certificatesSection}>
                <div className={styles.sectionHeading}>
                    <p className={styles.kicker}>Formação contínua</p>
                    <h2>Certificates</h2>
                    <p className={styles.sectionLead}>Cursos e bootcamps que consolidam minha base técnica e soft skills.</p>
                </div>
                <ul className={styles.cardCertificatesContainer}>
                    {certificates.map((certificate, index) => {
                        return (
                            <li key={index} className={styles.cardCertificates}>
                                <img loading="lazy" src={certificate.certificateImg} alt={certificate.name} />
                                <a
                                    href={certificate.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {certificate.name}
                                </a>
                                <p>{certificate.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>

            <section id="contact" className={styles.contactSection}>
                <div className={styles.contactCard}>
                    <div>
                        <p className={styles.kicker}>Vamos construir algo</p>
                        <h2>Disponível para novos projetos</h2>
                        <p className={styles.sectionLead}>Freelance, squads remotas ou colabs pontuais. Respondo rápido por WhatsApp e e-mail. Remoto · Manaus/Amazonas.</p>
                    </div>
                    <div className={styles.contactActions}>
                        <a className={styles.primaryCta} href="https://wa.me/5592994763359" target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
                        <a className={styles.secondaryCta} href="mailto:woliveira1728@gmail.com" rel="noreferrer">Enviar e-mail</a>
                    </div>
                </div>
            </section>

            {showModal ? <MenuMobileModal setShowModal={setShowModal} /> : null}
        </>
    )
};
