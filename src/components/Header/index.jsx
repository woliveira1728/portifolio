import styles from "./style.module.scss";
import { TiThMenu } from "react-icons/ti";

export const Header = ({ setShowModal }) => {

    const showMenu = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    return (
        <header className={styles.headerContainer}>
            <h2>PORTIFÓLIO</h2>
            
            <button className={styles.buttonMenu} onClick={(e) => showMenu(e)}>
                <TiThMenu />
            </button>

            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certificates">Certificates</a></li>
                </ul>
            </nav>
            
        </header>
    )
};