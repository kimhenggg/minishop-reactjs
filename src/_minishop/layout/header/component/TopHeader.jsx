import React from 'react';

const TopHeader = () => {
    return (
            <div className="nav-top container-fluid bg-black d-flex align-items-md-center">
                <div className="container">
                    <div className="navbar-header row d-flex justify-content-around align-items-md-center">
                        <div className="col-md-4 top-navigation py-2">
                            <p className="text-white fs-6 d-flex align-items-center m-0 ">
                                <i className="fa-solid fa-phone"></i> + 855 9888 6847
                            </p>
                        </div>
                        <div className="col-md-4 top-navigation py-2 ">
                            <p className="text-white fs-6 d-flex align-items-center m-0">
                                <i className="fa-solid fa-paper-plane"></i>
                                SALKIMHENG1212@EMAIL.COM
                            </p>
                        </div>
                        <div className="col-md-4 top-navigation py-2 ">
                            <p className="text-white fs-6 d-flex align-items-center m-0">
                                3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default TopHeader;