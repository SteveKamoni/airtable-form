import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/missionValues.module.scss";
import { FaHandsHelping, FaBullseye, FaLeaf, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const MissionValues = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const values = [
    { icon: <FaHandsHelping />, title: "Compassion", text: "We care deeply about the people we serve and always put their well-being first." },
    { icon: <FaBullseye />, title: "Excellence", text: "We strive for exceptional quality and continuous improvement in everything we do." },
    { icon: <FaLeaf />, title: "Sustainability", text: "Our solutions are designed with a long-term vision for people and planet." },
    { icon: <FaRocket />, title: "Innovation", text: "We embrace new ideas and technologies to create better outcomes." },
    { icon: <FaUsers />, title: "Community", text: "We believe in building strong, supportive relationships with those we serve." },
    { icon: <FaLightbulb />, title: "Integrity", text: "Honesty and transparency guide all our actions and decisions." },
  ];

  return (
    <section className={styles.missionValues} ref={ref}>
      <div className={`${styles.content} ${visible ? styles.visible : ""}`}>
        <div className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            To redefine the standard of care and support — creating lasting impact by combining compassion, innovation, and unwavering dedication to every individual we serve.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.icon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
