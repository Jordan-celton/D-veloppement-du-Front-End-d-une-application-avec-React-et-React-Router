import React from "react";
import BannerGeneric from "../components/BannerGeneric";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <BannerGeneric
        title="Chez vous, partout et ailleurs"
        backgroundImage={true}
      />
      <Card />
    </div>
  );
};

export default Home;
