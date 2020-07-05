import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./schools/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
