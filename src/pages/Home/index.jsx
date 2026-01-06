import styles from "./style.module.scss";
import perfil from "../../assets/will.jpeg";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { hardSkills, softSkills, projects, certificates } from "../../data/data";
import { MenuMobileModal } from "../../components/MenuMobileModal";

export const Home = ({ showModal, setShowModal }) => {

    return (
        <>
            
            <section id="about" className={styles.aboutSection}>
                <div className={styles.heroCard}>
                    <div className={styles.imgProfile}>
                        <img loading="lazy" src={perfil} alt="Foto de perfil de Wilson Oliveira" />
                    </div>
                    <div className={styles.heroCopy}>
                        <p className={styles.kicker}>Desenvolvedor Full Stack • Blockchain learner</p>
                        <h1 className={styles.aboutTitle}>Wilson Oliveira</h1>
                        <p className={styles.aboutLead}>
                            Escrevo código para resolver problemas reais. A cerca de 5 anos, transicionei de suporte de hardware para desenvolvimento full stack.
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
                        Tenho orgulho de ter concluído o curso com sucesso e obtido meu certificado de treinamento frontend. No entanto, minha jornada de aprendizado está longe de terminar. Atualmente, estou focado em expandir meus conhecimentos em desenvolvimento backend. Desenvolvi sólidas habilidades na criação de APIs usando Prisma e possuo conhecimento intermediário em Java, o que me permite contribuir com projetos mais complexos e robustos.
                    </p>
                    <p>
                        Além disso, estou mergulhando no mundo do blockchain, expandindo meu conhecimento em tecnologias como Solidity e Scrypt. Estou entusiasmado com as oportunidades que esta área oferece e comprometido em me tornar proficiente nesta área emergente. Estou entusiasmado com as possibilidades que o futuro reserva e comprometido em continuar aprendendo, crescendo e me tornando um desenvolvedor ainda melhor.
                    </p>
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

            <section id="projects" className={styles.projectsSection}>
                <div className={styles.sectionHeading}>
                    <p className={styles.kicker}>Portfólio ativo</p>
                    <h2>Projects</h2>
                    <p className={styles.sectionLead}>Alguns projetos recentes com stack full stack e front-end.</p>
                </div>
                <ul className={styles.cardProjectsContainer}>
                    {projects.map((project, index) => {
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

            {showModal ? <MenuMobileModal setShowModal={setShowModal} /> : null}
        </>
    )
};
