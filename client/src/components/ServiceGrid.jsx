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
  },
  {
    icon: <Utensils size={40} />,
    title: "Homemaker Service",
    description:
      "Help with daily household tasks, ensuring your home remains safe and comfortable.",
    benefits: ["Light cleaning & laundry", "Meal preparation", "Organization help"],
  },
  {
    icon: <HandHeart size={40} />,
    title: "Respite Care",
    description:
      "Temporary relief for family caregivers, ensuring loved ones receive trusted care.",
    benefits: ["Short-term support", "Flexible scheduling", "Peace of mind for families"],
  },
  {
    icon: <HeartPulse size={40} />,
    title: "Personal Care Attendant (PCA)",
    description:
      "Professional assistance with daily living activities for independence and dignity.",
    benefits: ["Bathing & dressing", "Mobility support", "Medication reminders"],
  },
  {
    icon: <Activity size={40} />,
    title: "Wellness Activities",
    description:
      "Engaging programs to keep clients physically active, mentally stimulated, and happy.",
    benefits: ["Gentle exercises", "Recreational activities", "Cognitive support"],
  },
  {
    icon: <Home size={40} />,
    title: "Safe Living Environment",
    description:
      "Support in creating and maintaining a secure, accessible home for clients.",
    benefits: ["Fall prevention", "Home safety checks", "Accessibility adjustments"],
  },
];

const ServicesGrid = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
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
            <button className={styles.cta}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
