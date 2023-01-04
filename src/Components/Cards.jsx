import React from "react";
import Card from "./Card";
import data from "../data";

export default function Cards() {

  const cards = data.map((card) => {
    return (
      <Card 
        key={card.id}
        card={card}      
      />
    );
  });

  return (
    <section className="card--row">
      {cards}
    </section>
  );
}