import React from "react";
import styles from "../styles/WhyUs.module.scss";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Trusted Professionals",
      desc: "Our caregivers are fully trained, vetted, and passionate about delivering quality care."
    },
    {
      title: "Personalized Care Plans",
      desc: "We tailor our services to fit the unique needs of every individual and family."
    },
    {
      title: "24/7 Availability",
      desc: "Support and care whenever you need it — day or night."
    },
    {
      title: "Compassionate Approach",
      desc: "We treat every client with dignity, respect, and genuine compassion."
    }
  ];

  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles["section-header"]}>Why Choose Us</h2>
      <p className={styles.intro}>
        Choosing the right home-care service is a big decision. Here’s why families
        trust us to care for their loved ones:
      </p>
      <div className={styles["reasons-grid"]}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles["reason-card"]}>
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
