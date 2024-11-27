import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {URLSVG} from "../../../../../_minishop/helper/component/media/URLSVG";
import {svgUrl} from "../../../../../_minishop/helper/AssetHelper";

const Cart = () => {
    return (
        <>
            <div className="cart-container">
                <Container className="w-100">
                    <Row className=" px-4">
                        <Col md={12}  data-aos="fade-up">
                            <div className="cart-list">
                                <table className="table table-borderless bg-dark-yellow">
                                    <thead className="table-list">
                                    <tr className="text-center">
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody className="tbody">
                                    <tr className="fs-1 ">
                                        <td className="remove-product">
                                            <Link to="" className="d-flex justify-content-center">
                                              <span className="btn d-flex align-items-center justify-content-center">
                                                  <URLSVG src={svgUrl("multiply.svg")} width={10}/>
                                              </span>
                                            </Link>
                                        </td>
                                        <td className="text-center d-flex justify-content-center">
                                            <div className="img-cart img-product-1"></div>
                                        </td>
                                        <td className="text-center product-name">
                                            <div>
                                                <h3 className="fw-bold fs-4">NIKE FREE RN 2019 ID</h3>
                                                <p className="fs-4 text-secondary">
                                                    Far far away, behind the word mountains, far from
                                                    the countries
                                                </p>
                                            </div>
                                        </td>
                                        <td className="price text-center fs-4">$4.90</td>
                                        <td className="quantity d-flex​ justify-content-center align-items-center">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    className="form-control input-number text-center fs-4 p-3 px-1"
                                                    value="1"
                                                    min="1"
                                                    max="100"
                                                />
                                            </div>
                                        </td>
                                        <td className="price text-center fs-4">$4.90</td>
                                    </tr>
                                    <tr className="fs-1  ">
                                        <td className="remove-product">
                                            <Link to="" className="d-flex justify-content-center">
                                              <span className="btn d-flex align-items-center justify-content-center">
                                                  <URLSVG src={svgUrl("multiply.svg")} width={10}/>
                                              </span>
                                            </Link>
                                        </td>
                                        <td className="text-center d-flex justify-content-center">
                                            <div className="img-cart img-product"></div>
                                        </td>
                                        <td className="text-center product-name">
                                            <div>
                                                <h3 className="fs-4 fw-bold">NIKE FREE RN 2019 ID</h3>
                                                <p className="fs-4 text-secondary">
                                                    Far far away, behind the word mountains, far from
                                                    the countries
                                                </p>
                                            </div>
                                        </td>
                                        <td className="price text-center  fs-4">$15.90</td>
                                        <td className="quantity d-flex​ justify-content-center align-items-center">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    className="form-control input-number text-center fs-4 p-3 px-1"
                                                    value="1"
                                                    min="1"
                                                    max="100"
                                                />
                                            </div>
                                        </td>
                                        <td className="price text-center  fs-4">$15.90</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <div
                            className="col-lg-5 col-md-6 mt-4"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            <div className="border border-1 p-5">
                                <h2 className="mb-5 fw-bold">CART TOTALS</h2>
                                <p className="d-flex mb-4 text-secondary">
                                    <span className="fs-3 w-50">Subtotal</span>
                                    <span className="fs-3 w-50"> $20.60</span>
                                </p>
                                <p className="d-flex mb-4 text-secondary">
                                    <span className="fs-3 w-50">Delivery</span>
                                    <span className="fs-3 w-50"> $00.60</span>
                                </p>
                                <p className="d-flex mb-4 text-secondary">
                                    <span className="fs-3 w-50">Discount</span>
                                    <span className="fs-3 w-50"> $2.00</span>
                                </p>
                                <div className="w-100 border my-5"></div>
                                <p className="d-flex mb-4 text-secondary">
                                    <span className="fs-3 w-50 text-uppercase ">Total</span>
                                    <span className="fs-3 w-50 text-dark fw-bold"> $20.60</span>
                                </p>
                            </div>
                            <Link to="" className="checkout-btn fs-5 w-100 btn fw-bold p-4 rounded-pill mt-4">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Cart;