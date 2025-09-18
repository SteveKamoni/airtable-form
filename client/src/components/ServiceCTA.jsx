import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/serviceCTA.module.scss";

const ServiceCTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className={`${styles.ctaSection} ${inView ? styles.animate : ""}`}>
      <div className={styles.container}>
        <h2>Ready to Experience Care That Truly Cares?</h2>
        <p>
          Take the first step toward peace of mind and compassionate support.
          Whether for yourself or a loved one, our team is here to guide you
          with warmth, professionalism, and dedication.
        </p>
        <div className={styles.buttons}>
          <a href="/contact" className={styles.primaryBtn}>
            Book a Free Consultation
          </a>
          <a href="tel:+123456789" className={styles.secondaryBtn}>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
