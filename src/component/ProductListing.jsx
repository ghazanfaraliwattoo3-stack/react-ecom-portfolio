import React from "react";
import { Link } from "react-router-dom";

const ProductListing = ({ heading, products }) => {
  return (
    <div className="my-5 px-3 container-fluid">
      <h3 className="mb-4">{heading}</h3>
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-3">
        {products.map(
          (product, index) =>
            index < 9 && (
              <Link to={`/single-product/${product.Id}`} key={index} className="col text-decoration-none">
                <div className="card h-100 text-center">
                  <img
                    src={product.Image[0]}
                    className="card-img-top img-zoom"
                    alt={product.Name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.Name}</h5>
                    <p className="card-text text-danger">Rs. {product.Price}</p>
                    <div className="text-warning">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ProductListing;
