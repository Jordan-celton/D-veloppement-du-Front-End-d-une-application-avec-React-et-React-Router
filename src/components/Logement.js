import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logementsData from "../components/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import starsRating from "../assets/icon/Vector.png";
import starsInactive from "../assets/icon/starInactive.png";
import arrowIcon from "../assets/icon/arrow.png";

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isEquipmentsVisible, setIsEquipmentsVisible] = useState(false);

  const handleDescriptionClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const handleEquipmentsClick = () => {
    setIsEquipmentsVisible(!isEquipmentsVisible);
  };

  const renderRatingStars = () => {
    const rating = parseInt(logement.rating);
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(
          <img key={i} src={starsRating} alt="star" className="star" />
        );
      } else {
        stars.push(
          <img key={i} src={starsInactive} alt="empty-star" className="star" />
        );
      }
    }

    return stars;
  };

  return (
    <div>
      <Navigation />
      <Slideshow pictures={logement.pictures} />
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
      <ul className="tag">
        {logement.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
        {renderRatingStars()}
      </ul>
      <h3 onClick={handleDescriptionClick}>
        Description{" "}
        <img
          className={`arrow ${isDescriptionVisible ? "rotated" : ""}`}
          src={arrowIcon}
          alt="arrow"
        />
      </h3>
      {isDescriptionVisible && <p>{logement.description}</p>}
      <h3 onClick={handleEquipmentsClick}>
        Equipements{" "}
        <img
          className={`arrow ${isEquipmentsVisible ? "rotated" : ""}`}
          src={arrowIcon}
          alt="arrow"
        />
      </h3>
      {isEquipmentsVisible && (
        <ul className="equipments">
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default Logement;
