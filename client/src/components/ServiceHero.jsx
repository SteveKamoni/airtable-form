import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ServiceHero.module.scss";
import heroImg from "../assets/NatureBG.jpg"; 


const ServicesHero = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // stops observing once visible
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
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
        <button className={styles.secondaryBtn}>Refer a Loved One</button>        
      </div>
    </header>
  );
};

export default ServicesHero;
