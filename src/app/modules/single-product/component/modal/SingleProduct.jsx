import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import URLIMAGE from "../../../../../_minishop/helper/component/media/URLIAMGE";
import {imageUrl, svgUrl} from "../../../../../_minishop/helper/AssetHelper";
import {URLSVG} from "../../../../../_minishop/helper/component/media/URLSVG";
import TableDetailInterface from "./TableDetailInterface";

const SingleProduct = () => {
    return (<>
        <Container>
            <Row>
                <Col lg={6} md={12} className="pe-lg-5 py-5 ">
                    <div className="img-prod">
                        <URLIMAGE src={imageUrl("product-1.png")} width="100%"/>
                    </div>
                </Col>
                <Col lg={6} md={12} className="ps-lg-5 py-5 single-prod-detail ">
                    <h1 className="display-4 ">Nike Free RN 2019 iD</h1>
                    <div className="d-flex justify-content-start my-4">
                        <div className="fs-4 d-flex align-content-center text-center text-warning gap-2">
                            5.0
                            <div className="rate-icon fs-2 d-flex align-items-center text-warning">
                                <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                            </div>
                        </div>
                        <div className="fs-4 ms-5 rating-price">
                            100
                            <span className="fs-4 ms-2">Rating </span>
                        </div>
                        <div className="fs-4 ms-5 rating-price">
                            500
                            <span className="fs-4 ms-2">Sold </span>
                        </div>
                    </div>
                    <h2 className="display-5 my-5">$120.00</h2>
                    <p className="fs-4 mb-4 text-secondary">
                        A small river named Duden flows by their place and supplies it
                        with the necessary regelialia. It is a paradisematic country, in
                        which roasted parts of sentences fly into your mouth.
                    </p>
                    <p className="fs-4 text-secondary">
                        On her way she met a copy. The copy warned the Little Blind
                        Text, that where it came from it would have been rewritten a
                        thousand times and everything that was left from its origin
                        would be the word "and" and the Little Blind Text should turn
                        around and return to its own, safe country. But nothing the copy
                        said could convince her and so it didn’t take long until a few
                        insidious Copy Writers ambushed her, made her drunk with Longe
                        and Parole and dragged her into their agency, where they abused
                        her for their.
                    </p>
                    <select
                        className="form-content form-select form-select-lg mb-3 mt-5 text-uppercase border-1 fs-4 text-center"
                        aria-label=".form-select-lg example">
                        <option selected className="fs-4">
                            Small
                        </option>
                        <option value="2" className="fs-4">
                            Medium
                        </option>
                        <option value="3" className="fs-4">
                            Large
                        </option>
                        <option value="4" className="fs-4">
                            Extra Large
                        </option>
                    </select>
                    <div className="d-flex align-content-center input-item my-4">
                        <button className="prev-btn btn border p-3 me-3">
                            <URLSVG src={svgUrl("plus.svg")} width={20}/>
                        </button>
                        <input type="text" className="form-control border-1 text-center fs-4" value="1"/>
                        <button className="next-btn btn border p-3 ms-3">
                            <URLSVG src={svgUrl("minus.svg")} width={20}/>
                        </button>
                    </div>
                    <p className="fs-5 text-dark">80 piece available</p>
                    <div className="d-flex">
                        <Button className="pay-btn btn rounded-pill text-white fs-5 me-4">
                            Add to Card
                        </Button>
                        <Button className="buy-btn btn rounded-pill text-white fs-5">
                            Buy now
                        </Button>
                    </div>
                </Col>
            </Row>
            <div>
                <TableDetailInterface/>
            </div>
        </Container>
    </>);
};

export default SingleProduct;