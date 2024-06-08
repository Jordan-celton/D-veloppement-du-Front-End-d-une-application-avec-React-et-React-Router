import React, { useEffect, useRef, useState } from "react";

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowContainer = useRef(null);

  useEffect(() => {
    const nextButton = slideshowContainer.current.querySelector(".next-slide");
    const prevButton = slideshowContainer.current.querySelector(".prev-slide");

    const showSlides = (n) => {
      const slides = slideshowContainer.current.querySelectorAll(".slide");
      if (n >= slides.length) setCurrentSlide(0);
      if (n < 0) setCurrentSlide(slides.length - 1);
      slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
      });
    };

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => {
        const newSlide = prevSlide + 1;
        showSlides(newSlide);
        return newSlide >= pictures.length ? 0 : newSlide;
      });
    };

    const prevSlide = () => {
      setCurrentSlide((prevSlide) => {
        const newSlide = prevSlide - 1;
        showSlides(newSlide);
        return newSlide < 0 ? pictures.length - 1 : newSlide;
      });
    };

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlides(currentSlide);

    return () => {
      nextButton.removeEventListener("click", nextSlide);
      prevButton.removeEventListener("click", prevSlide);
    };
  }, [currentSlide, pictures]);

  return (
    <section className="slideshow" ref={slideshowContainer}>
      <button className="prev-slide">&#10094;</button>
      <div className="slides">
        {pictures.map((picture, index) => (
          <div key={index} className="slide">
            <img src={picture} alt={`Diapositive ${index}`} />
            <div className="caption">
              {` ${currentSlide + 1} / ${pictures.length}`}
            </div>
          </div>
        ))}
      </div>
      <button className="next-slide">&#10095;</button>
    </section>
  );
};

export default Slideshow;
