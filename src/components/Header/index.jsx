import styles from "./style.module.scss";
import { TiThMenu } from "react-icons/ti";
import { LuSun, LuMoon } from "react-icons/lu";

export const Header = ({ showModal, setShowModal, theme, onToggleTheme }) => {

    const showMenu = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <header className={styles.headerContainer}>
            <div className={styles.branding}>
                <span className={styles.brandDot} aria-hidden="true" />
                <h1>Portfólio</h1>
            </div>
            
            <div className={styles.actions}>
                <button
                    className={styles.themeToggle}
                    onClick={onToggleTheme}
                    aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
                >
                    {theme === 'dark' ? <LuSun /> : <LuMoon />}
                </button>
            
                <button
                    className={styles.buttonMenu}
                    onClick={showMenu}
                    aria-label="Abrir menu de navegação"
                    aria-expanded={showModal}
                    aria-controls="menu-mobile"
                >
                    <TiThMenu />
                </button>
            </div>

            <nav aria-label="Navegação principal">
                <ul>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#certificates">Certificados</a></li>
                </ul>
            </nav>
            
        </header>
    )
};