import React from "react";
import OneProduct from "./components/OneProduct";

const Single_product = () => {
  return (
    <>
      <div class="banner-wrap">
        <div class="container">
          <div class="row justify-content-center d-flex align-items-center">
            <div class="col-md-9">
              <div class="text-uppercase about-heading text-center d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeInUp">
                <p class="fs-4">Home Shop</p>
                <h1 class="fw-bold">Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OneProduct />
    </>
  );
};

export default Single_product;
