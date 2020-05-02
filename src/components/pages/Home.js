import React from "react";
import HomeDisplay from "../HomeDisplay/HomeDisplay";
import DevToLinks from "../DevToLinks/DevToLinks";
import HomeBlurb from "../HomeBlurb/Homeblurb";

class Home extends React.Component {
  render() {
    return (
    <div>
    <HomeDisplay />
    <HomeBlurb />
    <div className="seperator" />
    <DevToLinks />
    
    </div>
    )
    
  }
}

export default Home;


