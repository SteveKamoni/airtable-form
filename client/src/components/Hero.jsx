import React from "react";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.heroBg}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Referral Submission Portal</h1>
        <p className={styles.heroSubtitle}>
          Submit patient details with confidence. We provide compassionate,
          timely, and secure support to ensure the best possible care.
        </p>
      </div>
    </section>
  );
};

export default Hero;
