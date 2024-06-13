// Importation de la bibliothèque React
import React from "react";

// Importation du composant NavLink depuis react-router-dom pour la navigation
import { NavLink } from "react-router-dom";

// Importation de l'image du logo
import logo from "../assets/logo/logo.png";

// Définition du composant Navigation
const Navigation = () => {
  return (
    // Élément de navigation principal avec une classe CSS "navigation"
    <nav className="navigation">
      {/* Division pour le logo */}
      <div className="logo">
        {/* Affichage de l'image du logo avec un texte alternatif "logo kasa" */}
        <img src={logo} alt="logo kasa" />
      </div>
      {/* Liste de liens de navigation */}
      <ul>
        {/* Lien de navigation vers la route racine "/" */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          {/* Élément de liste affichant "Accueil" */}
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

// Exportation du composant Navigation pour l'utiliser dans d'autres parties de l'application
export default Navigation;
