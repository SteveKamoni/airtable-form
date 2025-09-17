import React from "react";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Because every life deserves dignity</h3>
        <h1 className={styles.title}>
          Compassionate Homecare <br /> for Your Loved Ones
        </h1>
        <p className={styles.description}>
          Providing trusted, professional, and heartfelt support — right in the comfort of home.
        </p>
        <div className={styles.ctaGroup}>
          <button className={styles.primaryBtn}>Get Care</button>
          <button className={styles.secondaryBtn}>Refer a Loved One</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
