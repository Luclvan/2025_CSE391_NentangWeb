import React, { useState } from 'react';

function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter (Function)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}

export default CounterFunction;
