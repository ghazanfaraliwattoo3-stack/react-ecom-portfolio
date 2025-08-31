import React, { useState } from "react";
import Layout from "../component/Layout";
import { products } from "../data_json";
import { Link } from "react-router-dom";

const Fashion = () => {
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState(null);

  // Category filter handle karna
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFilteredCategory([...filteredCategory, value]);
    } else {
      setFilteredCategory(filteredCategory.filter((c) => c !== value));
    }
  };

  // Price filter handle karna
  const handlePriceChange = (e) => {
    setFilteredPrice(e.target.value);
  };

  // Products ko filter karna
  const filteredProducts = products
    .filter((p) => p.Type === "Fashion") // Sirf Fashion type
    .filter((p) => {
      if (filteredCategory.length > 0 && !filteredCategory.includes(p.Category)) {
        return false;
      }
      if (filteredPrice) {
        const [min, max] = filteredPrice.split("-").map(Number);
        if (p.Price < min || p.Price > max) return false;
      }
      return true;
    });

  return (
    <Layout>
      <div className="container-fluid px-3 mt-3" style={{ minHeight: "90vh" }}>
        <div className="row">
          {/* Filter Section */}
          <div className="col-12 col-md-3 col-lg-2 mb-3">
            {/* Category Filter */}
            <div className="bg-secondary text-center rounded">
              <p className="text-white mb-0 py-2">Filter Category</p>
            </div>
            <div className="mt-2 ms-2">
              {["Jacket", "Denim", "Jeans", "Cargo"].map((cat) => (
                <div key={cat}>
                  <input
                    type="checkbox"
                    value={cat}
                    onChange={handleCategoryChange}
                    className="me-2 mb-2"
                  />
                  <label>{cat}</label>
                </div>
              ))}
            </div>

            {/* Price Filter */}
            <div className="bg-secondary text-center mt-3 rounded">
              <p className="text-white mb-0 py-2">Filter Price</p>
            </div>
            <div className="mt-2 ms-2">
              {["0-1000", "1000-2000", "2000-3000", "3000-5000"].map((price) => (
                <div key={price}>
                  <input
                    type="radio"
                    name="price"
                    value={price}
                    onChange={handlePriceChange}
                    className="me-2 mb-2"
                  />
                  <label>{price}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div className="col-12 col-md-9 col-lg-10">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.Id}
                    className="text-decoration-none"
                    to={`/single-product/${product.Id}`}
                  >
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src={product.Image[0]}
                          className="card-img-top img-zoom bg-secondary-subtle"
                          alt={product.Name}
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">{product.Name}</h5>
                          <p className="card-text text-center">
                            Rs: {product.Price}{" "}
                            <span className="ms-1 text-danger text-decoration-line-through">
                              Rs: {product.Price}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center text-danger">No products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fashion;
