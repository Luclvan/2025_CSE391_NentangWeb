import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="counter">
        <h2>Counter (Class)</h2>
        <div className="controls">
          <button onClick={this.decrement}>-</button>
          <p>{this.state.count}</p>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
