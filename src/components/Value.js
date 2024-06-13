// importe React et la fonction useState depuis la bibliothèque React.
import React, { useState } from "react";
import arrowIcon from "../assets/icon/arrow.png"; // Import de l'icône de flèche
import aboutData from "./about.json"; // Import des données sur les valeurs depuis un fichier JSON

const Value = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  // Définit une fonction nommée CollapseAbout pour gérer l'ouverture et la fermeture des sections.
  const CollapseAbout = (index) => {
    if (openIndexes.includes(index)) {
      //Vérifie si l'index est déjà ouvert. S'il est ouvert, il le retire de la liste.
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Sinon, il l'ajoute à la liste.
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section>
      <ul className="value-list">
        {/* Utilise map pour itérer sur chaque élément de aboutData. */}
        {aboutData.map((item, index) => (
          // Utilise un fragment React pour éviter d'ajouter des nœuds DOM supplémentaires.
          <React.Fragment key={index}>
            <li className="value-item">
              <div className="value-header">
                {/* Affiche le titre */}
                <span className="value-text">{item.title}</span>
                {/* Affiche l'icône de flèche si l'index est ouvert.*/}
                <img
                  className={`arrow ${
                    openIndexes.includes(index) ? "rotate" : ""
                  }`}
                  src={arrowIcon}
                  alt={
                    openIndexes.includes(index)
                      ? "flèche qui pointe vers le haut"
                      : "flèche qui pointe vers le bas"
                  }
                  // Gestion de l'événement onClick pour ouvrir ou fermer la section
                  onClick={() => CollapseAbout(index)}
                />
              </div>
            </li>
            {/* Vérifie si l'index est ouvert, puis affiche le contenu de la section. */}
            {openIndexes.includes(index) && (
              // Affiche le contenu de la section.
              <div className="collapse-content">{item.description}</div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default Value;
