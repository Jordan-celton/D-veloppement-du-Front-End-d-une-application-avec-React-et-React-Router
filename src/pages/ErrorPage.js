import React from "react";
import Navigation from "../components/Navigation";
import PageError from "../components/PageError";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navigation />
      <PageError />
      <Footer />
    </div>
  );
};

export default ErrorPage;
