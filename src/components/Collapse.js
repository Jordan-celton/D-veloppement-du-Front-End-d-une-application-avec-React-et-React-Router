// Collapse.js
import React, { useState } from "react";
import arrowIcon from "../assets/icon/arrow.png";

const Collapse = ({ title, content }) => {
  // Utilisation de useState pour gérer l'état d'ouverture du contenu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour inverser l'état isOpen lors du clic sur le header
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="details">
      <div className="value-item">
        {/* OnClick appelle handleToggle */}
        <div className="value-header" onClick={handleToggle}>
          <span className="value-text">{title}</span>
          {/* Image de flèche, classe "rotate" ajoutée si isOpen est vrai */}
          <img
            className={`arrow ${isOpen ? "rotate" : ""}`}
            src={arrowIcon}
            alt={
              isOpen
                ? "flèche qui pointe vers le haut"
                : "flèche qui pointe vers le bas"
            }
          />
        </div>
      </div>
      {/* Affiche le contenu seulement si isOpen est vrai */}
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
