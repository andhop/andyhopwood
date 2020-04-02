import React from "react";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: "0"
    };
  }
  showMenu = e => {
    e.preventDefault();
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
  render() {
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
}

export default Hamburger;
