import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/contactSection.module.scss";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

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
              {isLoading && (
                <div className={styles.loaderWrapper}>
                  <div className={styles.loader}></div>
                  <p>Loading form...</p>
                </div>
              )}

              <iframe
                className={styles.airtableEmbed}
                src="https://airtable.com/embed/appXQcUUnu2s5DKku/pagT1uefFjRu9UWWh/form"
                frameBorder="0"
                title="Contact Form"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? "none" : "block" }}
              ></iframe>
            </div>
          </section>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className={styles.infoWrapper}>
          <h2>Contact Information</h2>
            <ul className={styles.infoList}>
              <li><MapPin size={20} /> 405 W 34th St, Sioux Falls, SD</li>
              <li><Phone size={20} /> 605-368-1769</li>
              <li><Mail size={20} /> akdarservices@gmail.com</li>
            </ul>

          <h3>Follow Us</h3>
          <div className={styles.socials}>
            <a href="#"><Facebook size={22} /></a>
            <a href="#"><Twitter size={22} /></a>
            <a href="#"><Instagram size={22} /></a>
          </div>

          {/* Placeholder Map */}
          <div className={styles.mapContainer}>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.1320702052344!2d-96.73297648740343!3d43.52043857098829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878eb5e0d99c919f%3A0xfec39a9989048135!2s405%20W%2034th%20St%2C%20Sioux%20Falls%2C%20SD%2057105%2C%20USA!5e0!3m2!1sen!2ske!4v1759337711801!5m2!1sen!2ske"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
