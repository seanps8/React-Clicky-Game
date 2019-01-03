import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
  return (
    <nav>
      <ul>
        <li className="brand animated lightSpeedIn">
          <a href="/react-clicky-game/">MLB Clicky Game</a>
        </li>

        <li id="rw">{props.rightWrong}</li>

        <li id="score">Score: {props.currentScore} | Top Score: {props.topScore}</li>
      </ul>
      
      
    </nav>
  );
}

export default Navbar;
