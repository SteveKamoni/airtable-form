import React, { useState } from "react";
import styles from "../styles/airtableform.module.scss";

function AirtableForm() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.formWrapper}>
      {/* Loader text (visible until iframe loads) */}
      {isLoading && <div className={styles.loader}>Loading form…</div>}

      <iframe
        className={`${styles.airtableEmbed} ${isLoading ? styles.hidden : ""}`}
        src="https://airtable.com/embed/apphhDUNaAODSkCt8/pagQQw9r93uaNg4Ht/form"
        frameBorder="0"
        title="Airtable Referral Form"
        onLoad={() => setIsLoading(false)} // hide loader when form is ready
      />
    </div>
  );
}

export default AirtableForm;
