import React from "react";
import "../../../assets/css/about.css";

const AboutBanner = () => {
  return (
    <>
      <div className="banner-wrap">
        <div className="container">
          <div className="row justify-content-center d-flex align-items-center">
            <div
              className="col-md-9"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="text-uppercase about-heading text-center d-flex flex-column align-items-center justify-content-center">
                <p className="fs-4">Home about</p>
                <h1 className="fw-bold">About us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
