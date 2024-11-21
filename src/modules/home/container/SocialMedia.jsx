import React from "react";
import "../../../assets/css/social.css";
import image1 from "../../../assets/images/gallery-1.jpg";
import image2 from "../../../assets/images/gallery-2.jpg";
import image3 from "../../../assets/images/gallery-3.jpg";
import image4 from "../../../assets/images/gallery-4.jpg";
import image5 from "../../../assets/images/gallery-5.jpg";
import image6 from "../../../assets/images/gallery-6.jpg";

const SocialMedia = () => {
  return (
    <section class="pt-5">
      <div
        class="container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div class="row text-center d-flex justify-content-center">
          <div class="col-md-8 text-center media-heading">
            <h1 class="mb-5">Follow Us On Instagram</h1>
            <p class="fs-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
          </div>
        </div>
      </div>
      <div
        class=".container-fluid pt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div class="row">
          <div
            class="col-md-4 col-lg-2 p-0"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="true"
          >
            <a
              href="image/gallery-1.jpg"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="gallery img-popup-1 img position-relative d-flex justify-content-center align-items-center">
                <span class="position-absolute d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-instagram fs-3 text-white"></i>
                </span>
              </div>
            </a>
          </div>
          <div
            class="col-md-4 col-lg-2 p-0"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="true"
          >
            <a
              href="image/gallery-2.jpg"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="gallery img-popup-2 img position-relative d-flex justify-content-center align-items-center">
                <span class="position-absolute d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-instagram fs-3 text-white"></i>
                </span>
              </div>
            </a>
          </div>
          <div
            class="col-md-4 col-lg-2 p-0"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <a
              href="image/gallery-3.jpg"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="gallery img-popup-3 img position-relative d-flex justify-content-center align-items-center">
                <span class="position-absolute d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-instagram fs-3 text-white"></i>
                </span>
              </div>
            </a>
          </div>
          <div
            class="col-md-4 col-lg-2 p-0"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <a
              href="image/gallery-2.jpg"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="gallery img-popup-4 img position-relative d-flex justify-content-center align-items-center">
                <span class="position-absolute d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-instagram fs-3 text-white"></i>
                </span>
              </div>
            </a>
          </div>
          <div
            class="col-md-4 col-lg-2 p-0"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <a
              href="image/gallery-2.jpg"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="gallery img-popup-5 img position-relative d-flex justify-content-center align-items-center">
                <span class="position-absolute d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-instagram fs-3 text-white"></i>
                </span>
              </div>
            </a>
          </div>
          <div
            class="col-md-4 col-lg-2 p-0"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <a
              href="image/gallery-2.jpg"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="gallery img-popup-6 img position-relative d-flex justify-content-center align-items-center">
                <span class="position-absolute d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-instagram fs-3 text-white"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered  modal-fullscreen-sm-down">
          <div class="modal-content d-flex justify-content-center align-items-center text-center">
            <div class="modal-body position-relative">
              <div id="carouselExampleControls" class="carousel">
                <div class="container">
                  <div class="row`text-center d-flex justify-content-center align-items-center">
                    <div class="col-md-10">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="modal-header border-0 position-absolute">
                            <div
                              type="button"
                              class="fs-4 border-0 text-white btn"
                              data-bs-dismiss="modal"
                            >
                              <i class="fa-solid fa-x fs-3"></i>
                            </div>
                          </div>
                          <img src={image1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                          <div class="modal-header border-0 position-absolute">
                            <div
                              type="button"
                              class="fs-4 border-0 text-white btn"
                              data-bs-dismiss="modal"
                            >
                              <i class="fa-solid fa-x fs-3"></i>
                            </div>
                          </div>
                          <img
                            src={image2}
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <div class="modal-header border-0 position-absolute">
                            <div
                              type="button"
                              class="fs-4 border-0 text-white btn"
                              data-bs-dismiss="modal"
                            >
                              <i class="fa-solid fa-x fs-3"></i>
                            </div>
                          </div>
                          <img
                            src={image3}
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <div class="modal-header border-0 position-absolute">
                            <div
                              type="button"
                              class="fs-4 border-0 text-white btn"
                              data-bs-dismiss="modal"
                            >
                              <i class="fa-solid fa-x fs-3"></i>
                            </div>
                          </div>
                          <img
                            src={image4}
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <div class="modal-header border-0 position-absolute">
                            <div
                              type="button"
                              class="fs-4 border-0 text-white btn"
                              data-bs-dismiss="modal"
                            >
                              <i class="fa-solid fa-x fs-3"></i>
                            </div>
                          </div>
                          <img
                            src={image5}
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <div class="modal-header border-0 position-absolute">
                            <div
                              type="button"
                              class="fs-4 border-0 text-white btn"
                              data-bs-dismiss="modal"
                            >
                              <i class="fa-solid fa-x fs-3"></i>
                            </div>
                          </div>
                          <img
                            src={image6}
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev start-0"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <i
                    class="fa-solid fa-chevron-left fs-1"
                    aria-hidden="true"
                  ></i>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <i
                    class="fa-solid fa-chevron-right fs-1"
                    aria-hidden="true"
                  ></i>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
