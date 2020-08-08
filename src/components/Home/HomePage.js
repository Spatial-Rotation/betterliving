import React from "react";
import banner from "./banner.jpg";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home">
      <img className="home__banner" src={banner} alt="banner" />
    </div>
  );
}

export default HomePage;
