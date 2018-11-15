import React, { Component } from "react";
import "./App.css";
import IMG from "./wave.svg";
import LOGO from "./logo.png";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="blue-container" />
          <img className="wave" src={IMG} />
        </div>
        <div className="container2">
          <img className="logo" src={LOGO} />
          <div className="tasks-container">
            <div className="header">
              <div className="cls-day">Friday, 10th</div>
              <div className="cls-month">December</div>
            </div>
            <div className="rounded-icon">+</div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
