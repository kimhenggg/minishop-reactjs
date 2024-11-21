import React from "react";
import "../../../assets/css/service.css";

const Service = () => {
  return (
    <section className="mt-5" style={{ margin: "50px 0" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-md-4 card-container"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="true"
          >
            <div className="text-center p-4 card-contect">
              <span className="fs-1">
                <i className="fa-solid fa-suitcase"></i>
              </span>
              <h2 className="my-5 fw-bold fs-4">Free Shipping</h2>
              <p className="fs-4 text-secondary">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div
            className="col-md-4 card-container"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <div className="text-center p-4 card-contect">
              <span className="fs-1">
                <i className="fa-solid fa-person-military-pointing"></i>
              </span>
              <h2 className="my-5 fw-bold fs-4">Support Customer</h2>
              <p className="fs-4 text-secondary">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div
            className="col-md-4 card-container"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <div className="text-center p-4 card-contect">
              <span className="fs-1">
                <i className="fa-solid fa-business-time"></i>
              </span>
              <h2 className="my-5 fw-bold fs-4">Secure Payments</h2>
              <p className="fs-4 text-secondary">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
