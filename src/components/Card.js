import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logementsData from "./logements.json";

// Composant fonctionnel Card
const Card = () => {
  // État pour stocker les données des logements
  const [logements, setLogements] = useState([]);

  const navigate = useNavigate();

  // Utilisation de useEffect pour charger les données des logements une seule fois après le montage du composant
  useEffect(() => {
    setLogements(logementsData);
  }, []);

  // Fonction de gestion du clic sur une carte de logement
  const handleClick = (id) => {
    // Navigation vers la page du logement sélectionné en utilisant son ID
    navigate(`/logement/${id}`);
  };

  return (
    <section className="cards">
      <ul>
        {logements.map((logement) => (
          // Chaque élément de la liste représente une carte de logement
          <li
            key={logement.id} // Clé unique pour chaque élément de la liste
            onClick={() => handleClick(logement.id)} // Appel de handleClick avec l'ID du logement au clic
            style={{ backgroundImage: `url(${logement.cover})` }} // Image de fond de la carte
          >
            <h3>{logement.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Card;
