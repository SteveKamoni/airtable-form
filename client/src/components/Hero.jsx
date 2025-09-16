import styles from "../styles/Hero.module.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-content"]}>
        <h1>Compassionate Care at Home</h1>
        <p>
          Providing personalized, professional home-care services to support your
          loved ones with dignity and respect.
        </p>
        <Link to="/services" className={styles["cta-btn"]}>
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;
