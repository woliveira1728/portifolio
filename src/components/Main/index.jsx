import styles from "./style.module.scss";
import perfil from "../../assets/perfil.png";
import { hardSkills, softSkills } from "../../data/skills";

export const Main = () => {

    return (
        <main className={styles.mainContainer}>
            
            <section id="banner">

            </section>
            
            <section id="about" className={styles.aboutSection}>
                <div className={styles.imgProfile}>
                    <img src={perfil} alt="Foto de perfil" />
                    <h1 className={styles.aboutTitle}>Wilson Oliveira</h1>
                </div>
                <div className={styles.aboutInfos}>
                    <p>
                        Olá a todos,
                    </p>
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

                <h2>Tecnologias e Habilidades</h2>

                <div className={styles.skillsContent}>
                    <div className={styles.skillsContainer}>
                        <div className={styles.hardSkills}>
                            <h3>HardSkills</h3>
                            <ul className={styles.cardSkillsContainer}>
                                {hardSkills.map(hardSkill => {
                                    return (
                                        <li key={hardSkill.name} className={styles.skillsCard}>
                                            <img width="80" src={hardSkill.img} alt={hardSkill.name} />
                                            <span>{hardSkill.name}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className={styles.hardSkills}>
                            <h3>SoftSkills</h3>
                            <ul className={styles.cardSkillsContainer}>
                                {softSkills.map(hardSkill => {
                                    return (
                                        <li  key={hardSkill.name} className={styles.skillsCard}>
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

            <section id="certificates">

            </section>
        </main>
    )
};