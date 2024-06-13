import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementsData from "../components/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import starsRating from "../assets/icon/Vector.png";
import starsInactive from "../assets/icon/starInactive.png";
import Collapse from "./Collapse";

const Logement = () => {
  // Récupère l'ID du logement à partir des paramètres de l'URL
  const { id } = useParams();
  // useNavigate pour la navigation
  const navigate = useNavigate();
  // Trouve le logement correspondant à l'ID dans les données JSON
  const logement = logementsData.find((logement) => logement.id === id);

  // Si le logement n'est pas trouvé, redirige vers la page d'erreur
  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [logement, navigate]);

  // Fonction pour rendre les étoiles de notation
  const renderRatingStars = () => {
    const rating = parseInt(logement.rating);
    const totalStars = 5;
    const stars = [];

    // Ajoute les étoiles actives et inactives en fonction de la note
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
      {/* Composant de navigation */}
      <Navigation />
      {/* Diaporama des images du logement */}
      <Slideshow pictures={logement.pictures} />
      <section className="details-location">
        <div className="logement-header">
          {/* Titre et localisation du logement */}
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
        <div className="host-info">
          {/* Information de l'hôte */}
          <img src={logement.host.picture} alt={logement.host.name} />
          <p>{logement.host.name}</p>
        </div>
      </section>
      <section className="logement-details">
        <div className="tag">
          {/* Liste des tags du logement */}
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </div>
        <div className="stars">
          {/* Affiche les étoiles de notation */}
          {renderRatingStars()}
        </div>
      </section>
      <section className="collapse-container">
        {/* Sections repliables pour la description et les équipements */}
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
