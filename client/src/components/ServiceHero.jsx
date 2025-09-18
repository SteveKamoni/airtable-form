import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ServiceHero.module.scss";
import heroImg from "../assets/NatureBG.jpg"; // ✅ correct import (make sure file exists)

const ServicesHero = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <header
      ref={ref}
      className={`${styles.hero} ${isVisible ? styles.visible : ""}`}
      style={{ backgroundImage: `url(${heroImg})` }}
      role="banner"
      aria-labelledby="services-hero-title"
    >
      <div className={styles.overlay}></div>
      <div className={styles.inner}>
        <h1 id="services-hero-title">Our Care Services</h1>
        <p>
          Compassionate support designed to improve quality of life for you and
          your loved ones. Explore the services we proudly provide.
        </p>
      </div>
    </header>
  );
};

export default ServicesHero;
