import React, { useState } from 'react';

function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
        <h2>Counter (Class)</h2>
        <div className="controls">
          <button onClick={() => setCount(count + 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count - 1)}>+</button>
        </div>
      </div>
  );
}

export default CounterFunction;

