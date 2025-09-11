import React from "react";
import Hero from "../components/Hero";
import AirtableForm from "../components/AirtableForm";
import styles from "../styles/Layout.module.scss";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className={styles.layout}>
      {/* Hero Section */}
      <Hero />
      {/* Contact Form Section */}
        <AirtableForm />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
