import React from "react";
import styles from "../styles/Hero.module.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Compassionate Support, Right Where You Belong — At Home.</h3>
        <h1 className={styles.title}>
          Personalized Home & Community Care <br/> for Your Loved Ones
        </h1>
        <p className={styles.description}>
          At Akdar Services, we deliver trusted, professional care that empowers individuals to live with dignity, independence, and choice. From personal assistance to skilled nursing and family respite, our compassionate team works alongside families and caregivers to create safe, meaningful, and fulfilling lives at home and in the community. Because home isn’t just a place — it’s where support, respect, and belonging truly begin.
        </p>
        <div className={styles.ctaGroup}>
          <Link to="/about" className={styles.primaryBtn}>About Us</Link>
          <Link to="referral" className={styles.secondaryBtn}>Refer a Loved One</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
