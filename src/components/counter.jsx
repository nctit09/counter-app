import React, { Component } from "react";

// import { CounterContext } from "../contexts/counterContext";

class Counter extends Component {
  // handleIncrement = product => {
  //   console.log("Handle: ", product, this.state.value);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log(this.props.caichan);
    const { onIncrement, counter, onDelete, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onDecrement(counter)}
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // get property value và đặt tên là count
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
