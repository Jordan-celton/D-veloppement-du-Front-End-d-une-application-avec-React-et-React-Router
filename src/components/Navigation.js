import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logo} alt="logo kasa" />
      </div>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
