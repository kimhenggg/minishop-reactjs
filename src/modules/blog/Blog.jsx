import React from "react";
import "../../assets/css/about.css";
import SocialMedia from "../home/container/SocialMedia";

const Blog = () => {
  return (
    <>
      <div class="banner-wrap">
        <div class="container">
          <div class="row justify-content-center d-flex align-items-center">
            <div class="col-md-9">
              <div class="text-uppercase about-heading text-center d-flex flex-column align-items-center justify-content-center">
                <p class="fs-4">Home blog</p>
                <h1 class="fw-bold">blog </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
    </>
  );
};

export default Blog;
