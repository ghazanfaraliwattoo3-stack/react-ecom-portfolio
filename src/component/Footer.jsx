import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          {/* Logo */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <h4 className="mb-0">REACT E-COM</h4>
          </div>

          {/* CopyRight */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <p className="mb-0 text-center" >
              &copy; {new Date().getFullYear()} REACT E-COM. All rights reserved.
            </p>
          </div>

          {/* Social Icons */} 
          <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end gap-4">
  <Link to={"/"} className="text-white text-decoration-none">Home</Link>
  <Link to={"/fashion"} className="text-white text-decoration-none">Fashion</Link>
  <Link to={"/electronics"} className="text-white text-decoration-none">Electronics</Link>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
