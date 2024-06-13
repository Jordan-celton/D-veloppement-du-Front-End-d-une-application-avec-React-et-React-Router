import React from "react"; // Importation de la bibliothèque React
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importation des composants de React Router
import Home from "./pages/Home"; // Importation du composant Home depuis le dossier pages
import About from "./pages/About"; // Importation du composant About depuis le dossier pages
import Logement from "./components/Logement"; // Importation du composant Logement depuis le dossier components
import ErrorPage from "./pages/ErrorPage"; // Importation du composant ErrorPage depuis le dossier pages

// Définition du composant principal App
const App = () => {
  return (
    // BrowserRouter encapsule toute l'application pour permettre l'utilisation de l'API de routage
    <BrowserRouter>
      {/* Routes contient toutes les définitions de routes */}
      <Routes>
        {/* Route pour le chemin racine "/" qui rend le composant Home */}
        <Route path="/" element={<Home />} />

        {/* Route pour le chemin "/about" qui rend le composant About */}
        <Route path="/about" element={<About />} />

        {/* Route paramétrée pour le chemin "/logement/:id" qui rend le composant Logement */}
        <Route path="/logement/:id" element={<Logement />} />

        {/* Route pour le chemin "/error" qui rend le composant ErrorPage */}
        <Route path="/error" element={<ErrorPage />} />

        {/* Route "*" qui capture toutes les URL non définies et rend le composant ErrorPage */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// Exportation du composant App pour pouvoir l'utiliser dans d'autres fichiers
export default App;
