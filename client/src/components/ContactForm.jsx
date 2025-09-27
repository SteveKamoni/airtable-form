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
            <section className={styles.contactFormSection} id="contact-form">
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p className={styles.sectionSubtitle}>
                Have questions or need more information? Fill out the form below and our team will reach out to you.
              </p>

              <div className={styles.formWrapper}>
                          <iframe
            className={styles.airtableEmbed}
            src="https://airtable.com/embed/appXQcUUnu2s5DKku/pagT1uefFjRu9UWWh/form"
            frameBorder="0"
            title="Contact Form"
          ></iframe>
               </div>
            </section>
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
