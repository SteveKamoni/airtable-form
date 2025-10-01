import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.scss";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Grid */}
      <div className={styles.top}>
        {/* Brand + Logo */}
        <div className={styles.brand}>
          <img src={logo} alt="Akdar Services Logo" className={styles.logo} />
          <h2>Akdar Services</h2>
          <p>Delivering trusted, personalized home and community-based care with dignity, independence, and compassion.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/referral">Referral</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 405 W 34th St, Sioux Falls, SD</p>
          <p><FaPhoneAlt /> 605-368-1769</p>
          <p><FaEnvelope /> akdarservices@gmail.com</p>
        </div>

        {/* Socials */}
        <div className={styles.socials}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Akdar Services. All Rights Reserved.</p>
        <div className={styles.legal}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
