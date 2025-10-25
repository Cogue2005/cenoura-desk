import React, { ReactNode } from 'react';
import styles from './MeuModal.module.css';

interface MeuModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const MeuModal: React.FC<MeuModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />

            <div className={styles.modal}>

                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Fechar Modal"
                >
                    &times;
                </button>

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    );
};
