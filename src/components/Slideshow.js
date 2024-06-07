// Slideshow.js
import React, { useEffect, useRef } from "react";

const Slideshow = ({ pictures }) => {
  const slideIndex = useRef(0);
  const slideshowContainer = useRef(null);

  useEffect(() => {
    const nextButton = slideshowContainer.current.querySelector(".next-slide");
    const prevButton = slideshowContainer.current.querySelector(".prev-slide");

    const showSlides = (n) => {
      const slides = slideshowContainer.current.querySelectorAll(".slide");
      if (n >= slides.length) slideIndex.current = 0;
      if (n < 0) slideIndex.current = slides.length - 1;
      slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex.current ? "block" : "none";
      });
    };

    const nextSlide = () => {
      slideIndex.current++;
      showSlides(slideIndex.current);
    };

    const prevSlide = () => {
      slideIndex.current--;
      showSlides(slideIndex.current);
    };

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlides(slideIndex.current);

    return () => {
      nextButton.removeEventListener("click", nextSlide);
      prevButton.removeEventListener("click", prevSlide);
    };
  }, []);

  return (
    <div className="slideshow" ref={slideshowContainer}>
      <button className="prev-slide">&#10094;</button>
      <div className="slides">
        {pictures.map((picture, index) => (
          <div key={index} className="slide">
            <img src={picture} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="next-slide">&#10095;</button>
    </div>
  );
};

export default Slideshow;
