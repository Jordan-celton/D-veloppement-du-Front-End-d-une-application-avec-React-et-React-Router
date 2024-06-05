import React from "react";
import bannerImage from "../assets/images/about.png";

const BannerAbout = () => {
  return (
    <section className="banner-about">
      <img
        src={bannerImage}
        alt="photo d'une vallée montagneuse"
        className="banner-image"
      />
    </section>
  );
};

export default BannerAbout;
