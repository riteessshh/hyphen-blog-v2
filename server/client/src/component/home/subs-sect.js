import React from "react";
import axios from "axios";
import "./hstyles.css";

function Subs() {
  return (
    <div className="cont-sect">
      <div className="info">
        <h1>get subscription to our newsletter!</h1>
        <p>don't worry we won't spam you.</p>
      </div>
      <div className="getmail">
        <input placeholder="enter your email here..." />
        <button>subscribe</button>
      </div>
      <div className="message">
        <h2>more features coming soon....</h2>
      </div>
    </div>
  );
}

export default Subs;
