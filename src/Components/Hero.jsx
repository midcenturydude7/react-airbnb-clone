import React from "react";
import heroImage from "../img/photo-grid.png";

export default function Hero() {

  return (
    <section className="hero--container">
      <img className="hero--img" src={heroImage} alt="Image grid of various online experiences" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts&#8212;all without leaving home.</p>
    </section>
  );
}