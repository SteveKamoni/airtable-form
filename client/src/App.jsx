import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReferralPage from "../src/pages/referralpage"; // Make sure the file name and path match exactly

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referral" element={<ReferralPage />} />
        {/* Later you'll add: */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
