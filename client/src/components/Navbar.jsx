import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.scss";
import logo from "../assets/logo.jpeg"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Left side: Logo and Name */}
        <div className={styles.logo}>
          <img src={logo} alt="Compassionate Care Logo" />
          <span>Akdar Home Care Services</span>
        </div>

        {/* Right side: Links */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/referral" className={styles.referralBtn}>
            Referral Form
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={menuOpen ? styles.barActive : ""}></span>
          <span className={menuOpen ? styles.barActive : ""}></span>
          <span className={menuOpen ? styles.barActive : ""}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
