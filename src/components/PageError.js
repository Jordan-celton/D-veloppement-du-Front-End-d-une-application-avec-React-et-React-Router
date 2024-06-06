import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page n'existe pas</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;
