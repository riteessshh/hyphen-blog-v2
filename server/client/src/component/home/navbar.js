import React from "react";
import "./hstyles.css";

function Navbar(props) {
  var divStyle = {
    color: props.color,
  };
  var logoStyle = {
    color: props.logoColor,
  };
  return (
    <div className="navbar" style={divStyle}>
      <div>
        <h1 style={logoStyle}>hyphen</h1>
      </div>
      <div className="navitems">
        <a href="/">home</a>
        <a href="/articles">collection</a>
        <a href="/posts">posts</a>
        <a href="/about">about</a>
        <a href="/contact">conatct</a>
      </div>
    </div>
  );
}

export default Navbar;
