import React from "react";
import AboutBanner from "./aboutContent/AboutBanner";
import Customer from "../customer/Customer";
import Service from "../home/container/Service";
import SocialMedia from "../home/container/SocialMedia";

const About = () => {
  return (
    <>
      <AboutBanner />
      <Service />
      <section className="history-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="story-img px-3 position-relative d-flex flex-column justify-content-center align-items-center">
                <a href="#" className="position-absolude">
                  <span
                    className=" text-white justify-content-center align-items-center d-flex"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <i className="fa-solid fa-play fs-1"></i>
                  </span>
                </a>

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body position-relative">
                        <video
                          className="w-100"
                          controls
                          src="../image/couple.mp4"
                        ></video>
                        <div className="modal-header border-0 position-absolute">
                          <div
                            type="button"
                            className="fs-4 border-0 text-white btn"
                            data-bs-dismiss="modal"
                          >
                            <i className="fa-solid fa-x fs-3"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
              <div className="px-5 history-heading">
                <h1>Stablished Sinced 1975</h1>
                <p className="fs-4 text-secondary mb-4">
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her,
                  made her drunk with Longe and Parole and dragged her into
                  their agency, where they abused her for their.
                </p>
                <p className="fs-4 text-secondary">
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her.
                </p>
                <a href="#" className="btn fs-5 text-white mt-3">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Customer />
      <SocialMedia />
    </>
  );
};

export default About;
