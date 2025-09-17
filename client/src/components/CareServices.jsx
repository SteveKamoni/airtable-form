import React from "react";
import styles from "../styles/CareServices.module.scss";
import { FaUserFriends, FaUtensils, FaHandsHelping, FaBath } from "react-icons/fa";
import useInView from "../hooks/useInview";

const services = [
  {
    icon: <FaUserFriends />,
    title: "Companion Service",
    desc: "Friendly conversations, emotional support, and companionship to brighten everyday life."
  },
  {
    icon: <FaUtensils />,
    title: "Homemaker Service",
    desc: "Help with household tasks — from cooking and cleaning to organizing the home environment."
  },
  {
    icon: <FaHandsHelping />,
    title: "Respite Care",
    desc: "Relief for primary caregivers through temporary, professional support when needed most."
  },
  {
    icon: <FaBath />,
    title: "Personal Care Attendant",
    desc: "Assistance with daily activities such as bathing, dressing, mobility, and personal hygiene."
  }
];

const CareServices = () => {
  const [sectionRef, isVisible] = useInView();

  return (
    <section ref={sectionRef} className={`${styles.services} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.header}>
        <h2>Our Care Services</h2>
        <p>
          Compassionate, professional, and personalized — our services are designed to meet your unique needs with dignity and respect.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareServices;
