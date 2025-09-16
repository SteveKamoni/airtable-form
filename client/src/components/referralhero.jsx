import React, { useEffect } from "react";
import styles from "../styles/formhero.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const FormHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.heroBg}>
      <div
        className={styles.heroContent}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1 className={styles.heroTitle}>Get in Touch</h1>
        <p className={styles.heroSubtitle}>
          We'd love to hear from you. Reach out and let's start a conversation.
        </p>
      </div>
    </section>
  );
};

export default FormHero;
