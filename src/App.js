import React from "react";
import "./styles.css";
import { BrowserRouter, NavLink} from "react-router-dom";

import logo from "./images/logo.png";
import AllSiteRoutes from "./components/Routing/AllRoutes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: "0"
    };
  }

  showMenu = e => {
    //e.preventDefault();
    const menu = document.getElementsByClassName("top-nav")[0];
    if (menu.style.width === "70%") {
      this.setState({ rotate: "0" });
      console.log(this.state.rotate);
      menu.style.width = "0";
    } else {
      this.setState({ rotate: "180" });
      console.log(this.state.rotate);
      menu.style.width = "70%";
    }

    //menu.style.width = menu.style.width === "70%" ? "0" : "70%";
  };

  NavLinks() {
    return (
      <nav className="top-nav">
        <NavLink
        onClick={this.showMenu.bind(this)}
        exact
        to="/"
        className="nav-item"
        >
        Home
        </NavLink>
        <NavLink
        onClick={this.showMenu.bind(this)}
        to="/About"
        className="nav-item"
        >
        About
        </NavLink>
        <NavLink
        onClick={this.showMenu.bind(this)}
        to="/web-development"
        className="nav-item"
        >
        Web Development
        </NavLink>
        <NavLink
        onClick={this.showMenu.bind(this)}
        to="/automation-consulting"
        className="nav-item"
        >
        Automation Consulting
        </NavLink>
        <NavLink
        onClick={this.showMenu.bind(this)}
        to="/contact"
        className="nav-item"
        >
        Give me a shout
        </NavLink>
      </nav>
    );
  }

 

  Ham() {
    return (
      <div
        style={{ transform: `rotate(${this.state.rotate}deg)` }}
        className="hamburger"
        onClick={this.showMenu.bind(this)}
        onBlur={this.showMenu.bind(this)}
      >
        <div className="thick-line" />
        <div className="thin-line" />
        <div className="thick-line" />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <img className="toplogo" alt="logo" src={logo} />
            {this.NavLinks()}
            {this.Ham()}
          </header>
          <main id="content">
            <AllSiteRoutes />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
