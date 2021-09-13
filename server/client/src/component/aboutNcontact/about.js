import React from "react";
import Navbar from "../home/navbar";
import image from "./images/about.png";
import "./extra.css";

function Article() {
  return (
    <div className="outer">
      <Navbar color="black" logoColor="white" />
      <div className="box">
        <img src={image} />
      </div>
      <div className="box-text">
        <h1>ABOUT US</h1>
        <p>
          We here do the best to provide you the latest information about the
          various technology and business.
        </p>
        <button>learn more</button>
      </div>
    </div>
  );
}
export default Article;
