import React, { Component } from "react";
import MainContainer from "./components/mainContainer";
import Login from "./components/login.jsx";

class App extends Component {
  render() {
    return (
      <div className="wholeScreen">
        <div className="top">
          <h1>Game of Games!</h1>
          <Login />
        </div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
