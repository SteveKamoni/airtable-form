import React from "react";
import styles from "../styles/aboutHero.module.scss";
import aboutHeroImg from "../assets/abouthero.webp"; // ✅ adjust path to your image

const AboutHero = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.overlay}></div>
      <img src={aboutHeroImg} alt="About Compassionate Care" className={styles.bgImage} />

      <div className={styles.content}>
        <h3 className={styles.subtitle}>About Us</h3>
        <h1 className={styles.title}>Caring With Heart, Every Step of the Way</h1>
        <p className={styles.text}>
          At Akdar Home Care Services, we believe in more than just assistance — we bring dignity,
          warmth, and companionship into every home. Our story is one of commitment to improving
          lives, one person at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
