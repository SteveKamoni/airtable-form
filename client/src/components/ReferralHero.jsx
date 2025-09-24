import React from "react";
import styles from "../styles/referralHero.module.scss";
import { motion } from "framer-motion";

const ReferralHero = () => {
  const scrollToForm = () => {
    document.getElementById("referral-form").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Share Compassion, Spread Care</h1>
        <p>
          Invite your friends or family to experience our trusted home care services.
          Together, we can make every day more comfortable and fulfilling.
        </p>
        <button onClick={scrollToForm}>Refer Someone</button>
      </motion.div>
    </section>
  );
};

export default ReferralHero;
