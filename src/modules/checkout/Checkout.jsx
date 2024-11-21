import React from "react";

const Checkout = () => {
  return (
    <>
      <div class="banner-wrap">
        <div class="container">
          <div
            class="row justify-content-center d-flex align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div class="col-md-9">
              <div class="text-uppercase about-heading text-center d-flex flex-column align-items-center justify-content-center">
                <p class="fs-4">Home check</p>
                <h1 class="fw-bold">CHECK OUT</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="form-container">
        <div class="container p-lg-5">
          <div
            class="row p-lg-5 p-md-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1 class="fs-2 fw-bold px-4">BILLING DETAILS</h1>
            <div class="col-md-6 px-4 px-3">
              <form action="">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fs-4">
                    Firt Name
                  </label>
                  <input
                    type="email"
                    class="form-control fs-4"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div class="col-md-6 px-4 px-3">
              <form action="">
                <div class="mb-3 ">
                  <label for="exampleInputEmail1" class="form-label fs-4">
                    Last Name
                  </label>
                  <input
                    type="email"
                    class="form-control fs-4"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>

            <div class="col-md-12 my-3 px-4">
              <label for="exampleInputEmail1" class="form-label fs-4 mb-3">
                State / Country
              </label>
              <select
                class="form-select form-select-lg mb-3 fs-3 text-secondary"
                aria-label="Large select example"
              >
                <option selected class="text-secondary fs-4 py-5">
                  Cambodia
                </option>
                <option value="1" class="text-secondary fs-4">
                  Japan
                </option>
                <option value="2" class="text-secondary fs-4">
                  USA
                </option>
                <option value="3" class="text-secondary fs-4">
                  France
                </option>
                <option value="4" class="text-secondary fs-4">
                  France
                </option>
                <option value="5" class="text-secondary fs-4">
                  France
                </option>
              </select>
            </div>

            <div class="col-md-6 px-4 my-3">
              <form action="">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fs-4">
                    Firt Name
                  </label>
                  <input
                    type="email"
                    class="form-control fs-4 mt-1 "
                    placeholder="House number and street name"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div class="col-md-6 px-4 my-3">
              <form action="">
                <div class="mb-3 ">
                  <input
                    type="email"
                    class="form-control fs-4 mt-5"
                    id="exampleInputEmail1"
                    placeholder="Appartment, suite, unit etc: (optional)"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>

            <div class="col-md-6 px-4 my-3">
              <form action="">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fs-4">
                    Town / City
                  </label>
                  <input
                    type="email"
                    class="form-control fs-4"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div class="col-md-6 px-4 my-3">
              <form action="">
                <div class="mb-3 ">
                  <label for="exampleInputEmail1" class="form-label fs-4">
                    Postcode / ZIP *
                  </label>
                  <input
                    type="email"
                    class="form-control fs-4"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>

            <div class="col-md-6 px-4 my-3">
              <form action="">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fs-4">
                    Phone
                  </label>
                  <input
                    type="email"
                    class="form-control fs-4"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div class="col-md-6 px-4 my-3">
              <form action="">
                <div class="mb-3 ">
                  <label for="exampleInputEmail1" class="form-label fs-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control fs-4"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>

            <div class="d-flex my-4 px-4">
              <div class="form-check d-flex justify-content-center align-items-center me-5">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label fs-5" for="flexRadioDefault1">
                  Create an Account?
                </label>
              </div>
              <div class="form-check d-flex justify-content-center align-items-center">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label fs-5" for="flexRadioDefault2">
                  Ship to different address
                </label>
              </div>
            </div>
          </div>
          <div class="row p-lg-5">
            <div
              class="col-md-6 "
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <div class="bg-light  p-5 ">
                <h2 class="check-header">CART TOTAL</h2>
                <p class="d-flex text-secondary my-5">
                  <span class="fs-4 w-50">Subtotal</span>
                  <span class="fs-4 w-50">$20.60</span>
                </p>
                <p class="d-flex text-secondary my-5">
                  <span class="fs-4 w-50">Delivery</span>
                  <span class="fs-4 w-50">$0.00</span>
                </p>
                <p class="d-flex text-secondary my-5">
                  <span class="fs-4 w-50">Discount</span>
                  <span class="fs-4 w-50">$3.00</span>
                </p>
                <p class="d-flex text-secondary my-5">
                  <span class="fs-4 w-100 border "></span>
                </p>
                <p class="d-flex text-secondary my-5 pb-5">
                  <span class="fs-4 w-50 text-uppercase">Total</span>
                  <span class="fs-4 w-50 fw-bold">$17.60</span>
                </p>
              </div>
            </div>
            <div
              class="col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div class="bg-light p-5">
                <h2 class="check-header">PAYMENT METHOD</h2>
                <div class="ps-4">
                  <div class="form-check d-flex align-items-center my-5">
                    <input
                      class="form-check-input me-4"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label fs-4"
                      for="flexRadioDefault1"
                    >
                      Direct Bank Tranfer
                    </label>
                  </div>
                  <div class="form-check d-flex align-items-center my-5">
                    <input
                      class="form-check-input me-4"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      class="form-check-label fs-4"
                      for="flexRadioDefault2"
                    >
                      Check Payment
                    </label>
                  </div>
                  <div class="form-check d-flex align-items-center my-5">
                    <input
                      class="form-check-input me-4"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      class="form-check-label fs-4"
                      for="flexRadioDefault2"
                    >
                      Paypal
                    </label>
                  </div>

                  <div class="form-check d-flex align-items-center my-5">
                    <input
                      class="form-check-input me-4"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label fs-4" for="flexCheckDefault">
                      I have read and accept the terms and conditions
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="order-btn btn rounded-pill w-100 fs-5 text-white"
                >
                  Place an order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
