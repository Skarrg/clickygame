import React from "react";
import "./style.css";

const Header = props => (
  <div className="header">
    <div className="score">
      Score: {props.score}
    </div>
    <div className="title"> Student Match!</div>
    <div className="bestscore">
      Best Score: {props.bestscore}
    </div>
  </div>
);

export default Header;