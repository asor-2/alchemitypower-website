import React from "react";
import styles from "./EnergyBackground.module.css";

export default function EnergyBackground({ children, className = "" }) {
    return (
        <div className={`${styles.surface} ${className}`}>
            <div className={styles.atmosphere} aria-hidden="true">
                <div className={styles.grid} />
                <div className={styles.glow} />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
