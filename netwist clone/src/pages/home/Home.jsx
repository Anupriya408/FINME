import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import HomePage from "../../components/HomePage/HomePage";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <HomePage />
    </div>
  );
};

export default Home;
