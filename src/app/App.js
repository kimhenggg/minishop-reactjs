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
              </Route>
              <Route path="*" element={""}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
