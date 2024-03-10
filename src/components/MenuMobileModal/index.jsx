import styles from "./style.module.scss";
import { IoClose } from "react-icons/io5";

export const MenuMobileModal = ({ setShowModal }) => {

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div role="dialog" className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <button className={styles.btnClose} onClick={() => closeModal()}>
                    <IoClose />
                </button>
                <nav>
                    <ul onClick={(e) => closeModal(e)}>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#certificates">CERTIFICATES</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}