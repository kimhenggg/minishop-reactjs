import React from "react";
import "../../assets/css/customer.css";
import FeedbackCus from "./FeedbackCus";

const Customer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-10">
            <div>
              <div
                className="service d-flex justify-content-center align-items-center py-5 px-4"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-once="true"
              >
                <div className="icon position-relative me-5">
                  <span className="icon-before"></span>
                  <i className="fa-brands fa-square-font-awesome-stroke"></i>
                  <span className="icon-after"></span>
                </div>
                <div>
                  <h2 className="fw-bold mb-3">Free Shipping</h2>
                  <p className="fs-4 text-secondary">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div
                className="service d-flex justify-content-center align-items-center py-5 px-4"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-once="true"
              >
                <div className="icon position-relative me-5">
                  <span className="icon-before"></span>
                  <i className="fa-brands fa-square-font-awesome-stroke"></i>
                  <span className="icon-after"></span>
                </div>
                <div>
                  <h2 className="fw-bold mb-3">Free Shipping</h2>
                  <p className="fs-4 text-secondary">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div
                className="service d-flex justify-content-center align-items-center py-5 px-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="icon position-relative me-5">
                  <span className="icon-before"></span>
                  <i className="fa-regular fa-credit-card"></i>
                  <span className="icon-after"></span>
                </div>
                <div>
                  <h2 className="fw-bold mb-3">Free Shipping</h2>
                  <p className="fs-4 text-white">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div
                className="service d-flex justify-content-center align-items-center py-5 px-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="icon position-relative me-5">
                  <span className="icon-before"></span>
                  <i className="fa-regular fa-heart"></i>
                  <span className="icon-after"></span>
                </div>
                <div className="text-white">
                  <h2 className="fw-bold mb-3">Free Shipping</h2>
                  <p className="fs-4 ">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FeedbackCus />
        </div>
      </div>
    </>
  );
};

export default Customer;
