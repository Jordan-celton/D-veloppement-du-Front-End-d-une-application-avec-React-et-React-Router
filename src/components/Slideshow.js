import React, { useEffect, useRef, useState } from "react";

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // État pour suivre la diapositive actuelle
  const slideshowContainer = useRef(null); // Référence pour accéder au conteneur du diaporama

  useEffect(() => {
    if (pictures.length > 1) {
      const nextButton =
        slideshowContainer.current.querySelector(".next-slide"); // Bouton pour passer à la diapositive suivante
      const prevButton =
        slideshowContainer.current.querySelector(".prev-slide"); // Bouton pour revenir à la diapositive précédente

      // Fonction pour afficher les diapositives
      const showSlides = (n) => {
        const slides = slideshowContainer.current.querySelectorAll(".slide"); // Toutes les diapositives
        if (n >= slides.length) setCurrentSlide(0); // Si l'index dépasse le nombre de diapositives, revenir à la première
        if (n < 0) setCurrentSlide(slides.length - 1); // Si l'index est négatif, aller à la dernière diapositive
        slides.forEach((slide, index) => {
          slide.style.display = index === currentSlide ? "block" : "none"; // Afficher la diapositive courante et masquer les autres
        });
      };

      // Fonction pour passer à la diapositive suivante
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => {
          const newSlide = prevSlide + 1;
          showSlides(newSlide);
          return newSlide >= pictures.length ? 0 : newSlide; // Si on dépasse la dernière diapositive, revenir à la première
        });
      };

      // Fonction pour revenir à la diapositive précédente
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => {
          const newSlide = prevSlide - 1;
          showSlides(newSlide);
          return newSlide < 0 ? pictures.length - 1 : newSlide; // Si on dépasse la première diapositive, aller à la dernière
        });
      };

      nextButton.addEventListener("click", nextSlide);
      prevButton.addEventListener("click", prevSlide);

      // Afficher la diapositive courante
      showSlides(currentSlide);

      return () => {
        nextButton.removeEventListener("click", nextSlide);
        prevButton.removeEventListener("click", prevSlide);
      };
    }
  }, [currentSlide, pictures]);

  return (
    <section className="slideshow" ref={slideshowContainer}>
      {/* Afficher le bouton précédent si plus d'une diapositive */}
      {pictures.length > 1 && <button className="prev-slide">&#10094;</button>}
      <div className="slides">
        {pictures.map((picture, index) => (
          <div key={index} className="slide">
            <img src={picture} alt={`Diapositive ${index}`} />
            {pictures.length > 1 && (
              <div className="caption">
                {`${currentSlide + 1} / ${pictures.length}`}
              </div>
            )}
          </div>
        ))}
      </div>
      {pictures.length > 1 && <button className="next-slide">&#10095;</button>}
    </section>
  );
};

export default Slideshow;
