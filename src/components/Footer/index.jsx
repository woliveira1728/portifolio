import styles from "./style.module.scss";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.contactsContainer}>
                <ul>
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
            <p>Developed by Wilson Oliveira</p>
        </footer>
    )
};