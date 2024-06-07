import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../components/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";

// Composant fonctionnel Logement
const Logement = () => {
  // Récupération de l'ID de logement à partir des paramètres du fichier JSON
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID dans les données
  const logement = logementsData.find((logement) => logement.id === id);

  return (
    <div>
      <Navigation />
      {/* Utilisation du composant Slideshow */}
      <Slideshow pictures={logement.pictures} />

      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
      <h3>Description</h3>
      <p>{logement.description}</p>

      <Footer />
    </div>
  );
};

export default Logement;
