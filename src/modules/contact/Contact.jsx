import React from "react";
import "../../assets/css/about.css";
import ContactSection from "./ContactSection";
import SocialMedia from "../home/container/SocialMedia";

const Contact = () => {
  return (
    <>
      <div className="banner-wrap">
        <div className="container">
          <div
            className="row justify-content-center d-flex align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="col-md-9">
              <div className="text-uppercase about-heading text-center d-flex flex-column align-items-center justify-content-center">
                <p className="fs-4">Home contect</p>
                <h1 className="fw-bold">Contect us </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
      <SocialMedia />
    </>
  );
};

export default Contact;
