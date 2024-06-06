import React, { useState } from "react";
import arrowIcon from "../assets/icon/arrow.png";

// je déclare mon composant Collapse avec en prop 'children'.
const Collapse = ({ children }) => {
  // je déclare isOpen avec une valeur initiale 'false' et setIsOpen une fonction pour mettre à jour la valeur isOpen.
  const [isOpen, setIsOpen] = useState(false);
  // toggleCollapse inverse l'état de 'isOpen lorsqu'il est appelé.
  const toggleCollapse = () => {
    // si 'isOpen' est false, il devient 'true' et vice-versa
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        className="arrow"
        src={arrowIcon}
        alt="flèche qui pointe vers le haut/bas"
        // event au click, quand l'image est cliquée 'toggleCollapse' est appelé.
        onClick={toggleCollapse}
        style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
      {/* // si isOpen est true j'affiche le contenu enfant. */}
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

const Value = () => {
  const values = ["Fiabilité", "Respect", "Service", "Sécurité"];

  return (
    <section>
      <ul className="value-list">
        {/* // je parcours chaque élément de mon tableau 'values' et donne un
        élément de liste pour chaque valeur. */}
        {values.map((value, index) => (
          <li key={index} className="value-item">
            <span className="value-text">{value}</span>
            <Collapse></Collapse>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Value;
