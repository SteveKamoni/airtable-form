import React, { useState } from "react";
import styles from "../styles/referralForm.module.scss";

const ReferralForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className={styles.referralSection} id="referral">
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>Refer Someone For Care</h2>
          <p>
            Know someone who could benefit from our trusted homecare services?
            Use the form below to share their details with us. Our team will reach out
            promptly to discuss their care needs and how we can support them.
          </p>
        </div>

        <div className={styles.formWrapper}>
          {isLoading && (
            <div className={styles.loaderWrapper}>
              <div className={styles.loader}></div>
              <p>Loading referral form...</p>
            </div>
          )}

          <iframe
            className={`${styles.airtableEmbed} ${isLoading ? styles.hidden : ""}`}
            src="https://airtable.com/embed/app6oTnetpwFihNjy/pagzrzT42RC5azEwT/form"
            frameBorder="0"
            width="100%"
            height="800"
            title="Referral Form"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ReferralForm;
