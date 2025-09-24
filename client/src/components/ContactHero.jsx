import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/contactHero.module.scss";

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className={styles.hero}>
      <div className={`${styles.content} ${isVisible ? styles.animate : ""}`}>
        <h3>Let’s Connect</h3>
        <h1>We’re Here to Support You and Your Loved Ones</h1>
        <p>
          Reach out today to learn more about our compassionate care services
          or to discuss how we can tailor support to meet your family’s unique needs.
        </p>
        <button onClick={scrollToForm} className={styles.ctaBtn}>
          Contact Us Now
        </button>
      </div>
    </section>
  );
};

export default ContactHero;
