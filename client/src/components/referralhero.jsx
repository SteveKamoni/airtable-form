import React from "react";
import styles from "../styles/referralHero.module.scss";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay }
  })
};

const ReferralHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("referral");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      {/* Fade-in background overlay */}
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        className={styles.content}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={textVariant} custom={0.2}>
          Share Compassion, Spread Care
        </motion.h1>

        <motion.p variants={textVariant} custom={0.5}>
          Invite your friends or family to experience our trusted home care services.
          Together, we can make every day more comfortable and fulfilling.
        </motion.p>

        <motion.button
          variants={textVariant}
          custom={0.8}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToForm}
        >
          Refer Someone
        </motion.button>

      </motion.div>
    </section>
  );
};

export default ReferralHero;
