import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./style.module.scss";

const TemplatePage = ({ children, showModal, setShowModal, theme, onToggleTheme }) => {
    return (
        <div className="app-shell">
            <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
            <Header showModal={showModal} setShowModal={setShowModal} theme={theme} onToggleTheme={onToggleTheme} />
            <main id="conteudo-principal" className={styles.mainContainer}>{ children }</main>
            <Footer />
        </div>
    )
}

export default TemplatePage;