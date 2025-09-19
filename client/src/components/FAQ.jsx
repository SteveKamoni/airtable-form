// src/components/FAQ.jsx
import React, { useState } from "react";
import styles from "../styles/faq.module.scss";

const faqs = [
  {
    question: "What type of resources can I find here?",
    answer:
      "You’ll find caregiving guides, blog posts, case studies, and videos designed to support families and caregivers with practical knowledge.",
  },
  {
    question: "Do I need an account to access resources?",
    answer:
      "No account is required. All resources are freely accessible, though some downloadable guides may ask for your email.",
  },
  {
    question: "Are these resources regularly updated?",
    answer:
      "Yes, we continually add new resources and update existing ones to reflect the latest caregiving practices and insights.",
  },
  {
    question: "Can I share these resources with others?",
    answer:
      "Absolutely. Our goal is to spread caregiving knowledge, so feel free to share articles, guides, and videos with your loved ones.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.question}>
                <h3>{faq.question}</h3>
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={styles.answer}
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
