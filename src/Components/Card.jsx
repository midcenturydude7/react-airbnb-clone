/* eslint-disable react/prop-types */
import React from "react";

export default function Card(props) {

  return (
    <div className="card--container">
      <img src={`../img/${props.img}`} alt="" className="card--img" />
      <div className="card--text__container">
        <div className="card--star-icon__container">
          <p className="card--star-icon__img"><i className="fa-solid fa-star"></i></p>
          <p className="card--star-icon__text">{props.rating}</p>
          <p className="card--star-icon__text">({props.reviewCount}) •</p>
          <p className="card--star-icon__text">{props.location}</p>
        </div>
        <p className="card--text__container--text">{props.title}</p>
        <p className="card--text__container--text"><span className="bold">From ${props.price}</span> / person</p>
      </div>
    </div>
  );
}