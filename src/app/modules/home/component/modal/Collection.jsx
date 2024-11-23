import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Collection = () => {
    return (
        <Container>
            <Row>
                <Col lg={4} md={6} sm={12} className="pe-md-0">
                    <div className="man-collection img d-flex flex-column justify-content-end align-items-center">
                        <div className="text-center text-white p-5 ">
                            <span className="fs-5">MEN'S SHOES</span>
                            <h1 className="fw-bold m-4">Men's Collection</h1>
                            <p>
                                Separated they live in <br/> Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            </p>
                            <Link className="btn p-3 px-4 text-white bg-dark rounded-pill">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12} className="ps-md-0">
                    <Row>
                        <Col md={12} >
                            <div className="women-collection img d-flex flex-column justify-content-center align-items-md-end">
                                <div className="text-white text-">
                                    <span className="fs-5 fw-bold">WOMEN'S SHOES</span>
                                    <h1 className="fw-bold my-3">Women's Collection</h1>
                                    <p>
                                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                    </p>
                                    <Link className="btn bg-dark rounded-pill mt-3">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="discount img w-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-black text-center">
                                    <span className="fs-5">SUMMER SALE</span>
                                    <h1 className="fw-bold m-3 text-dark">Extra 50% Off</h1>
                                    <p className="text-secondary mb-3 p-3">
                                        Separated they live in <br/>
                                        Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                    </p>
                                    <Link className="btn bg-dark rounded-pill text-white">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div
                                className="best-seller img d-flex flex-column justify-content-center align-items-center">
                                <div className="text-white text-center ">
                                    <span className="fs-5">SHOES</span>
                                    <h1 className="fw-bold m-3">Best Sellers</h1>
                                    <p className="mb-3 p-3">
                                        Separated they live in <br/>
                                        Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                    </p>
                                    <Link className="btn bg-dark rounded-pill text-white">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Collection;