import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter (Class)</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Tăng</button>
      </div>
    );
  }
}

export default CounterClass;
