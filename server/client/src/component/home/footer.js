import React from "react";
import "./hstyles.css";
import pinterest from "./images/pinterest.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import discord from "./images/discord.png";
import youtube from "./images/youtube.png";

function Footer() {
  return (
    <div className="footer">
      <div className="box1">
        <div className="logo">
          <h1>hyphen</h1>
        </div>
        <div className="social">
          <a href="#">
            <img src={pinterest} />
          </a>
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={discord} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={youtube} />
          </a>
        </div>
      </div>
      <div className="box2">
        <div>
          <a href="/articles">collection</a>
          <a href="#">post</a>
          <a href="/about">about</a>
        </div>
        <div>
          <a href="/contact">feedback</a>
          <a href="#">support</a>
        </div>
      </div>
      <div className="box3">
        <p>© copyright hyphen</p>
      </div>
    </div>
  );
}

export default Footer;
