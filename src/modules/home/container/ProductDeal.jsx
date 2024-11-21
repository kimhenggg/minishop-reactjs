import React from "react";
import "../../../assets/css/productDeal.css";
import product1 from "../../../assets/images/prod-1.png";

const ProductDeal = () => {
  return (
    <>
      <section className="single-product">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="w-100" src={product1} alt="prod-1" />
            </div>
            <div className="col-md-6">
              <div className="deal-time text-white p-3">
                <span className="fs-5 fw-bold">DEAL OF THE MONTH</span>
                <h1 className="fw-bold my-3 mt-4"> Deal of the month</h1>
                <div className="timer pt-2 d-flex text-uppercase">
                  <div className="time">
                    -1478<span>Days</span>
                  </div>
                  <div className="time">
                    21<span>Hours</span>
                  </div>
                  <div className="time">
                    52<span>Minutes</span>
                  </div>
                  <div className="time">
                    60<span>Seconds</span>
                  </div>
                </div>
                <h2 className=" mt-5 mb-4">Nike Free RN 2019 iD</h2>
                <div className="d-flex mb-4">
                  <h3 className="me-3 fs-1 fw-bold text-dark">$120.00</h3>
                  <h3 className="fs-1 fw-bold">$80.00</h3>
                </div>
                <ul className="d-flex ps-0 mt-5">
                  <li className="img single-prod-1"></li>
                  <li className="img single-prod-2"></li>
                  <li className="img single-prod-3"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDeal;
