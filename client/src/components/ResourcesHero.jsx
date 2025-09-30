import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/resourcesHero.module.scss";

const ResourcesHero = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // SSR-safety
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let mounted = true;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && mounted) {
            setIsVisible(true);
            if (typeof obs.unobserve === "function") obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      mounted = false;
      // defensive guards instead of try/catch to avoid unused variables
      if (el && observer && typeof observer.unobserve === "function") {
        observer.unobserve(el);
      }
      if (observer && typeof observer.disconnect === "function") {
        observer.disconnect();
      }
    };
  }, [ref]); // ref is stable; include to satisfy lint rules

  return (
    <section ref={ref} className={`${styles.hero} ${isVisible ? styles.animate : ""}`}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Your Trusted Homecare Resource Center</h1>
          <p>
            Guides, tips, and expert insights to support you and your loved ones
            in every step of the care journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
