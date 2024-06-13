// Importation de la bibliothèque React
import React from "react";

// Importation du composant NavLink depuis react-router-dom pour la navigation
import { NavLink } from "react-router-dom";

// Importation de l'image du logo
import logo from "../assets/logo/logo.png";

// Définition du composant Navigation
const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        {/* Affichage de l'image du logo avec un texte alternatif "logo kasa" */}
        <img src={logo} alt="logo kasa" />
      </div>
      <ul>
        {/* Lien de navigation vers la route racine "/" */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        {/* Lien de navigation vers la route "/about" */}
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
