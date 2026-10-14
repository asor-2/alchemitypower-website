import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./images/alchemity_logo_w_text.png";

const links = [
  ["/markets", "Markets"], ["/products", "Product"],
  ["/technology", "Technology"], ["/about", "About"],
  ["/careers", "Careers"], ["/contact", "Contact Us"],
];

export default function Header() {
  const { pathname } = useLocation();
  const home = pathname === "/";
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const dialogRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setHidden(false);
    let last = Math.max(0, window.scrollY), distance = 0, direction = 0, frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, Math.min(window.scrollY, Math.max(0, document.documentElement.scrollHeight - window.innerHeight)));
      const delta = y - last;
      last = y;
      setScrolled(y > 24);
      if (y < 80) { setHidden(false); distance = 0; return; }
      if (!delta) return;
      const nextDirection = Math.sign(delta);
      if (nextDirection !== direction) distance = 0;
      direction = nextDirection;
      distance += Math.abs(delta);
      // Ignore small trackpad movements; never hide focused navigation.
      if (distance >= (direction > 0 ? 28 : 12)) {
        setHidden(direction > 0 && !headerRef.current?.querySelector(":focus-visible"));
        distance = 0;
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", schedule, { passive: true });
    return () => { window.removeEventListener("scroll", schedule); cancelAnimationFrame(frame); };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 1201px)");
    const resize = () => { if (media.matches) setMenuOpen(false); };
    media.addEventListener("change", resize);
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      media.removeEventListener("change", resize);
      toggleRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  const navLinks = () => links.map(([to, label]) => (
    <li key={to}><NavLink to={to} className={styles.navLink} onClick={() => setMenuOpen(false)}>{label}</NavLink></li>
  ));

  return <>
    {!home && <div className={styles.spacer} aria-hidden="true" />}
    <header ref={headerRef} className={styles.header}
      data-hidden={hidden && !menuOpen} data-scrolled={scrolled} data-home={home}
      onFocusCapture={() => setHidden(false)}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to="/" className={styles.logo} aria-label="Alchemity Power home">
          <img src={logo} alt="Alchemity Power" className={styles.logoImage} />
        </Link>
        <ul className={styles.navList}>{navLinks()}</ul>
        <button ref={toggleRef} className={styles.menuButton} type="button"
          aria-label="Open navigation" aria-expanded={menuOpen} aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}><span /><span /></button>
      </nav>
    </header>
    <dialog ref={dialogRef} id="mobile-navigation" className={styles.mobileMenu}
      aria-label="Navigation" onCancel={event => { event.preventDefault(); setMenuOpen(false); }}
      onClick={event => { if (event.target === event.currentTarget) setMenuOpen(false); }}>
      <div className={styles.menuPanel}>
        <div className={styles.menuHeading}><span>Alchemity Power</span>
          <button type="button" autoFocus onClick={() => setMenuOpen(false)} className={styles.closeButton}>Close <span aria-hidden="true">×</span></button>
        </div>
        <nav aria-label="Mobile navigation"><ul className={styles.mobileList}>{navLinks()}</ul></nav>
      </div>
    </dialog>
  </>;
}
