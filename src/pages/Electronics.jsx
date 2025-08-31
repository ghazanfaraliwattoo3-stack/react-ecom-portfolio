import React, { useState } from "react";
import Layout from "../component/Layout";
import { products } from "../data_json";
import { Link } from "react-router-dom";

const Electronics = () => {
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState(null);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFilteredCategory([...filteredCategory, value]);
    } else {
      setFilteredCategory(filteredCategory.filter((c) => c !== value));
    }
  };

  const handlePriceChange = (e) => {
    setFilteredPrice(e.target.value);
  };

  const filteredProducts = products.filter((p) => {
    if (filteredCategory.length > 0 && !filteredCategory.includes(p.Category)) {
      return false;
    }

    if (filteredPrice) {
      const [min, max] = filteredPrice.split("-").map(Number);
      if (p.Price < min || p.Price > max) {
        return false;
      }
    }

    return true;
  });

  return (
    <Layout>
      <div className="container-fluid px-3 mt-3">
        <div className="row">
          <div className="col-12 col-md-2">
            <div className="bg-secondary text-center">
              <p className="text-white mb-0 py-2">Filter Product</p>
            </div>
            <div className="mt-2 ms-3">
              <div>
                <input
                  type="checkbox"
                  id="airpodes"
                  value="Airdopes"
                  onChange={handleCategoryChange}
                  className="me-2 mb-2"
                />
                <label htmlFor="airpodes">Airpodes</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="headphone"
                  value="Headphone"
                  onChange={handleCategoryChange}
                  className="me-2 mb-2"
                />
                <label htmlFor="headphone">Headphone</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="watch"
                  value="Watch"
                  onChange={handleCategoryChange}
                  className="me-2 mb-2"
                />
                <label htmlFor="watch">Watch</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="mobile"
                  value="Mobile"
                  onChange={handleCategoryChange}
                  className="me-2 mb-2"
                />
                <label htmlFor="mobile">Mobile</label>
              </div>
            </div>

            <div className="bg-secondary text-center mt-2">
              <p className="text-white mb-0 py-2">Filter Price</p>
            </div>
            <div className="mt-2 ms-3">
              <div>
                <input
                  type="radio"
                  name="price"
                  value="1000-2000"
                  onChange={handlePriceChange}
                  className="me-2 mb-2"
                />
                <label>1000 - 2000</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="price"
                  value="2000-5000"
                  onChange={handlePriceChange}
                  className="me-2 mb-2"
                />
                <label>2000 - 5000</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="price"
                  value="5000-10000"
                  onChange={handlePriceChange}
                  className="me-2 mb-2"
                />
                <label>5000 - 10000</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="price"
                  value="10000-20000"
                  onChange={handlePriceChange}
                  className="me-2 mb-2"
                />
                <label>10000 - 20000</label>
              </div>
            </div>
          </div>

          <div className="col-md-10 col-12 mt-md-0 mt-3">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
              {filteredProducts.map((product) => (
                <Link
                  className="text-decoration-none"
                  to={`/single-product/${product.Id}`}
                >
                  <div className="col h-100" key={product.Id}>
                    <div className="card h-100">
                      <img
                        src={product.Image[0]}
                        className="card-img-top bg-secondary-subtle img-zoom"
                        alt={product.Name}
                      />
                      <div class="text-center text-warning mt-2">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.Name}</h5>
                        <p className="card-text">
                          Rs: {product.Price}
                          <span className="ms-2 text-decoration-line-through text-danger">
                            Rs:{product.Price}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {filteredProducts.length === 0 && (
                <p className="text-center text-danger">No products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Electronics;
