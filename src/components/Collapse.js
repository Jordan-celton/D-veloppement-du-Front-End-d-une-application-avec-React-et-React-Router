// Collapse.js
import React, { useState } from "react";
import arrowIcon from "../assets/icon/arrow.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="value-item">
        <div className="value-header" onClick={handleToggle}>
          <span className="value-text">{title}</span>
          <img
            className={`arrow ${isOpen ? "rotate" : ""}`}
            src={arrowIcon}
            alt={
              isOpen
                ? "flèche qui pointe vers le haut"
                : "flèche qui pointe vers le bas"
            }
            aria-expanded={isOpen}
          />
        </div>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
