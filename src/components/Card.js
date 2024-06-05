import React, { useEffect, useState } from "react";
import logementsData from "./logements.json";

const Card = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <section className="cards">
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>
            <h3>{logement.title}</h3>
            {/* <p>{logement.description}</p> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Card;
