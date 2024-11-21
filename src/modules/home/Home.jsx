import React from "react";
import Banner from "./container/Banner";
import Service from "./container/Service";
import Product from "../product/Product";
import Collection from "./container/Collection";
import ProductDeal from "./container/ProductDeal";
import Customer from "../customer/Customer";
import SocialMedia from "./container/SocialMedia";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Product />
      <Collection />
      <ProductDeal />
      <Customer />
      <SocialMedia />
    </div>
  );
};

export default Home;
