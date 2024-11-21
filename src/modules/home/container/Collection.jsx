import React from "react";
import "../../../assets/css/collection.css";

const Collection = () => {
  return (
    <>
      <div className="container p-4 pb-0">
        <div className="row">
          <div className="col-lg-4 col-md-12 p-0">
            <div className="man-collection img d-flex flex-column justify-content-end align-items-center">
              <div className="text-center text-white p-5 ">
                <span className="fs-5">MEN'S SHOES</span>
                <h1 className="fw-bold m-4">Men's Collection</h1>
                <p>
                  Separated they live in <br /> Bookmarksgrove right at the
                  coast of the Semantics, a large language ocean.
                </p>
                <a href="#" className="btn bg-dark rounded-pill">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 p-0">
            <div className="row align-items-stretch">
              <div className="col-md-12">
                <div className="women-collection img d-flex flex-column justify-content-center align-items-end">
                  <div className="text-white ">
                    <span className="fs-5 fw-bold">WOMEN'S SHOES</span>
                    <h1 className="fw-bold my-3">Women's Collection</h1>
                    <p>
                      Separated they live in Bookmarksgrove right at the coast
                      of the Semantics, a large language ocean.
                    </p>
                    <a href="#" className="btn bg-dark rounded-pill mt-3">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="discount img w-100 d-flex flex-column justify-content-center align-items-center">
                      <div className="text-black text-center">
                        <span className="fs-5">SUMMER SALE</span>
                        <h1 className="fw-bold m-3 text-dark">Extra 50% Off</h1>
                        <p className="text-secondary mb-3 p-3">
                          Separated they live in <br />
                          Bookmarksgrove right at the coast of the Semantics, a
                          large language ocean.
                        </p>
                        <a
                          href="#"
                          className="btn bg-dark rounded-pill text-white"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="best-seller img d-flex flex-column justify-content-center align-items-center">
                      <div className="text-white text-center ">
                        <span className="fs-5">SHOES</span>
                        <h1 className="fw-bold m-3">Best Sellers</h1>
                        <p className="mb-3 p-3">
                          Separated they live in <br />
                          Bookmarksgrove right at the coast of the Semantics, a
                          large language ocean.
                        </p>
                        <a
                          href="#"
                          className="btn bg-dark rounded-pill text-white"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
