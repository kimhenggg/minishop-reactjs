import React from "react";
import "../../../assets/css/categories.css";
import product1 from "../../../assets/images/product-1.png";
import product2 from "../../../assets/images/product-2.png";
import product3 from "../../../assets/images/product-3.png";
import product4 from "../../../assets/images/product-4.png";
import product5 from "../../../assets/images/product-5.png";
import product6 from "../../../assets/images/product-6.png";
import product7 from "../../../assets/images/product-7.png";
import product8 from "../../../assets/images/product-8.png";

export const Catecories = () => {
  return (
    <div class="bg-light shop-shose-container">
      <div class="container bg-light ">
        <div class="row px-3">
          <div class="col-md-8 col-lg-10 order-md-last">
            <div class="row my-5">
              <div
                class="col-md-12 col-lg-4 mb-5 px-4"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-once="true"
              >
                <div class="product-item p-0 position-relative w-100">
                  <a href="#" class="d-flex position-relative mb-3">
                    <img class="w-100" src={product1} alt="product1" />
                    <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
                      <div class="overlay-circle fs-1 ">
                        <i class="fa-solid fa-circle fs-1"></i>
                      </div>
                    </div>
                  </a>
                  <div class="product-detail position-relative">
                    <div class="text-detail bg-white w-100 py-4 px-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-5 text-uppercase text-secondary">
                          lifestyle
                        </span>
                        <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <h5 class="fw-bold my-3">NIKE FREE RN 2019 ID</h5>
                      <span class="fs-4">$120.00</span>
                    </div>
                    <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                      <a
                        href="#"
                        class="w-50 btn bg-dark text-white py-3 px-0 me-2"
                      >
                        Add to card +
                      </a>
                      <a
                        href="#"
                        class="w-50 btn bg-white text-black py-3 px-0"
                      >
                        Buy now
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-4 mb-5 px-4"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-once="true"
              >
                <div class="product-item p-0 position-relative w-100">
                  <a href="#" class="d-flex position-relative mb-3">
                    <img class="w-100" src={product2} alt="product2" />
                    <span class="status fs-4 text-uppercase position-absolute top-0 ">
                      50% off
                    </span>
                    <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
                      <div class="overlay-circle fs-1 ">
                        <i class="fa-solid fa-circle fs-1"></i>
                      </div>
                    </div>
                  </a>
                  <div class="product-detail position-relative">
                    <div class="text-detail bg-white w-100 py-4 px-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-5 text-uppercase text-secondary">
                          lifestyle
                        </span>
                        <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <h5 class="fw-bold my-3">NIKE FREE RN 2019 ID</h5>
                      <div class="price-item">
                        <span class="fs-4 text-decoration-line-through text-dark me-3">
                          $120.00
                        </span>
                        <span class="fs-4">$80.00</span>
                      </div>
                    </div>
                    <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                      <a
                        href="#"
                        class="w-50 btn bg-dark text-white py-3 px-0 me-2"
                      >
                        Add to card +
                      </a>
                      <a
                        href="#"
                        class="w-50 btn bg-white text-black py-3 px-0"
                      >
                        Buy now
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-4 mb-5 px-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="product-item p-0 position-relative w-100">
                  <a href="#" class="d-flex position-relative mb-3">
                    <img class="w-100" src={product3} alt="product3" />
                    <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
                      <div class="overlay-circle fs-1 ">
                        <i class="fa-solid fa-circle fs-1"></i>
                      </div>
                    </div>
                  </a>
                  <div class="product-detail position-relative">
                    <div class="text-detail bg-white w-100 py-4 px-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-5 text-uppercase text-secondary">
                          lifestyle
                        </span>
                        <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <h5 class="fw-bold my-3">NIKE FREE RN 2019 ID</h5>
                      <span class="fs-4">$120.00</span>
                    </div>
                    <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                      <a
                        href="#"
                        class="w-50 btn bg-dark text-white py-3 px-0 me-2"
                      >
                        Add to card +
                      </a>
                      <a
                        href="#"
                        class="w-50 btn bg-white text-black py-3 px-0"
                      >
                        Buy now
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-4 mb-5 px-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div class="product-item p-0 position-relative w-100">
                  <a href="#" class="d-flex position-relative mb-3">
                    <img class="w-100" src={product4} alt="product4" />
                    <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
                      <div class="overlay-circle fs-1 ">
                        <i class="fa-solid fa-circle fs-1"></i>
                      </div>
                    </div>
                  </a>
                  <div class="product-detail position-relative">
                    <div class="text-detail bg-white w-100 py-4 px-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-5 text-uppercase text-secondary">
                          lifestyle
                        </span>
                        <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <h5 class="fw-bold my-3">NIKE FREE RN 2019 ID</h5>
                      <span class="fs-4">$120.00</span>
                    </div>
                    <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                      <a
                        href="#"
                        class="w-50 btn bg-dark text-white py-3 px-0 me-2"
                      >
                        Add to card +
                      </a>
                      <a
                        href="#"
                        class="w-50 btn bg-white text-black py-3 px-0"
                      >
                        Buy now
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-4 mb-5 px-4"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-once="true"
              >
                <div class="product-item p-0 position-relative w-100">
                  <a href="#" class="d-flex position-relative mb-3">
                    <img class="w-100" src={product5} alt="product5" />
                    <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
                      <div class="overlay-circle fs-1 ">
                        <i class="fa-solid fa-circle fs-1"></i>
                      </div>
                    </div>
                  </a>
                  <div class="product-detail position-relative">
                    <div class="text-detail bg-white w-100 py-4 px-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-5 text-uppercase text-secondary">
                          lifestyle
                        </span>
                        <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <h5 class="fw-bold my-3">NIKE FREE RN 2019 ID</h5>
                      <span class="fs-4">$120.00</span>
                    </div>
                    <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                      <a
                        href="#"
                        class="w-50 btn bg-dark text-white py-3 px-0 me-2"
                      >
                        Add to card +
                      </a>
                      <a
                        href="#"
                        class="w-50 btn bg-white text-black py-3 px-0"
                      >
                        Buy now
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-4 mb-5 px-4"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-once="true"
              >
                <div class="product-item p-0 position-relative w-100">
                  <a href="#" class="d-flex position-relative mb-3">
                    <img class="w-100" src={product6} alt="product6" />
                    <span class="status fs-4 text-uppercase position-absolute top-0 ">
                      50% off
                    </span>
                    <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
                      <div class="overlay-circle fs-1 ">
                        <i class="fa-solid fa-circle fs-1"></i>
                      </div>
                    </div>
                  </a>
                  <div class="product-detail position-relative">
                    <div class="text-detail bg-white w-100 py-4 px-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-5 text-uppercase text-secondary">
                          lifestyle
                        </span>
                        <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <h5 class="fw-bold my-3">NIKE FREE RN 2019 ID</h5>
                      <div class="price-item">
                        <span class="fs-4 text-decoration-line-through text-dark me-3">
                          $120.00
                        </span>
                        <span class="fs-4">$80.00</span>
                      </div>
                    </div>
                    <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                      <a
                        href="#"
                        class="w-50 btn bg-dark text-white py-3 px-0 me-2"
                      >
                        Add to card +
                      </a>
                      <a
                        href="#"
                        class="w-50 btn bg-white text-black py-3 px-0"
                      >
                        Buy now
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-4 mb-5 px-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="product-item p-0 position-relative w-100">
                  <a href="#" class="d-flex position-relative mb-3">
                    <img class="w-100" src={product7} alt="product7" />
                    <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
                      <div class="overlay-circle fs-1 ">
                        <i class="fa-solid fa-circle fs-1"></i>
                      </div>
                    </div>
                  </a>
                  <div class="product-detail position-relative">
                    <div class="text-detail bg-white w-100 py-4 px-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-5 text-uppercase text-secondary">
                          lifestyle
                        </span>
                        <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <h5 class="fw-bold my-3">NIKE FREE RN 2019 ID</h5>
                      <span class="fs-4">$120.00</span>
                    </div>
                    <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                      <a
                        href="#"
                        class="w-50 btn bg-dark text-white py-3 px-0 me-2"
                      >
                        Add to card +
                      </a>
                      <a
                        href="#"
                        class="w-50 btn bg-white text-black py-3 px-0"
                      >
                        Buy now
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 col-lg-4 mb-5 px-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div class="product-item p-0 position-relative w-100">
                  <a href="#" class="d-flex position-relative mb-3">
                    <img class="w-100" src={product8} alt="product8" />
                    <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
                      <div class="overlay-circle fs-1 ">
                        <i class="fa-solid fa-circle fs-1"></i>
                      </div>
                    </div>
                  </a>
                  <div class="product-detail position-relative">
                    <div class="text-detail bg-white w-100 py-4 px-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-5 text-uppercase text-secondary">
                          lifestyle
                        </span>
                        <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star me-1"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <h5 class="fw-bold my-3">NIKE FREE RN 2019 ID</h5>
                      <span class="fs-4">$120.00</span>
                    </div>
                    <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                      <a
                        href="#"
                        class="w-50 btn bg-dark text-white py-3 px-0 me-2"
                      >
                        Add to card +
                      </a>
                      <a
                        href="#"
                        class="w-50 btn bg-white text-black py-3 px-0"
                      >
                        Buy now
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div class="icon-pre-next d-flex justify-content-center">
                <div class="me-2">
                  <i class="fa-solid fa-angle-left fs-5"></i>
                </div>
                <div class="me-2">
                  <i class="fa-solid fa-1 fs-5"></i>
                </div>
                <div class="me-2">
                  <i class="fa-solid fa-2 fs-5"></i>
                </div>
                <div class="me-2">
                  <i class="fa-solid fa-3 fs-5"></i>
                </div>
                <div class="me-2">
                  <i class="fa-solid fa-4 fs-5"></i>
                </div>
                <div class="me-2">
                  <i class="fa-solid fa-5 fs-5"></i>
                </div>
                <div class="me-2">
                  <i class="fa-solid fa-angle-right fs-5"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-2">
            <div class="my-5">
              <h1 class="fs-2">CATEGORIES</h1>
              <div
                data-id="0"
                class="dropdown-sitebar d-flex flex-column btn-group mt-5 "
              >
                <a
                  href="#"
                  class=" border-0 dropdown-toggle d-flex align-items-center justify-content-between"
                  id="text-bar"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p class="fs-5">MEN'S SHOES</p>
                  <span>
                    <i
                      class="fa-solid fa-plus fs-6 mb-3 me-3"
                      id="sitebar-icon"
                    ></i>
                  </span>
                </a>
                <ul class="border-0 ms-3 ">
                  <li>
                    <a class="dropdown-item fs-5 mb-2" href="#">
                      Sport
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-2" href="#">
                      Casual
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-2" href="#">
                      Running
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-2" href="#">
                      Jordan
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-2" href="#">
                      Soccer
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-2" href="#">
                      Football
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-2" href="#">
                      Lifestyle
                    </a>
                  </li>
                </ul>
              </div>
              <div
                data-id="1"
                class="dropdown-sitebar d-flex flex-column btn-group mt-3 "
              >
                <a
                  href="#"
                  class=" border-0 dropdown-toggle d-flex align-items-center justify-content-between"
                  id="text-bar"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p class="fs-5">WEMEN'S SHOES</p>
                  <span>
                    <i
                      class="fa-solid fa-plus fs-6 mb-3 me-3"
                      id="sitebar-icon"
                    ></i>
                  </span>
                </a>
                <ul class="border-0 ms-3 ">
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Sport
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Casual
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Running
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Jordan
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Soccer
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Football
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Lifestyle
                    </a>
                  </li>
                </ul>
              </div>
              <div
                data-id="2"
                class="dropdown-sitebar d-flex flex-column btn-group mt-3 "
              >
                <a
                  href="#"
                  class=" border-0 dropdown-toggle d-flex align-items-center justify-content-between"
                  id="text-bar"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p class="fs-5">ACCESSORIES</p>
                  <span>
                    <i
                      class="fa-solid fa-plus fs-6 mb-3 me-3"
                      id="sitebar-icon"
                    ></i>
                  </span>
                </a>
                <ul class="border-0 ms-3">
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      T-Shirt
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Jacket
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Shoes
                    </a>
                  </li>
                </ul>
              </div>
              <div
                data-id="3"
                class="dropdown-sitebar d-flex flex-column btn-group mt-3 "
              >
                <a
                  href="#"
                  class=" border-0 dropdown-toggle d-flex align-items-center justify-content-between"
                  id="text-bar"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p class="fs-5">MEN'S SHOES</p>
                  <span>
                    <i
                      class="fa-solid fa-plus fs-6 mb-3 me-3"
                      id="sitebar-icon"
                    ></i>
                  </span>
                </a>
                <ul class="border-0 ms-3">
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      T-Shirt
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Jacket
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5 mb-3" href="#">
                      Shoes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 class="price-reage">PRICE RANGE</h2>
              <p class="fs-4 my-4">Price from:</p>
              <select
                class="form-content form-select form-select-lg mb-3 p-3 py-4 text-start fs-3"
                aria-label=".form-select-lg "
              >
                <option selected value="1" class="fs-3">
                  1
                </option>
                <option value="2" class="fs-3">
                  200
                </option>
                <option value="3" class="fs-3">
                  300
                </option>
                <option value="4" class="fs-3">
                  400
                </option>
                <option value="5" class="fs-3">
                  1000
                </option>
              </select>
              <p class="fs-4 my-4">Price to:</p>
              <select
                class="form-content form-select form-select-lg mb-3 p-3 py-4 text-start fs-3"
                aria-label=".form-select-lg "
              >
                <option selected value="1" class="fs-3">
                  2000
                </option>
                <option value="2" class="fs-3">
                  4000
                </option>
                <option value="3" class="fs-3">
                  6000
                </option>
                <option value="4" class="fs-3">
                  8000
                </option>
                <option value="5" class="fs-3">
                  10000
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
