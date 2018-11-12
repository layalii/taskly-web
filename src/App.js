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
            <p>heloo</p>
            <p>heloo</p>
          </div>
        </div>
      </>
    );
  }
}
export default App;
