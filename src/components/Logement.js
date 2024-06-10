import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../components/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import starsRating from "../assets/icon/Vector.png";
import starsInactive from "../assets/icon/starInactive.png";
import Collapse from "./Collapse";

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

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
      <div className="logement-header">
        <h2>{logement.title}</h2>
        <div className="host-info">
          <img src={logement.host.picture} alt={logement.host.name} />
          <p>{logement.host.name}</p>
        </div>
      </div>
      <p>{logement.location}</p>
      <section className="logement-details">
        <div className="tag">
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </div>
        <div className="stars">{renderRatingStars()}</div>
      </section>
      <section className="collapse-container">
        <Collapse title="Description" content={<p>{logement.description}</p>} />
        <Collapse
          title="Equipements"
          content={
            <ul className="equipments">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>
      <Footer />
    </div>
  );
};

export default Logement;
