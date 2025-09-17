import React from "react";
import styles from "../styles/ReadyToStart.module.scss";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInview";

const ReadyToStart = () => {
  const [ref, isVisible] = useInView();

  return (
    <section ref={ref} className={`${styles.cta} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.content}>
        <h2>Ready to Get Started?</h2>
        <p>
          Take the first step towards compassionate and reliable care for yourself or a loved one.
        </p>
        <div className={styles.actions}>
          <Link to="/referral" className={`${styles.btn} ${styles.primary}`}>
            Make a Referral
          </Link>
          <Link to="/contact" className={`${styles.btn} ${styles.secondary}`}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
