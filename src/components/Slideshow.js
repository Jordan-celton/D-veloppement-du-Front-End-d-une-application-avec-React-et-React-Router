// components/Slideshow.js
import React, { useState } from "react";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pictures.map((picture, index) => (
          <div className="carousel-slide" key={index}>
            <img
              src={picture}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-control" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Slideshow;
