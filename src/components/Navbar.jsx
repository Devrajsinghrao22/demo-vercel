// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '1rem',
    },
    logo: {
      color: '#fff',
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
    },
    navLinkItem: {
      margin: '0 1rem',
    },
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '1.2rem',
    },
    mobileMenuIcon: {
      display: 'none',
      fontSize: '2rem',
      color: '#fff',
      cursor: 'pointer',
    },
    navLinksMobile: {
      display: 'none',
    },
    navLinksMobileVisible: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '70px',
      right: '0',
      width: '100%',
      backgroundColor: '#333',
      zIndex: '1',
    },
    navLinkItemMobile: {
      textAlign: 'center',
      margin: '1rem 0',
    },
  };

  const handleMobileMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>MyLogo</h1>
      <ul style={isMobile ? styles.navLinksMobileVisible : styles.navLinks} onClick={() => setIsMobile(false)}>
        <li style={styles.navLinkItem}><a href="/" style={styles.navLink}>Home</a></li>
        <li style={styles.navLinkItem}><a href="/about" style={styles.navLink}>About</a></li>
        <li style={styles.navLinkItem}><a href="/services" style={styles.navLink}>Services</a></li>
        <li style={styles.navLinkItem}><a href="/contact" style={styles.navLink}>Contact</a></li>
      </ul>
      <button style={styles.mobileMenuIcon} onClick={handleMobileMenuToggle}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

export default Navbar;
