import React, { useState, useEffect, useContext } from "react";
import Layout from "../component/Layout";
import { products } from "../data_json";
import { useParams, Link,NavLink } from "react-router-dom";
import { CartContext } from "../App";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]); // related products

  // cart context
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const product = products.find((p) => p.Id == id);
    setSingleProduct(product);

    // related products filter karo (same category ke products aur current product ko exclude karo)
    if (product) {
      const related = products.filter(
        (p) => p.Category === product.Category && p.Id != product.Id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  const inCart = cart.some((item) => item.Id == id);
  const [mainImage, setMainImage] = useState(
    singleProduct?.Image ? singleProduct.Image[0] : ""
  );

  return (
    <Layout>
      <div className="container-fluid mt-4">
        {singleProduct ? (
          <>
            <div className="row">
              {/* Image Column */}
              <div className="col-md-6 text-center d-flex justify-content-center">
                {/* Thumbnail images */}
                <div className="d-flex flex-column gap-2 me-1">
                  {singleProduct?.Image.map((img, index) => {
                    return (
                      <img
                        key={index}
                        src={img}
                        className=""
                        alt=""
                        style={{
                          width: "70px",
                          height: "70px",
                          cursor: "pointer",
                        }}
                        // hover pr mainImage change ho jaye
                        onMouseEnter={() => setMainImage(img)}
                      />
                    );
                  })}
                </div>

                {/* Main Image */}
                <div>
                  <img
                    src={mainImage?mainImage:singleProduct?.Image[0]}
                    alt=""
                    className="img-fluid rounded img-zoom"
                    style={{ maxWidth: "300px" }}
                  />
                </div>
              </div>

              {/* Details Column */}
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h2>{singleProduct.Name}</h2>
                <p>
                  <span className="fw-semibold">Brand: </span>
                  {singleProduct.Brand}
                </p>
                <p>
                  <span className="fw-semibold">Price: </span>
                  {singleProduct.Price}
                </p>
                <p>
                  <span className="fw-semibold ">Rating: </span>
                  <span
                    className=" text-warning px-1"
                    style={{ background: "#fffd8d " }}
                  >
                    {" "}
                    {singleProduct.Rating}
                    <i className="fa-solid fa-star ms-1"></i>
                  </span>
                </p>
                <p className="w-75">{singleProduct.Description}</p>

                {inCart ? (
                  <NavLink to="/cart" className="btn btn-success w-50">
                    Go to Cart
                  </NavLink>
                ) : (
                  <button
                    className="btn btn-danger w-50"
                    onClick={() => addToCart(singleProduct)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-5">
                <h4>Related Products</h4>
                <div className="row"> 
                  {relatedProducts.map((prod) => (
                    <div key={prod.Id} className="col-md-3 mb-3">
                      <Link
                        to={`/single-product/${prod.Id}`}
                        className="text-decoration-none"
                      >
                        <div className="card h-100 text-center">
                          <img
                            src={prod.Image?.[0]}
                            className="card-img-top img-zoom"
                            alt={prod.Name}
                          />
                          <div className="card-body">
                            <h6>{prod.Name}</h6>
                            <p className="mb-1">Rs.{prod.Price} <span className="text-danger text-decoration-line-through">Rs.{prod.Price}</span></p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default SingleProduct;
