import styles from "./style.module.scss";
import perfil from "../../assets/perfil.png";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { hardSkills, softSkills, projects, certificates } from "../../data/data";
import { MenuMobileModal } from "../../components/MenuMobileModal";

export const Home = ({ showModal, setShowModal }) => {

    return (
        <>
            
            <section id="about" className={styles.aboutSection}>
                <div className={styles.imgProfile}>
                    <img src={perfil} alt="Foto de perfil" />
                    <h1 className={styles.aboutTitle}>Wilson Oliveira</h1>
                    <div className={styles.contactsContainer}>
                        <ul>
                            <li>
                                <a href="https://wa.me/5592994763359" target="_blank">
                                    <FaWhatsapp />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/woliveira1728" target="_blank">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/woliveira1728/" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                        <span>woliveira1728@gmail.com</span>
                    </div>
                </div>
                <div className={styles.aboutInfos}>
                    <p>
                        Meu interesse pela tecnologia começou cedo, quando passei anos dando manutenção em computadores. No entanto, foi durante esse tempo que descobri minha verdadeira paixão: escrever código para resolver problemas em sistemas. Decidi então fazer a transição de carreira e me dedicar integralmente ao desenvolvimento de software.
                    </p>
                    <p>
                        Essa decisão me levou à Kenzie Academy Brasil, onde tive a oportunidade de me aprofundar no mundo do desenvolvimento web fullstack. Durante meu tempo lá, mergulhei de cabeça em linguagens e tecnologias como HTML5, SASS, JavaScript, TypeScript e ReactJS. Além disso, adquiri softskills essenciais para o sucesso na área, como autoconhecimento, aprendizado autônomo, trabalho em equipe e gestão de crises.
                    </p>
                    <p>
                        Estou orgulhoso de ter concluído o curso com sucesso e obtido meu certificado de formação frontend. No entanto, minha jornada de aprendizado está longe de terminar. Atualmente, estou focado em expandir meus conhecimentos para o desenvolvimento backend. Estou me dedicando ao estudo de novas tecnologias e frameworks que me permitirão ampliar minhas habilidades e contribuir de forma ainda mais significativa para projetos desafiadores.
                    </p>
                    <p>
                        Estou animado com as possibilidades que o futuro reserva e comprometido em continuar aprendendo, crescendo e me tornando um desenvolvedor de software ainda melhor.
                    </p>
                </div>
            </section>

            <section id="skills" className={styles.skillsSection}>

                <h2>Technologies and Skills</h2>

                <div className={styles.skillsContent}>
                    <div className={styles.skillsContainer}>
                        <div className={styles.skills}>
                            <h3>HardSkills</h3>
                            <ul className={styles.cardSkillsContainer}>
                                {hardSkills.map((hardSkill, index) => {
                                    return (
                                        <li key={index} className={styles.skillsCard}>
                                            <img width="80" src={hardSkill.img} alt={hardSkill.name} />
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
                                            <img width="80" src={hardSkill.img} alt={hardSkill.name} />
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
                <h2>Projects</h2>
                <ul className={styles.cardProjectsContainer}>
                    {projects.map((project, index) => {
                        return (
                            <li key={index} className={styles.cardProject}>
                                <iframe
                                    width="100%"
                                    src={project.media}
                                    frameborder="0"
                                >
                                </iframe>
                                <a
                                    href={project.href}
                                    target="_blank"
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
                <h2>Certificates</h2>
                <ul className={styles.cardCertificatesContainer}>
                    {certificates.map((certificate, index) => {
                        return (
                            <li key={index} className={styles.cardCertificates}>
                                <img src={certificate.certificateImg} alt="" />
                                <a
                                    href={certificate.href}
                                    target="_blank"
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