import styles from "./style.module.scss";

export const Header = () => {

    return (
        <header className={styles.headerContainer}>
            <h2>PORTIFÓLIO</h2>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#certificates">Certificates</a></li>
                </ul>
            </nav>
        </header>
    )
};