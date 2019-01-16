import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  render() {
    console.log("Render App.js");
    return (
      <React.Fragment>
        <NavBar
        // totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
