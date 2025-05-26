import React, { useState } from 'react';

function CounterFunction() {
  const [count, setCount] = useState(0);
  //Sử dụng useState để tạo biến count và hàm setCount.
  //Không cần constructor, this, hay phương thức render.

  return (
    <div className="counter">
        <h2>Counter (Function)</h2>
        <div className="controls">
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
  );
  //Đơn giản, dễ đọc, gọn gàng hơn.
}

export default CounterFunction;

