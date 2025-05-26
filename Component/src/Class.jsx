import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; //Sử dụng this.state để lưu trạng thái count.
  } //Dùng constructor để khởi tạo state.

  // Hàm tăng count
  increment = () => {
    this.setState({ count: this.state.count + 1 }); //Gọi this.setState(...) để cập nhật state và render lại.
  };

  // Hàm giảm count
  decrement = () => {
    this.setState({ count: this.state.count - 1 }); //Gọi this.setState(...) để cập nhật state và render lại.
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
      //Dùng this để tham chiếu các hàm trong class.
    );
  }
}

export default CounterClass;
