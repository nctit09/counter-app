import React, { Component } from "react";
import { CounterContext } from "../contexts/counterContext";

class NavBar extends Component {
  componentDidMount() {
    let value = this.context;
    console.log("--componentDidMount: " + value);
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bage-bill badge-secondary">
            <CounterContext.Consumer>
              {() => {
                console.log(this.context);
              }}
            </CounterContext.Consumer>

            {/* {this.context.totalCounter} */}
          </span>
        </a>
      </nav>
    );
  }
}
NavBar.contextType = CounterContext;
export default NavBar;
