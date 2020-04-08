import React from "react";
import "./HomeDisplay.css";
import me from '../../images/me2.png';

class HomeDisplay extends React.Component {
  render() {
    return (
      <div id="HomeDisplay">
        <span className="big-text top-text">Hi, My name is Andy Hopwood and I'm a developer from Oldham in the untied Kingdom</span>
        <img alt="me at keyboard" className="big-home" src={me} />
        <span className="big-text">I make web applications, websites and business needs automation solutions using various technologies</span>
      </div>
    );
  }
}

export default HomeDisplay;
