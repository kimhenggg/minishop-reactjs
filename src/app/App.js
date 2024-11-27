import '../_minishop/assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../_minishop/layout/Layout";
import HomePage from "./modules/home/HomePage";
import AboutPage from "./modules/about/AboutPage";
import ContactPage from "./modules/contact/ContactPage";
import ShopPage from "./modules/shop/ShopPage";
import SingleProductPage from "./modules/single-product/SingleProductPage";
import CartPage from "./modules/cart/CartPage";
import CheckoutPage from "./modules/checkout/CheckoutPage";
import BlogPage from "./modules/blog/BlogPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/contact" element={<ContactPage/>}/>
                  <Route path="/shop" element={<ShopPage/>}/>
                  <Route path="/single-product" element={<SingleProductPage/>}/>
                  <Route path="/cart" element={<CartPage/>}/>
                  <Route path="/checkout" element={<CheckoutPage/>}/>
                  <Route path="/blog" element={<BlogPage/>}/>
              </Route>
              <Route path="*" element={""}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
