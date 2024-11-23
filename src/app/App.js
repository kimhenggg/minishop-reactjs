import '../_minishop/assets/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../_minishop/layout/Layout";
import HomePage from "./modules/home/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<HomePage/>}/>
              </Route>
              <Route path="*" element={""}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
