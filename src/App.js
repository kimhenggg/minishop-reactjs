import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css";
import Layout from "./modules/layout/Layout";
import Home from "./modules/home/Home";
import About from "./modules/about/About";
import Contact from "./modules/contact/Contact";
import Blog from "./modules/blog/Blog";
import Shop from "./modules/shop/Shop";
import Single_product from "./modules/single-product/Single_product";
import Cart from "./modules/cart/Cart";
import Checkout from "./modules/checkout/Checkout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/single_product" element={<Single_product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
