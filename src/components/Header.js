import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './images/alchemity_logo_w_text.png';

const contactButtonStyle = {
  backgroundColor: '#0077b5',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease',
};

contactButtonStyle[':hover'] = {
  backgroundColor: '#005a8c',
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Close menu when clicking outside
  const handleClickOutside = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = 'unset';
    }
  };

  // Update window width when resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu if screen becomes large
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      // Reset body overflow when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Check if mobile view
  const isMobileView = windowWidth <= 1024;

  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <nav className={styles.nav}>
        <div>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Alchemity Logo" className={styles.logoImage} />
          </Link>
        </div>
        
        {isMobileView ? (
          <>
            <button 
              className={styles.hamburgerBtn} 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className={styles.hamburgerBar}></span>
              <span className={styles.hamburgerBar}></span>
              <span className={styles.hamburgerBar}></span>
            </button>
            
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
              <ul className={styles.mobileNavList}>
                <li className={styles.navItem}><Link to="/markets" className={styles.navLink} onClick={toggleMenu}>Markets</Link></li>
                <li className={styles.navItem}><Link to="/products" className={styles.navLink} onClick={toggleMenu}>Product</Link></li>
                <li className={styles.navItem}><Link to="/technology" className={styles.navLink} onClick={toggleMenu}>Technology</Link></li>
                <li className={styles.navItem}><Link to="/about" className={styles.navLink} onClick={toggleMenu}>About</Link></li>
                <li className={styles.navItem}><Link to="/careers" className={styles.navLink} onClick={toggleMenu}>Careers</Link></li>
                <li className={styles.navItem}><Link to="/news" className={styles.navLink} onClick={toggleMenu}>News</Link></li>
                <li className={styles.navItem}>
                  <Link to="/contact" className={`${styles.navLink} ${styles.contactButton}`} onClick={toggleMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.menuOverlay} onClick={handleClickOutside}></div>
          </>
        ) : (
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link to="/markets" className={styles.navLink}>Markets</Link></li>
            <li className={styles.navItem}><Link to="/products" className={styles.navLink}>Product</Link></li>
            <li className={styles.navItem}><Link to="/technology" className={styles.navLink}>Technology</Link></li>
            <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link></li>
            <li className={styles.navItem}><Link to="/careers" className={styles.navLink}>Careers</Link></li>
            <li className={styles.navItem}><Link to="/news" className={styles.navLink}>News</Link></li>
            <li className={styles.navItem}>
              <Link to="/contact" className={`${styles.navLink} ${styles.contactButton}`}>
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;