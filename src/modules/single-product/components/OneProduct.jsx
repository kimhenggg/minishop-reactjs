import React from "react";
import product1 from "../../../assets/images/product-1.png";

const OneProduct = () => {
  return (
    <div>
      <section class="single-product-container">
        <div class="container my-5">
          <div class="row">
            <div class="col-lg-6 col-md-12 pe-lg-5 p-5 animate__animated animate__fadeInUp">
              <a
                href="#"
                class="img-prod"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <img class="w-100" src={product1} alt="product-1" />
              </a>
            </div>
            <div class="col-lg-6 p-5 ps-lg-5 single-prod-detail ">
              <h1 class="display-4 ">Nike Free RN 2019 iD</h1>
              <div class="d-flex justify-content-start my-4">
                <div class="fs-4 d-flex align-content-center text-center text-warning">
                  5.0
                  <span class="ms-3 pt-2 text-warning">
                    <i class="fa-regular fa-star fs-5"></i>
                    <i class="fa-regular fa-star fs-5"></i>
                    <i class="fa-regular fa-star fs-5"></i>
                    <i class="fa-regular fa-star fs-5"></i>
                    <i class="fa-regular fa-star fs-5"></i>
                  </span>
                </div>
                <div class="fs-4 ms-5 rating-price">
                  100
                  <span class="fs-4">Rating </span>
                </div>
                <div class="fs-4 ms-5 rating-price">
                  500
                  <span class="fs-4">Sold </span>
                </div>
              </div>
              <h2 class="display-5 my-5">$120.00</h2>
              <p class="fs-4 mb-4 text-secondary">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p class="fs-4 text-secondary">
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
              <select
                class="form-content form-select form-select-lg mb-3 mt-5 text-uppercase border-1 fs-4 text-center"
                aria-label=".form-select-lg example"
              >
                <option selected class="fs-4">
                  Small
                </option>
                <option value="2" class="fs-4">
                  Medium
                </option>
                <option value="3" class="fs-4">
                  Large
                </option>
                <option value="4" class="fs-4">
                  Extra Large
                </option>
              </select>
              <div class="d-flex align-content-center input-item my-4">
                <button class="prev-btn btn border p-3 me-3">
                  <i class="fa-solid fa-minus fs-5"></i>
                </button>
                <input
                  type="text"
                  class="form-control border-1 text-center fs-4"
                  value="1"
                />
                <button class="next-btn btn border p-3 ms-3">
                  <i class="fa-solid fa-plus fs-5"></i>
                </button>
              </div>
              <p class="fs-5 text-dark">80 piece available</p>
              <div class="d-flex">
                <a
                  href="#"
                  class="pay-btn btn rounded-pill  text-white fs-5 me-4"
                >
                  Add to Card
                </a>
                <a href="#" class="buy-btn btn rounded-pill  text-white fs-5">
                  Add to Card
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneProduct;
