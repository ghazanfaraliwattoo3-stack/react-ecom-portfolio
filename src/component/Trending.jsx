import React from "react";
import { Link } from "react-router-dom";

const Trending = ({ products, heading }) => {
  return (
    <div className="container-fluid mt-5 px-3">
      <h3 >{heading}</h3>
      {/* row ma gap add kia */}
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3 mt-2">
        {products.map((p, index) => {
          return (
        <Link to={`/single-product/${p.Id}`} key={index} className="col text-decoration-none">
              {/* har col ka content equal height ka liya h-100 */}
              <div className="d-flex gap-2 align-items-center border h-100 p-2 rounded">
                <img src={p.Image[0]} alt="random" width={70} className="img-zoom"/>
                <div>
                  <p className="mb-0 text-dark">{p.Name}</p>
                  <p className="text-secondary">
                    Rs. {p.Price}
                    <span className="ms-2 text-decoration-line-through danger-color">
                      Rs. {p.Price + 100}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
