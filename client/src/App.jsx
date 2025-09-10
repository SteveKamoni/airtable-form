import React from "react";
import AirtableForm from "./components/AirtableForm";

function App() {
  return (
    <div>
      {/* You can add a header/intro if needed */}
      <h1 style={{ textAlign: "center", margin: "2rem 0", fontFamily: "sans-serif" }}>
        Referral Form
      </h1>
      
      <AirtableForm />
    </div>
  );
}

export default App;
