import React from "react";
import { Catecories } from "./components/Catecories";

const Shop = () => {
  return (
    <div className="bg-white">
      <div class="banner-wrap">
        <div class="container">
          <div class="row justify-content-center d-flex align-items-center">
            <div
              class="col-md-9"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div class="text-uppercase about-heading text-center d-flex flex-column align-items-center justify-content-center">
                <p class="fs-4">Home shop</p>
                <h1 class="fw-bold">Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Catecories />
    </div>
  );
};

export default Shop;
