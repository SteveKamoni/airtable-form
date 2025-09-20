import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/serviceHighlights.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import compassion from "../assets/CompassionSteps.jpg"
import personalized from "../assets/PersonalizedCare.jpg"
import safety from "../assets/SafetyReliable.jpg"


const highlights = [
  {
    id: 1,
    title: "Compassion at Every Step",
    description:
      "Our caregivers provide not only physical support but also emotional companionship, ensuring comfort and dignity for every client.",
    checklist: ["Emotional support", "Respectful assistance", "Trusted relationships"],
    image: compassion,
  },
  {
    id: 2,
    title: "Personalized Care Plans",
    description:
      "Every individual is unique. We tailor our care services to match specific needs, preferences, and health conditions for better outcomes.",
    checklist: ["Custom routines", "Health-focused care", "Family collaboration"],
    image: personalized,
  },
  {
    id: 3,
    title: "Safety & Reliability",
    description:
      "We ensure safe, dependable, and professional care with vetted staff, rigorous training, and continuous monitoring.",
    checklist: ["24/7 availability", "Trained professionals", "Secure processes"],
    image: safety,
  },
];

const HighlightItem = ({ item, reverse }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`${styles.highlight} ${inView ? styles.animate : ""} ${
        reverse ? styles.reverse : ""
      }`}
    >
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.textWrapper}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ul>
          {item.checklist.map((point, i) => (
            <div className={styles.item}>
            <FaCheckCircle className={styles.icon} />
            <li key={i}>{point}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServiceHighlights = () => {
  return (
    <section className={styles.highlights}>
        <h2 className={styles.sectionTitle}>Care That Fits You</h2>
      <div className={styles.container}>
        {highlights.map((item, index) => (
          <HighlightItem
            key={item.id}
            item={item}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;
