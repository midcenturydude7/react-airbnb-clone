import React from "react";
import logo from "../img/airbnb-logo.png";

export default function Navbar() {
  
  return (
    <nav className="navbar-container">
      <img className="navbar-logo" src={logo} alt="" />
    </nav>
  );
}