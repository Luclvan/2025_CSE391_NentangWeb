import React, { Component, useState } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity || 1,
    };
  }

  increment = () => {
    this.setState(
      (prev) => ({ quantity: prev.quantity + 1 }),
      () => this.props.onQuantityChange(this.props.id, this.state.quantity)
    );
  };

  decrement = () => {
    this.setState(
      (prev) => ({ quantity: prev.quantity > 1 ? prev.quantity - 1 : 1 }),
      () => this.props.onQuantityChange(this.props.id, this.state.quantity)
    );
  };

  render() {
    const { productName, price, size, color, imgSrc, onRemove } = this.props;
    const { quantity } = this.state;
    const totalPrice = price * quantity;

    return (
      <div className="card rounded-3 mb-4">
        <div className="card-body p-4">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img
                src={imgSrc}
                className="img-fluid rounded-3"
                alt={productName}
              />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <p className="lead fw-normal mb-2">{productName}</p>
              <p>
                <span className="text-muted">Size: </span>
                {size}{" "}
                <span className="text-muted">Color: </span>
                {color}
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button
                className="btn btn-link px-2"
                onClick={this.decrement}
                type="button"
              >
                <i className="fas fa-minus"></i>
              </button>

              <input
                type="number"
                className="form-control form-control-sm"
                value={quantity}
                readOnly
                style={{ maxWidth: "60px", textAlign: "center" }}
              />

              <button
                className="btn btn-link px-2"
                onClick={this.increment}
                type="button"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 className="mb-0">${totalPrice.toFixed(2)}</h5>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <button
                className="text-danger btn btn-link"
                onClick={() => onRemove(this.props.id)}
                type="button"
                aria-label="Remove item"
              >
                <i className="fas fa-trash fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Function Component ShoppingCart quản lý danh sách và tổng tiền
function ShoppingCart() {
  const initialItems = [
    {
      id: 1,
      productName: "Basic T-shirt",
      price: 499,
      size: "M",
      color: "Grey",
      quantity: 2,
      imgSrc:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
    },
    {
      id: 2,
      productName: "Basic T-shirt",
      price: 499,
      size: "M",
      color: "Grey",
      quantity: 1,
      imgSrc:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
    },
  ];

  const [items, setItems] = useState(initialItems);

  // Xử lý cập nhật số lượng từ CartItem
  const handleQuantityChange = (id, quantity) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Xóa món trong giỏ
  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Tính tổng tiền
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Shopping Cart</h3>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>{" "}
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>

            {items.length === 0 && <p>Giỏ hàng trống</p>}

            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                productName={item.productName}
                price={item.price}
                size={item.size}
                color={item.color}
                quantity={item.quantity}
                imgSrc={item.imgSrc}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-outline flex-fill">
                  <input
                    type="text"
                    id="discountCode"
                    className="form-control form-control-lg"
                    placeholder="Discount code"
                  />
                  <label className="form-label" htmlFor="discountCode">
                    Discount code
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg ms-3"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-warning btn-block btn-lg"
                  disabled={items.length === 0}
                >
                  Proceed to Pay (${totalPrice.toFixed(2)})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
