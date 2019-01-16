import React, { Component } from "react";
import Counter from "./counter";
import { CounterContext } from "../contexts/counterContext";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
    totalCounter: 0
  };
  handleDelete = counterId => {
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    // clone 1 array to new array
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    let totalCounter = counters.filter(c => c.value > 0).length;

    this.setState({ counters, totalCounter });
  };
  handleDecrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);

    counters[index].value--;
    let totalCounter = counters.filter(c => c.value > 0).length;

    this.setState({ counters, totalCounter });
  };
  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    let { counters } = this.state;

    return (
      <div>
        <button className="btn-primaty btn-sm m-2" onClick={this.handleReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
