import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/contactSection.module.scss";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="contact-form" ref={ref} className={styles.contactSection}>
      <div className={`${styles.container} ${isVisible ? styles.animate : ""}`}>
        
        {/* LEFT: FORM */}
        <div className={styles.formWrapper}>
          <h2>Send Us a Message</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className={styles.infoWrapper}>
          <h2>Contact Information</h2>
          <ul className={styles.infoList}>
            <li><MapPin size={20} /> 123 Greenfield Avenue, Nairobi, Kenya</li>
            <li><Phone size={20} /> +254 700 123 456</li>
            <li><Mail size={20} /> support@compassionatecare.com</li>
          </ul>

          <h3>Follow Us</h3>
          <div className={styles.socials}>
            <a href="#"><Facebook size={22} /></a>
            <a href="#"><Twitter size={22} /></a>
            <a href="#"><Instagram size={22} /></a>
          </div>

          {/* Placeholder Map */}
          <div className={styles.mapPlaceholder}>
            <p>📍 Google Map Embed (optional)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
