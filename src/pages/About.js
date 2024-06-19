import React from "react";
import BannerGeneric from "../components/BannerGeneric";
import Value from "../components/Value";
import aboutImage from "../assets/images/about.png";

const About = () => {
  return (
    <div>
      <BannerGeneric
        imageSrc={aboutImage}
        imageAlt="Photo d'une vallée montagneuse"
        backgroundImage={false}
      />
      <Value />
    </div>
  );
};

export default About;
