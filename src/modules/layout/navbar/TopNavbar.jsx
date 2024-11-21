import React from "react";

const TopNavbar = () => {
  return (
    <div class="nav-top container-fluid bg-dark d-flex align-items-md-center">
      <div class="container">
        <div class="navbar-header row d-flex justify-content-around align-items-md-center">
          <div class="col-md-4 top-navigation py-2">
            <p class="text-white fs-6 d-flex align-items-center m-0 ">
              <i class="fa-solid fa-phone"></i> + 855 9888 6847
            </p>
          </div>
          <div class="col-md-4 top-navigation py-2 ">
            <p class="text-white fs-6 d-flex align-items-center m-0">
              <i class="fa-solid fa-paper-plane"></i>
              SALKIMHENG1212@EMAIL.COM
            </p>
          </div>
          <div class="col-md-4 top-navigation py-2 ">
            <p class="text-white fs-6 d-flex align-items-center m-0">
              3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
