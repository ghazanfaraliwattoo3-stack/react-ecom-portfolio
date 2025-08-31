import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../App";

const Header = () => {
  let { cart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg p-0 navbar-dark bg-dark">
      <div className="container-fluid  py-2 px-3">
        <NavLink className="navbar-brand text-decoration-none" to="/">
          REACT E-COM
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto text-center">
            <li className="nav-item">
              <NavLink className="nav-link  text-decoration-none" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fashion">
                Fashion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/electronics">
                Electronics
              </NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <span className="me-2 pointer">
              <i className="fa-solid fa-heart fs-4"></i>
            </span>
            <span style={{ position: "relative" }}>
              <span
                className="badge bg-danger rounded-circle "
                style={{ position: "absolute", right: "-10px", top: "-12px" }}
              >
                {cart.length}
              </span>
              <Link to={"/cart"} className="text-decoration-none text-dark"> 
              <i className="fa-solid fa-cart-shopping fs-4 pointer text-white" ></i></Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
