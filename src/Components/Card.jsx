/* eslint-disable react/prop-types */
import React from "react";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  } else badgeText = "IN-PERSON";
  
  return (
    <div className="card--container">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../img/${props.card.coverImg}`} alt="" className="card--img" />
      <div className="card--text__container">
        <div className="card--star-icon__container">
          <p className="card--star-icon__img"><i className="fa-solid fa-star"></i></p>
          <p className="card--star-icon__text">{props.card.stats.rating}</p>
          <p className="card--star-icon__text">({props.card.stats.reviewCount}) •</p>
          <p className="card--star-icon__text">{props.card.location}</p>
        </div>
        <p className="card--text__container--text">{props.card.title}</p>
        <p className="card--text__container--text"><span className="bold">From ${props.card.price}</span> / person</p>
      </div>
    </div>
  );
}