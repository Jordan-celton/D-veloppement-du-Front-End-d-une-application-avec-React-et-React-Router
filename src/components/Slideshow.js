import React, { useEffect, useRef, useState } from "react";

const Slideshow = ({ pictures }) => {
  // État pour suivre la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);
  // Référence au conteneur du diaporama
  const slideshowContainer = useRef(null);

  useEffect(() => {
    // Si le diaporama contient plus d'une image
    if (pictures.length > 1) {
      // Récupère les boutons suivant et précédent
      const nextButton =
        slideshowContainer.current.querySelector(".next-slide");
      const prevButton =
        slideshowContainer.current.querySelector(".prev-slide");

      // Fonction pour afficher la diapositive
      const showSlides = (n) => {
        // Récupère toutes les diapositives
        const slides = slideshowContainer.current.querySelectorAll(".slide");
        // Calcule l'index de la nouvelle diapositive
        const newSlide = n >= slides.length ? 0 : n < 0 ? slides.length - 1 : n;
        // Met à jour l'état de la diapositive actuelle
        setCurrentSlide(newSlide);
        // Affiche uniquement la nouvelle diapositive et cache les autres
        slides.forEach((slide, index) => {
          slide.style.display = index === newSlide ? "block" : "none";
        });
      };

      // Fonction pour passer à la diapositive suivante
      const nextSlide = () => {
        showSlides(currentSlide + 1);
      };

      // Fonction pour revenir à la diapositive précédente
      const prevSlide = () => {
        showSlides(currentSlide - 1);
      };

      // Ajoute les gestionnaires d'événements aux boutons
      nextButton.addEventListener("click", nextSlide);
      prevButton.addEventListener("click", prevSlide);

      // Affiche la diapositive initiale
      showSlides(currentSlide);

      // Nettoie les gestionnaires d'événements lors du démontage du composant
      return () => {
        nextButton.removeEventListener("click", nextSlide);
        prevButton.removeEventListener("click", prevSlide);
      };
    }
  }, [currentSlide, pictures]);

  return (
    <section className="slideshow" ref={slideshowContainer}>
      {/* Affiche le bouton précédent si plus d'une image */}
      {pictures.length > 1 && <button className="prev-slide">&#10094;</button>}
      <div className="slides">
        {/* Génère les diapositives */}
        {pictures.map((picture, index) => (
          <div
            key={index}
            className="slide"
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            {/* Affiche l'image de la diapositive */}
            <img src={picture} alt={`Diapositive ${index}`} />
            {/* Affiche la légende si plus d'une image */}
            {pictures.length > 1 && (
              <div className="caption">
                {`${currentSlide + 1} / ${pictures.length}`}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Affiche le bouton suivant si plus d'une image */}
      {pictures.length > 1 && <button className="next-slide">&#10095;</button>}
    </section>
  );
};

export default Slideshow;
