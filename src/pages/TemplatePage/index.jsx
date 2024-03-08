import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./style.module.scss";

const TemplatePage = ({ children}) => {
    return (
        <>
            <Header />
                <main className={styles.mainContainer}>{ children }</main>
            <Footer />
        </>
    )
}

export default TemplatePage;