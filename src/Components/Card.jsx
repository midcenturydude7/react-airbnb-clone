import React from "react";
import cardImg from "../img/katie-zaferes.png";

export default function Card() {

  return (
    <section className="card--container">
      <div className="card--img__container">
        <img src={cardImg} alt="" className="card--img" />
      </div>
      <div className="card--text__container">
        <div className="card--star-icon__container">
          <p className="card--star-icon__img"><i className="fa-solid fa-star"></i></p>
          <p className="card--star-icon__text">5.0</p>
          <p className="card--star-icon__text">(6) •</p>
          <p className="card--star-icon__text">USA</p>
        </div>
        <p className="card--text__container--text">Life lessons with Katie Zafares</p>
        <p className="card--text__container--text"><span className="bold">From $136</span> / person</p>
      </div>
    </section>
  );
}