import React from "react";

const BannerGeneric = ({ title, backgroundImage, imageAlt, imageSrc }) => {
  return (
    <section className="banner">
      {backgroundImage ? (
        <h2 className="background-image">{title}</h2>
      ) : (
        <img src={imageSrc} alt={imageAlt} className="banner-image" />
      )}
    </section>
  );
};

export default BannerGeneric;
