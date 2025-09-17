import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.scss";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Grid */}
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <h2>Compassionate Care</h2>
          <p>Caring for you with dignity and compassion.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/referral">Referral</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 123 Care St, Wellness City</p>
          <p><FaPhoneAlt /> (123) 456-7890</p>
          <p><FaEnvelope /> info@compassionatecare.com</p>
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

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <p>Subscribe for updates and care tips.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Compassionate Care. All Rights Reserved.</p>
        <div className={styles.legal}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
