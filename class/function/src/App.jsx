import React, { Component, useState } from 'react';

// 🔹 Counter dùng Class Component
class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 20 }}>
        <h3>Counter (Class Component)</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Tăng</button>
      </div>
    );
  }
}

// 🔹 Counter dùng Function Component
function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: 10 }}>
      <h3>Counter (Function Component)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}

// 🔹 App chính
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h2>So sánh Class vs Function trong JSX (React)</h2>
      <CounterClass />
      <CounterFunction />
    </div>
  );
}

export default App;
