import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./style.module.scss";

const TemplatePage = ({ children, setShowModal }) => {
    return (
        <>
            <Header setShowModal={setShowModal} />
                <main className={styles.mainContainer}>{ children }</main>
            <Footer />
        </>
    )
}

export default TemplatePage;