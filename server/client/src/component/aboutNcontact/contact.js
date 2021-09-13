import React from "react";
import Navbar from "../home/navbar";
import image from "./images/contact.png";
import "./extra.css";

function Article() {
  return (
    <div className="outer">
      <Navbar color="black" logoColor="white" />
      <div className="box">
        <img src={image} />
      </div>
      <div className="box-text1">
        <h1>CONTACT US</h1>
        <div className="info-entry">
          <label>email</label>
          <input placeholder="@mail.com" />
          <label>message</label>
          <textarea placeholder="write something here...." />
          <button>send</button>
        </div>
      </div>
    </div>
  );
}
export default Article;
