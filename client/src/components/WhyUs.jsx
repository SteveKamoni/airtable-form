import React from "react";
import styles from "../styles/WhyUs.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import useInView from "../hooks/useInview";
import imge from "../assets/WhyUs.webp";

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
          Compassionate, professional, and personalized — our care is designed to support dignity, independence, and meaningful living at home and in the community.
        </p>
        </div>
      <div className={styles.container}>
        {/* Left: Checklist */}
        <div className={styles.content}>
          <h2>Why Choose Akdar Services</h2>
          <p>
          At Akdar Services, we go beyond providing care — we build trust, independence, and dignity into every life we support. Our compassionate team creates personalized care plans, delivers safe and reliable support, and works closely with families to ensure every individual receives the attention and respect they deserve.  
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
