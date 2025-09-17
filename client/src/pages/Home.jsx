import React from "react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import CareServices from "../components/CareServices";
import Testimonials from "../components/Testimonials";
import ReadyToStart from "../components/ReadyToStart";

const Home = () => {
  return (
    <div>
      <Hero/>
      <CareServices/>
      <WhyUs/>
      <Testimonials/>
      <ReadyToStart/>
    </div>
  );
};

export default Home;
