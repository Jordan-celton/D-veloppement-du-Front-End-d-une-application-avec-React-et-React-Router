import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";

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
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
