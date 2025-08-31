import React from "react";
import Layout from "../component/Layout";
import Slider from "../component/Slider";
import Trending from "../component/Trending";
import { products } from "../data_json";
import Categories from "../component/Categories";
import ProductListing from "../component/ProductListing";
products;
const Home = () => {
  const trendingProducts = products.filter((prod) => prod.Trending == true);
  const uniqueCategories = [...new Set(products.map((p) => p.Category))];
  const catDetail = uniqueCategories.map((cat) => {
    return products.find((p) => p.Category == cat);
  });
  const fashionProducts = products.filter((prod) => prod.Type == "Fashion");
  const electronicProducts = products.filter(
    (prod) => prod.Type == "Electronics"
  );

  return (
    <>
      <Layout>
        <Slider />
        <Categories categories={catDetail} />
        <Trending products={trendingProducts} heading={"Trending Product"} />
        <ProductListing
          heading={"Listing Fashion Product's"}
          products={fashionProducts}
        />
        <ProductListing
          heading={"Listing Electronics Product's"}
          products={electronicProducts}
        />
      </Layout>
    </>
  );
};

export default Home;
