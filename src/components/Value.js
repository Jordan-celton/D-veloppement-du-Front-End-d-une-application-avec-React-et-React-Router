import React, { useState } from "react";
import arrowIcon from "../assets/icon/arrow.png";
import aboutData from "./about.json";

const Value = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCollapse = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section>
      <ul className="value-list">
        {aboutData.map((item, index) => (
          <React.Fragment key={index}>
            <li className="value-item">
              <div className="value-header">
                <span className="value-text">{item.title}</span>
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
                  onClick={() => toggleCollapse(index)}
                  aria-expanded={openIndexes.includes(index)}
                />
              </div>
            </li>
            {openIndexes.includes(index) && (
              <div className="collapse-content">{item.description}</div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default Value;
