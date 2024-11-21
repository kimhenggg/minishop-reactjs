import React from "react";
import "../../assets/css/cart.css";
import "../../assets/css/about.css";

const Cart = () => {
  return (
    <>
      <div className="banner-wrap">
        <div className="container">
          <div
            className="row justify-content-center d-flex align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="col-md-9">
              <div className="text-uppercase about-heading text-center d-flex flex-column align-items-center justify-content-center">
                <p className="fs-4">Home cart</p>
                <h1 className="fw-bold">MY WISHLIST</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-container">
        <div class="container w-100">
          <div class="row px-4">
            <div
              class="col-md-12"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-once="true"
            >
              <div class="cart-list">
                <table class="table table-borderless">
                  <thead class="table-list">
                    <tr class="text-center">
                      <th scope="col">&nbsp;</th>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <tr class="fs-1 ">
                      <td class="remove-product">
                        <a href="#" class="d-flex justify-content-center">
                          <span class="btn d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-x fs-6"></i>
                          </span>
                        </a>
                      </td>
                      <td class="text-center d-flex justify-content-center">
                        <div class="img-cart img-product-1"></div>
                      </td>
                      <td class="text-center product-name">
                        <div>
                          <h3 class="fw-bold fs-4">NIKE FREE RN 2019 ID</h3>
                          <p class="fs-4 text-secondary">
                            Far far away, behind the word mountains, far from
                            the countries
                          </p>
                        </div>
                      </td>
                      <td class="price text-center text-secondary">$4.90</td>
                      <td class="quantity d-flex​ justify-content-center align-items-center">
                        <div class="input-group">
                          <input
                            type="text"
                            name="quantity"
                            class="form-control input-number text-center fs-4 p-3 px-1"
                            value="1"
                            min="1"
                            max="100"
                          />
                        </div>
                      </td>
                      <td class="price text-center text-secondary">$4.90</td>
                    </tr>
                    <tr class="fs-1  ">
                      <td class="remove-product">
                        <a href="#" class="d-flex justify-content-center">
                          <span class="btn d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-x fs-6"></i>
                          </span>
                        </a>
                      </td>
                      <td class="text-center d-flex justify-content-center">
                        <div class="img-cart img-product"></div>
                      </td>
                      <td class="text-center product-name">
                        <div>
                          <h3 class="fs-4 fw-bold">NIKE FREE RN 2019 ID</h3>
                          <p class="fs-4 text-secondary">
                            Far far away, behind the word mountains, far from
                            the countries
                          </p>
                        </div>
                      </td>
                      <td class="price text-center text-secondary">$15.90</td>
                      <td class="quantity d-flex​ justify-content-center align-items-center">
                        <div class="input-group">
                          <input
                            type="text"
                            name="quantity"
                            class="form-control input-number text-center fs-4 p-3 px-1"
                            value="1"
                            min="1"
                            max="100"
                          />
                        </div>
                      </td>
                      <td class="price text-center text-secondary">$15.90</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="col-lg-5 col-md-6 mt-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div class="border border-1 p-5">
                <h2 class="mb-5 fw-bold">CART TOTALS</h2>
                <p class="d-flex mb-4 text-secondary">
                  <span class="fs-3 w-50">Subtotal</span>
                  <span class="fs-3 w-50"> $20.60</span>
                </p>
                <p class="d-flex mb-4 text-secondary">
                  <span class="fs-3 w-50">Delivery</span>
                  <span class="fs-3 w-50"> $00.60</span>
                </p>
                <p class="d-flex mb-4 text-secondary">
                  <span class="fs-3 w-50">Discount</span>
                  <span class="fs-3 w-50"> $2.00</span>
                </p>
                <div class="w-100 border my-5"></div>
                <p class="d-flex mb-4 text-secondary">
                  <span class="fs-3 w-50 text-uppercase ">Total</span>
                  <span class="fs-3 w-50 text-dark fw-bold"> $20.60</span>
                </p>
              </div>
              <a
                href="#"
                class="checkout-btn fs-5 w-100 btn fw-bold p-4 rounded-pill mt-4"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
