import React from "react";
import "../../../assets/css/banner.css";
import bg1 from "../../../assets/images/bg_1.png";
import bg2 from "../../../assets/images/bg_2.png";
import OwlCarousel from "react-owl-carousel";


const Banner = () => {
  return (
    <section className="hero-section">
      <OwlCarousel
        className="owl-theme owl-carousel"
        items={1}
        autoplay
        loop
        autoplayHoverPause
        autoplayTimeout={4000}
        animateIn="animate__animated animate__zoomIn"
        animateOut="animate__animated animate__zoomOut"
      >
        <div className="item">
          <div className="container">
            <div className="row ">
              <div className="hero-banner d-flex align-items-center justify-content-center py-5">
                <div className="hero-content col-md text-uppercase w-100 h-100 ">
                  <div className="position-absolute w-100 p-5 animate__animated animate__backInUp">
                    <span className="btn bg-dark text-white fs-6 hero-btn ">
                      #new arrival
                    </span>
                    <h1 className="fs-2 my-5 ">Shose Collection 2019</h1>
                    <p className="fs-5 mt-5">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country.
                    </p>
                    <p className="mt-5">
                      <a
                        href="#"
                        className="btn-banner fs-4 text-white text-uppercase text-decoration-none"
                      >
                        discover now
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-banner position-relative">
                    <img
                      className="w-100 h-100 img-fluid"
                      src={bg1}
                      alt="bg-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <div className="row ">
              <div className="hero-banner d-flex align-items-center justify-content-center py-5">
                <div className="hero-content col-md text-uppercase w-100 h-100  ">
                  <div className="position-absolute w-100 p-5 ">
                    <span className="btn bg-dark text-white fs-6 hero-btn ">
                      #new arrival
                    </span>
                    <h1 className="fs-2 my-5 ">New Shoes Winter Collection</h1>
                    <p className="fs-5 mt-5">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country.
                    </p>
                    <p className="mt-5">
                      <a
                        href="#"
                        className="btn-banner fs-4 text-white text-uppercase text-decoration-none"
                      >
                        discover now
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-banner position-relative">
                    <img className="w-100 h-100" src={bg2} alt="bg-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default Banner;
