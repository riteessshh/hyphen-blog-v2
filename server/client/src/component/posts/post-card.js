import React from "react";
import image1 from "../home/images/post-sample-1.png";
import arrow from "../home/images/Arrow.svg";
import { Link } from "react-router-dom";
import "./pstyles.css";

function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p className="byline">by {props.author ? props.author : "anonymous"}</p>
        <p>
          {props.sub ? props.sub : "no content available!"}
          .....
        </p>
      </div>
      {/* <Link to={props.link}>
        Read more <img src={arrow} />
      </Link> */}
    </div>
  );
}
export default Card;
