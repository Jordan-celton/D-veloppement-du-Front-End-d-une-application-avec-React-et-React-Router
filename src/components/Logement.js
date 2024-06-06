import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../components/logements.json"; // Importation des données des logements
import Navigation from "../components/Navigation"; // Importation du composant Navigation
import Footer from "../components/Footer"; // Importation du composant Footer

// Composant fonctionnel Logement
const Logement = () => {
  // Récupération de l'ID de logement à partir des paramètres du fichier JSON
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID dans les données
  const logement = logementsData.find((logement) => logement.id === id);

  return (
    <div>
      <Navigation />
      {/* Section des images du logement */}
      <div className="pictures">
        {logement.pictures.map((picture, index) => (
          // Affichage de chaque image du logement
          <img
            key={index} // Clé unique pour chaque image
            src={picture} // URL de l'image
            alt={`Logement ${logement.id} - ${index}`} // Texte alternatif pour l'image
          />
        ))}
      </div>

      <h2>{logement.title}</h2>

      <p>{logement.description}</p>

      <Footer />
    </div>
  );
};

export default Logement;
