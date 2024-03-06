import styles from "./style.module.scss";

export const Header = () => {

    return (
        <header className={styles.headerContainer}>
            <h2>PORTIFÓLIO</h2>
            <nav>
                <ul>
                    <li><a href="#banner">Início</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#certificates">Certificados</a></li>
                </ul>
            </nav>
        </header>
    )
};