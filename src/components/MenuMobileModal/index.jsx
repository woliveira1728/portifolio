import { useEffect } from "react";
import styles from "./style.module.scss";
import { IoClose } from "react-icons/io5";

export const MenuMobileModal = ({ setShowModal }) => {

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") closeModal();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-mobile-title"
            className={styles.modalOverlay}
            onClick={closeModal}
        >
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <p id="menu-mobile-title">Menu</p>
                    <button className={styles.btnClose} onClick={closeModal} aria-label="Fechar menu">
                        <IoClose />
                    </button>
                </div>
                <nav aria-label="Menu móvel" id="menu-mobile">
                    <ul onClick={closeModal}>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#certificates">Certificados</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}