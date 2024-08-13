import React from "react";
import "../style/hero.css";
export const Hero = () => {
  return (
    <div id="hero-container" className="main">
      <div id="hero-section">
         <h3>WELCOME TO</h3>
         <h1>ULTRAS</h1>
         <img src="./images/ultras-1.png" alt="hero" id=''/>
        <h2>GET OUR APP</h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.otot.ultras&pli=1"
        >
          Download app
        </a>
      </div>
      <div className="overlay"></div>
      <img src="./images/ultras-1.png" alt="hero" className="heroimg"/>
    </div>
  );
};
