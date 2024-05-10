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
                        My interest in technology began early, in mid-2005, when I spent years maintaining computers. However, it was during this time that I discovered my true passion: writing code to solve problems in systems. I then decided to make a career transition and dedicate myself fully to development.
                    </p>
                    <p>
                        This decision led me to Kenzie Academy Brasil, where I had the opportunity to delve deeper into the world of fullstack web development. During my time there, I dove headfirst into languages ​​and technologies like HTML5, SASS, JavaScript, TypeScript, and ReactJS. Furthermore, I acquired softskills essential for success in the field, such as self-knowledge, autonomous learning, teamwork and crisis management.
                    </p>
                    <p>
                        I am proud to have successfully completed the course and obtained my frontend training certificate. However, my learning journey is far from over. Currently, I'm focused on expanding my knowledge into backend development. I developed solid skills in creating APIs using Prisma, and I have intermediate knowledge in Java, which allows me to contribute to more complex and robust projects.
                    </p>
                    <p>
                        Furthermore, I am diving into the world of blockchain, expanding my knowledge in technologies such as Solidity and Scrypt. I am excited about the opportunities this field offers and am committed to becoming proficient in this emerging area.
                    </p>
                    <p>
                        I'm excited about the possibilities the future holds and committed to continuing to learn, grow, and become an even better developer.
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