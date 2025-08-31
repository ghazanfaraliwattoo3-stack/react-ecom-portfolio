import React, { useContext } from "react";
import { CartContext } from "../App";
import Layout from "../component/Layout";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  // Calculations
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.Price * item.qty, 0);

  const discount = subtotal > 0 ? Math.round(subtotal * 0.1) : 0; // 10% discount
  const delivery = subtotal > 500 ? 0 : 50; // Free delivery if > 500
  const grandTotal = subtotal - discount + delivery;

  return (
    <Layout>
      <div className="container mt-4" style={{ minHeight: "70vh" }}>
        <h2 className="text-center mt-5 pt-5">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center">Cart is empty</p>
        ) : (
          <div className="row">
            {/* Cart Items */}
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody >
                  {cart.map((item) => (
                    <tr key={item.Id}>
                      <td className="align-middle">
                        <img src={item.Image[0]} alt={item.Name} width="60" />
                      </td>
                      <td className="align-middle">{item.Name}</td>
                      <td className="align-middle">Rs. {item.Price}</td>
                      <td className="align-middle">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Quantity buttons"
                        >
                          <button
                            className="btn btn-sm btn-outline-dark rounded-start"
                            onClick={() => decreaseQty(item.Id)}
                          >
                            -
                          </button>
                          <span className="btn btn-sm btn-light border-dark">
                            {item.qty}
                          </span>
                          <button
                            className="btn btn-sm btn-outline-dark rounded-end"
                            onClick={() => increaseQty(item.Id)}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="align-middle">Rs. {item.Price * item.qty}</td>
                      <td className="align-middle">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeFromCart(item.Id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Price Details */}
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h5 className="mb-3">Price Details</h5>

                <div className="d-flex justify-content-between">
                  <span>Price ({totalItems} items)</span>
                  <span>Rs. {subtotal}</span>
                </div>

                <div className="d-flex justify-content-between text-success">
                  <span>Discount</span>
                  <span>-Rs. {discount}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Delivery Charges</span>
                  <span>{delivery === 0 ? "Free" : `Rs. ${delivery}`}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                  <span>Total Amount</span>
                  <span>Rs. {grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
