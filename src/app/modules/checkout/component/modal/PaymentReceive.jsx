import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const PaymentReceive = () => {
    return (
        <>
            <Row className="p-lg-5">
                <Col md={6} className="col-md-6 " data-aos="fade-up">
                    <div className="bg-light  p-5 ">
                        <h2 className="check-header">CART TOTAL</h2>
                        <p className="d-flex text-secondary my-5">
                            <span className="fs-4 w-50">Subtotal</span>
                            <span className="fs-4 w-50">$20.60</span>
                        </p>
                        <p className="d-flex text-secondary my-5">
                            <span className="fs-4 w-50">Delivery</span>
                            <span className="fs-4 w-50">$0.00</span>
                        </p>
                        <p className="d-flex text-secondary my-5">
                            <span className="fs-4 w-50">Discount</span>
                            <span className="fs-4 w-50">$3.00</span>
                        </p>
                        <p className="d-flex text-secondary my-5">
                            <span className="fs-4 w-100 border "></span>
                        </p>
                        <p className="d-flex text-secondary my-5 pb-5">
                            <span className="fs-4 w-50 text-uppercase">Total</span>
                            <span className="fs-4 w-50 fw-bold">$17.60</span>
                        </p>
                    </div>
                </Col>
                <Col md={6} data-aos="fade-up">
                    <div className="bg-light p-5">
                        <h2 className="check-header">PAYMENT METHOD</h2>
                        <div className="ps-4">
                            <div className="form-check d-flex align-items-center my-5">
                                <input
                                    className="form-check-input me-4"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label
                                    className="form-check-label fs-4"
                                    htmlFor="flexRadioDefault1"
                                >
                                    Direct Bank Tranfer
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center my-5">
                                <input
                                    className="form-check-input me-4"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label
                                    className="form-check-label fs-4"
                                    htmlFor="flexRadioDefault2"
                                >
                                    Check Payment
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center my-5">
                                <input
                                    className="form-check-input me-4"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label
                                    className="form-check-label fs-4"
                                    htmlFor="flexRadioDefault2"
                                >
                                    Paypal
                                </label>
                            </div>

                            <div className="form-check d-flex align-items-center my-5">
                                <input
                                    className="form-check-input me-4"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label fs-4" htmlFor="flexCheckDefault">
                                    I have read and accept the terms and conditions
                                </label>
                            </div>
                        </div>
                        <Link to="" className="order-btn btn rounded-pill w-100 fs-5 text-white">
                            Place an order
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default PaymentReceive;