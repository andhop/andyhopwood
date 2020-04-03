import React from "react";
import "./HomeDisplay.css";
import me from '../../images/me2.png';

class HomeDisplay extends React.Component {
  render() {
    return (
      <div id="HomeDisplay">
        <img alt="me at keyboard" className="big-home" src={me} />
      </div>
    );
  }
}

export default HomeDisplay;
