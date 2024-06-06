import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import Value from "../components/Value";

const About = () => {
  return (
    <div>
      <Navigation />
      <BannerAbout />
      <Value />
      <Footer />
    </div>
  );
};

export default About;
