import React from "react";
import image2 from "./images/other-art1.png";
import arrow from "./images/white-arrow.svg";
import "./astyles.css";

function List(props) {
  return (
    <div>
      <a href={props.link}>
        <div className="art-card">
          <div className="card-image">
            <img src={props.image} />
          </div>
          <div className="card-content">
            <h3>{props.title}</h3>
            <p>
              Read more <img src={arrow} />
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default List;
