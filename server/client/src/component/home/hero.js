import React from "react";
import "./hstyles.css";
import image1 from "./images/design.svg";
import arrow from "./images/Arrow.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Explore what's going on</h1>
        <p>latest tech and biz information</p>
      </div>
      <div className="hero-image">
        <img src={image1} />
      </div>
    </div>
  );
}

export default Hero;
