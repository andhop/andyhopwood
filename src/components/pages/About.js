import React from "react";
import Link from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div className="content-row">
          <div className="left-sidebar"  id="aboutLinks">
            Links
          </div>
          <div className="right-sidebar" id="aboutContent">
            content
          </div>
        </div>
      </div>
      
    )

  }
}

export default About;
