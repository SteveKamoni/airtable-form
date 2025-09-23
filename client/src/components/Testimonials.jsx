import React from "react";
import styles from "../styles/Testimonials.module.scss";
import useInView from "../hooks/useInview";
import test1 from "../assets/test1.webp"
import test2 from "../assets/test2.webp"
import test3 from "../assets/test3.webp"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Daughter of Client",
    image: test1,
    quote:
      "Compassionate Care has been a blessing for our family. The caregivers treat my mother with kindness and respect every day."
  },
  {
    name: "Michael Roberts",
    role: "Client",
    image: test2,
    quote:
      "Their team made me feel comfortable and independent again. I couldn’t have asked for better support."
  },
  {
    name: "Emily Fetcher",
    role: "Family Caregiver",
    image: test3,
    quote:
      "The respite care services gave me peace of mind and the chance to recharge. Truly life-changing."
  }
];

const Testimonials = () => {
  const [ref, isVisible] = useInView();

  return (
    <section ref={ref} className={`${styles.testimonials} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.header}>
        <h2>What Our Clients Say</h2>
        <p>
          Real stories from families and individuals who have experienced the difference
          Compassionate Care makes.
        </p>
      </div>

      <div className={styles.cards}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <img src={t.image} alt={t.name} className={styles.avatar} />
            <p className={styles.quote}>"{t.quote}"</p>
            <h3>{t.name}</h3>
            <span>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
