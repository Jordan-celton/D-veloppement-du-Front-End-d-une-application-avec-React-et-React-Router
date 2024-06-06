import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../components/logements.json";

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  return (
    <div>
      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
      {/* Affichez les autres détails du logement ici */}
    </div>
  );
};

export default Logement;
