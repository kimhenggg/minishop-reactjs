import React from "react";
import "../../assets/css/customer.css";
import OwlCarousel from "react-owl-carousel";

const FeetbackCus = () => {
  return (
    <>
      <div className="col-md-7">
        <div className="p-3 ">
          <div
            className="customer-heading mb-5"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <h1>Our satisfied customer says</h1>
            <p className="fs-4 mt-5 text-secondary">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
          </div>
          <OwlCarousel className="custom1 owl-theme mb-5" items={1}>
            <div className="customer-feedback">
              <div className="user-img user-1 mb-5">
                <span className="quote-icon position-absolute d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-quote-left fs-3"></i>
                </span>
              </div>
              <div className="mb-4 text">
                <p className="fs-3 ps-5 mb-5 text-secondary line">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  <span></span>
                </p>
                <h1 className="mb-4 fs-2 fw-bold">Garreth Smith</h1>
                <span className="text-uppercase fs-5 mb-5">Web developer</span>
              </div>
            </div>
            <div className="customer-feedback">
              <div className="user-img user-2 mb-5">
                <span className="quote-icon position-absolute d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-quote-left fs-3"></i>
                </span>
              </div>
              <div className="mb-4 text">
                <p className="fs-3 ps-5 mb-5 text-secondary line">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  <span></span>
                </p>
                <h1 className="mb-4 fs-2 fw-bold">Garreth Smith</h1>
                <span className="text-uppercase fs-5 mb-5">Web developer</span>
              </div>
            </div>
            <div className="customer-feedback">
              <div className="user-img user-3 mb-5">
                <span className="quote-icon position-absolute d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-quote-left fs-3"></i>
                </span>
              </div>
              <div className="mb-4 text">
                <p className="fs-3 ps-5 mb-5 text-secondary line">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  <span></span>
                </p>
                <h1 className="mb-4 fs-2 fw-bold">Garreth Smith</h1>
                <span className="text-uppercase fs-5 mb-5">Web developer</span>
              </div>
            </div>
            <div className="customer-feedback">
              <div className="user-img user-1 mb-5">
                <span className="quote-icon position-absolute d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-quote-left fs-3"></i>
                </span>
              </div>
              <div className="mb-4 text">
                <p className="fs-3 ps-5 mb-5 text-secondary line">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  <span></span>
                </p>
                <h1 className="mb-4 fs-2 fw-bold">Garreth Smith</h1>
                <span className="text-uppercase fs-5 mb-5">Web developer</span>
              </div>
            </div>
            <div className="customer-feedback">
              <div className="user-img user-3 mb-5">
                <span className="quote-icon position-absolute d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-quote-left fs-3"></i>
                </span>
              </div>
              <div className="mb-4 text">
                <p className="fs-3 ps-5 mb-5 text-secondary line">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  <span></span>
                </p>
                <h1 className="mb-4 fs-2 fw-bold">Garreth Smith</h1>
                <span className="text-uppercase fs-5 mb-5">Web developer</span>
              </div>
            </div>
            <div className="customer-feedback">
              <div className="user-img user-2 mb-5">
                <span className="quote-icon position-absolute d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-quote-left fs-3"></i>
                </span>
              </div>
              <div className="mb-4 text">
                <p className="fs-3 ps-5 mb-5 text-secondary line">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  <span></span>
                </p>
                <h1 className="mb-4 fs-2 fw-bold">Garreth Smith</h1>
                <span className="text-uppercase fs-5 mb-5">Web developer</span>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default FeetbackCus;
