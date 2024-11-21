import React from "react";
import "../../../assets/css/product.css";

const SubProduct = ({ img, brand, price, newPrice, discount, bDiscount }) => {
  return (
    <div class="col-md-3 ">
      <div
        class="mb-5 "
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-once="true"
      >
        <div class="product-item  p-0 position-relative w-100 ">
          <a href="#" class="d-flex position-relative mb-3">
            <img class="w-100" src={img} alt="product1" />
            <span class="status fs-4 text-uppercase position-absolute top-0 ">
              {discount}
            </span>
            <div class="overlay position-absolute d-flex justify-content-center align-items-center ">
              <div class="overlay-circle fs-1 ">
                <i class="fa-solid fa-circle fs-1"></i>
              </div>
            </div>
          </a>
          <div class="product-detail position-relative">
            <div class="text-detail bg-white w-100 py-4 px-4">
              <div class="d-flex justify-content-between align-items-center">
                <span class="fs-5 text-uppercase text-secondary">
                  lifestyle
                </span>
                <div class="rate-icon fs-2 d-flex align-items-center text-warning">
                  <i class="fa-regular fa-star me-1"></i>
                  <i class="fa-regular fa-star me-1"></i>
                  <i class="fa-regular fa-star me-1"></i>
                  <i class="fa-regular fa-star me-1"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
              <h5 class="fw-bold my-3">{brand}</h5>
              <div class="price-item d-flex justify-content-between">
                <span className="position-relative">
                  <span class="fs-4 text-dark me-3">{price}</span>
                  <span class="fs-4 text-dark ms-3 text-decoration-line-through position-absolute top-0 w-100 h-100 end-0">
                    {bDiscount}
                  </span>
                </span>
                <span class="fs-4">{newPrice}</span>
              </div>
            </div>
            <div class="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
              <a href="#" class="w-50 btn bg-dark text-white py-3 px-0 me-2">
                Add to card +
              </a>
              <a href="#" class="w-50 btn bg-white text-black py-3 px-0">
                Buy now
                <i class="fa-solid fa-cart-shopping fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubProduct;
