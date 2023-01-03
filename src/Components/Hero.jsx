import React from "react";
import heroImage from "../img/photo-grid.png";

export default function Hero() {

  return (
    <main className="main--container">
      <img className="main--hero-img" src={heroImage} alt="Image grid of various online experiences" />
      <h1 className="main--title">Online Experiences</h1>
      <p className="main--text">Join unique interactive activities led by one-of-a-kind hosts&#8212;all without leaving home.</p>
    </main>
  );
}