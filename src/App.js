import React from "react";
import "./styles.css";
import { HashRouter, NavLink, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import WebDev from "./components/pages/WebDev";
import AutoConsult from "./components/pages/AutoConsult";
import Contact from "./components/pages/Contact";
//import Ham from "./components/Hamburger";
import logo from "./images/logo.png";

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

  Routes() {
    return (
      <Route>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/web-development" component={WebDev} />
        <Route path="/automation-consulting" component={AutoConsult} />
        <Route path="/Contact" component={Contact} />
      </Route>
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
        <HashRouter>
          <header>
            <img className="toplogo" alt="logo" src={logo} />
            {this.NavLinks()}
            {this.Ham()}
          </header>
          <main id="content">{this.Routes()}</main>
        </HashRouter>
      </div>
    );
  }
}

export default App;
