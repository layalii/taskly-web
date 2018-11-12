import React, { Component } from "react";
import "./App.css";
import IMG from "./wave.svg";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="blue-container" />
          <img className="wave" src={IMG} />
        </div>
      </>
    );
  }
}
export default App;
