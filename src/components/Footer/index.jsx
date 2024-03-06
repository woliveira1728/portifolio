import styles from "./style.module.scss";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {

    return (
        <footer className={styles.footerContainer}>
            <ul>
                <li><a href=""><FaWhatsapp /></a></li>
                <li><a href=""><FaGithub /></a></li>
                <li><a href=""><FaLinkedin /></a></li>
            </ul>
            <p>Todos os direitos reservados a Wilson Oliveira</p>
        </footer>
    )
};