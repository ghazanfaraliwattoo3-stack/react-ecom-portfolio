import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Fashion from "./pages/Fashion";

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExist = prevCart.find((item) => item.Id === product.Id);

      if (itemExist) {
        return prevCart.map((item) =>
          item.Id === product.Id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  // Increase Qty
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.Id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease Qty
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.Id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.Id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQty, increaseQty }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
