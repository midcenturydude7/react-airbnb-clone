/* eslint-disable react/jsx-key */
import React from "react";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import data from "./data";

function App() {
  
  const cards = data.map((card) => {
    return (
      <Card 
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    ); 
  }); 

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card--row">{cards}</section>
    </div>
  );
}

export default App;
