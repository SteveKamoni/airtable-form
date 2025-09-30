import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/serviceCTA.module.scss";
import { Link } from "react-router-dom";

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
          <Link to="/contact" className={styles.primaryBtn}>
            Book a Free Consultation
          </Link>
          {/* <Link to="/" className={styles.secondaryBtn}>
            Call Us Now
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
