import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logementsData from "./logements.json";

const Card = () => {
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  const handleClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <section className="cards">
      <ul>
        {logements.map((logement) => (
          <li key={logement.id} onClick={() => handleClick(logement.id)}>
            <h3>{logement.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Card;
