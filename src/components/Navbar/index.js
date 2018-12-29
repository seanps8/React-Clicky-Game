import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul>
        <li className="navbar-brand alignLeft">
          <a href="#">MLB Clicky Game</a>
        </li>
        <li className="nav navbar-nav" id="score">Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
      
      
    </nav>
  );
}

export default Navbar;
