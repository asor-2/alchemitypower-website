import React from "react";
import styles from "./Modal.module.css";

function Modal({
  show,
  onClose,
  title,
  children,
  linkedInUrl,
  size = "default",
  showCloseButton = false,
}) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${
          size === "large"
            ? styles.modalContentLarge
            : size === "xlarge"
              ? styles.modalContentXLarge
              : size === "xxlarge"
                ? styles.modalContentXXLarge
                : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          {showCloseButton && (
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "-0.2rem",
                right: "0.5rem",
                background: "none",
                border: "none",
                outline: "none !important",
                color: "#25abe0",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "0.5rem",
                lineHeight: "1",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#25abe0";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#25abe0";
              }}
            >
              ×
            </button>
          )}
          <h4 className={styles.modalTitle}>{title}</h4>
        </div>
        <div className={styles.modalBody}>
          {children}
          {linkedInUrl && (
            <div className={styles.linkedInButtonContainer}>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedInButton}
              >
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
