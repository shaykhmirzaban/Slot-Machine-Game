import React from "react";
import "../style/Navbar.css";

function Navbar() {
  return (
    <h1 className="Heading">
      Welcome to
      <span style={{ color: "rgb(191 151 204)", paddingLeft: ".3rem" }}>
        Slot Machine Game
      </span>
    </h1>
  );
}

export default Navbar;
