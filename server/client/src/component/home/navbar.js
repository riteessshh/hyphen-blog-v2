import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/">home</NavLink>
        <NavLink to="/articles">collection</NavLink>
        <NavLink to="/posts">posts</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">conatct</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
