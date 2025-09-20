import React from "react";
import styles from "../styles/WhyUs.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import useInView from "../hooks/useInview";
import imge from "../assets/WhyUs.jpg";

const points = [
  "Compassionate caregivers dedicated to your wellbeing",
  "Flexible plans tailored to individual needs",
  "Trusted and professional support staff",
  "Consistent quality care you can rely on"
];

const WhyUs = () => {
  const [ref, isVisible] = useInView();

  return (
    <section ref={ref} className={`${styles.whyUs} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.header} 
        >
          <h1>WHY US</h1>
           <p>
          Compassionate, professional, and personalized — our services are designed to meet your unique needs with dignity and respect.
        </p>
        </div>
      <div className={styles.container}>
        {/* Left: Checklist */}
        <div className={styles.content}>
          <h2>Why Choose Us</h2>
          <p>
            At Compassionate Care, we go beyond basic assistance. Our focus is on
            building trust, dignity, and lasting relationships with every client.
          </p>
          <ul className={styles.list}>
            {points.map((point, i) => (
              <li
                key={i}
                className={`${styles.item} ${isVisible ? styles.fadeIn : ""}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <FaCheckCircle className={styles.icon} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className={styles.imageSide}>
          <img
            src={imge}
            alt="Caregiver smiling with client"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
