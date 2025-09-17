import React from "react";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Compassionate Care, Right Where You Belong — At Home.</h3>
        <h1 className={styles.title}>
          Compassionate Homecare <br /> for Your Loved Ones
        </h1>
        <p className={styles.description}>
          We bring reliable, professional support tailored to each individual’s needs.
          From daily assistance to specialized care, we treat every client like family.
          Our caregivers are trained, trusted, and guided by compassion in every step.
          Because home isn’t just where you live — it’s where you feel safe, valued, and loved.
        </p>
        <div className={styles.ctaGroup}>
          <button className={styles.primaryBtn}>About Us</button>
          <button className={styles.secondaryBtn}>Refer a Loved One</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
