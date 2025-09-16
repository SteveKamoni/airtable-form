import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/navbar.module.scss";
import feather from "feather-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Run feather icons after render
  useEffect(() => {
    feather.replace();
  });

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles["nav-container"]}>
        {/* Logo */}
        <Link to="/" className={styles.logo} aria-label="Compassionate Care Home">
          Compassionate <span>Care</span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles["nav-links"]}>
          <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
            Home
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? styles.active : ""}
          >
            Services
          </Link>
          <Link
            to="/resources"
            className={location.pathname === "/resources" ? styles.active : ""}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? styles.active : ""}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? styles.active : ""}
          >
            Contact
          </Link>
          <Link
            to="/referral"
            className={location.pathname === "/referral" ? styles.active : ""}
          >
            Referral Form
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          id="mobile-menu-button"
          className={styles["mobile-menu-button"]}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <i data-feather={menuOpen ? "x" : "menu"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles["mobile-menu"]} ${menuOpen ? styles.open : ""}`}
      >
        <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
          Home
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? styles.active : ""}
        >
          Services
        </Link>
        <Link
          to="/resources"
          className={location.pathname === "/resources" ? styles.active : ""}
        >
          Resources
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? styles.active : ""}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? styles.active : ""}
        >
          Contact
        </Link>
        <Link
          to="/referral"
          className={location.pathname === "/referral" ? styles.active : ""}
        >
          Referral Form
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
