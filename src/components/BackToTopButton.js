import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "2.2rem",
        right: "2.2rem",
        zIndex: 2000,
        background: "#25abe0",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        opacity: 0.85,
        transition: "opacity 0.2s, background 0.2s",
      }}
      aria-label="Back to top"
      onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "0.85")}
    >
      <FaArrowUp
        size={22}
        color="#fff"
        style={{ filter: "drop-shadow(0 1px 2px #0008)" }}
      />
    </button>
  );
}
