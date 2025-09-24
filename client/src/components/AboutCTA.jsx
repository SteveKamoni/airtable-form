import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/aboutCTA.module.scss";
import { FaArrowRight } from "react-icons/fa";

const AboutCTA = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.ctaSection} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.content}>
        <h2>Ready to Experience Care That Feels Like Family?</h2>
        <p>
          Let us walk with you every step of the way. Whether you’re seeking care for a loved one
          or exploring partnership opportunities — we’re here to help.
        </p>
        <div className={styles.actions}>
          <a href="/contact" className={styles.primaryBtn}>
            Contact Us <FaArrowRight />
          </a>
          <a href="/services" className={styles.secondaryBtn}>
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
