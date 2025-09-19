import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/resources" element={<ResourcesPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
