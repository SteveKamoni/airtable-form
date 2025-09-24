import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ResourcesPage from "./pages/ResourcesPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReferralPage from "./pages/referralpage";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/resources" element={<ResourcesPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/referral" element={<ReferralPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
