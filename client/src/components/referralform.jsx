import React from "react";
import styles from "../styles/airtableform.module.scss";

function AirtableForm() {
  return (
    <div className={styles.formWrapper}>
      <iframe
        className={styles.airtableEmbed}
        src="https://airtable.com/embed/apphhDUNaAODSkCt8/pagQQw9r93uaNg4Ht/form"
        frameBorder="0"
        title="Airtable Referral Form"
      />
    </div>
  );
}

export default AirtableForm;
