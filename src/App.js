import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./components/Logement";
import ErrorPage from "./pages/ErrorPage";
import Navigation from "./components/Navigation"; // Importation du composant Navigation
import Footer from "./components/Footer"; // Importation du composant Footer

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation /> {/* Ajout du composant Navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer /> {/* Ajout du composant Footer */}
      </div>
    </BrowserRouter>
  );
};

export default App;
