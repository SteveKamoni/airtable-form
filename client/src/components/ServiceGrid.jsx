import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ServiceGrid.module.scss";
import { Home, HeartPulse, Users, Utensils, Activity, HandHeart } from "lucide-react";

const services = [
  {
    icon: <Users size={40} />,
    title: "Companion Service",
    description:
      "Meaningful companionship to reduce loneliness and provide emotional support.",
    benefits: ["Conversation & games", "Errand assistance", "Emotional comfort"],
    more: "Our companion services go beyond presence — we carefully match companions based on personality and interests, creating genuine and enriching human connections."
  },
  {
    icon: <Utensils size={40} />,
    title: "Homemaker Service",
    description:
      "Help with daily household tasks, ensuring your home remains safe and comfortable.",
    benefits: ["Light cleaning & laundry", "Meal preparation", "Organization help"],
    more: "We tailor homemaking support to each individual’s lifestyle, ensuring meals, cleaning, and home organization align with personal preferences and routines."
  },
  {
    icon: <HandHeart size={40} />,
    title: "Respite Care",
    description:
      "Temporary relief for family caregivers, ensuring loved ones receive trusted care.",
    benefits: ["Short-term support", "Flexible scheduling", "Peace of mind for families"],
    more: "Our respite care offers caregivers peace of mind by stepping in seamlessly, maintaining continuity of care, and ensuring loved ones receive compassionate support."
  },
  {
    icon: <HeartPulse size={40} />,
    title: "Personal Care Attendant (PCA)",
    description:
      "Professional assistance with daily living activities for independence and dignity.",
    benefits: ["Bathing & dressing", "Mobility support", "Medication reminders"],
    more: "We prioritize dignity and independence while assisting with personal care, tailoring support to each individual’s physical needs and comfort level."
  },
  {
    icon: <Activity size={40} />,
    title: "Wellness Activities",
    description:
      "Engaging programs to keep clients physically active, mentally stimulated, and happy.",
    benefits: ["Gentle exercises", "Recreational activities", "Cognitive support"],
    more: "From light exercise to stimulating games, we help clients maintain vitality, mental clarity, and joy in daily life."
  },
  {
    icon: <Home size={40} />,
    title: "Safe Living Environment",
    description:
      "Support in creating and maintaining a secure, accessible home for clients.",
    benefits: ["Fall prevention", "Home safety checks", "Accessibility adjustments"],
    more: "We help create and maintain safe, accessible home environments — reducing risks and adapting spaces to each individual’s needs."
  },
];

const ServicesGrid = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section ref={ref} className={`${styles.services} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.header}>
        <h2>Our Care Services</h2>
        <p>
          At Compassionate Care, we provide a holistic range of services designed to
          support comfort, dignity, and well-being at home.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <ul className={styles.benefits}>
              {service.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <p className={styles.more}>{service.more}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
