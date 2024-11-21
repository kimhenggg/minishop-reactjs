import React from "react";
import "../../assets/css/contact.css";

const ContactSection = () => {
  return (
    <>
      <section className="bg-light contect-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 px-3 d-flex">
              <div className="p-5 bg-white text-secondary">
                <p className="fs-4  w-100">
                  Address: 198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
            </div>
            <div className="col-md-3 px-3 d-flex">
              <div className="p-5 bg-white w-100">
                <p className="fs-4 text-secondary">
                  Phone:
                  <span className="fs-4 text-dark ">+855 988 868 47</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 px-3 d-flex">
              <div className="p-5 bg-white w-100">
                <p className="fs-4 text-secondary">
                  Phone:{" "}
                  <span className="fs-4 text-dark ">+855 988 868 47</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 px-3 d-flex">
              <div className="p-5 bg-white w-100">
                <p className="fs-4 text-secondary">
                  Phone: <span className="fs-4 text-dark">+855 988 868 47</span>
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5 ">
            <div className="col-md-6 order-md-last p-4">
              <div className="contact-form p-5 bg-white">
                <input
                  className="form-control form-control-lg p-4 mb-4 fs-3"
                  type="text"
                  placeholder="Your Name"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-lg p-4 mb-4 fs-3"
                  type="email"
                  placeholder="Your Email"
                  aria-label=".form-control-lg example"
                />
                <input
                  className="form-control form-control-lg p-4 mb-4 fs-3"
                  type="text"
                  placeholder="Your Email"
                  aria-label=".form-control-lg example"
                />
                <textarea
                  className="form-control fs-3"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="3"
                ></textarea>
                <a
                  href="#"
                  className="send-btn fs-5 btn rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Send Message
                </a>
              </div>
            </div>
            <div className="col-md-6 p-4">
              <div className="w-100 wrong-content text-center d-flex flex-column justify-content-center align-items-center p-5">
                <span className="warming-icon">
                  <i className="fa-solid fa-circle-exclamation fs-1"></i>
                </span>
                <h1 className="my-5">Sorry! Something went wrong.</h1>
                <p className="fs-5">
                  This page didn't load Google Maps correctly. See the
                  JavaScript console for technical details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
