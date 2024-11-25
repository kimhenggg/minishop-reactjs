import React from 'react';
import {Col, Row} from "react-bootstrap";
import {shoes} from "../../core/dummy/helperData";
import {Link} from "react-router-dom";
import {URLSVG} from "../media/URLSVG";
import {svgUrl} from "../../AssetHelper";

const ProductCard = () => {
    return (
        <>
            {shoes?.map(items=> {
                const {id,image,price,title,discount,discountPrice,prevPrice} = items;
                return (
                    <Col lg={3} md={6} sm={6} xs={12} key={id} className="g-5">
                        <div className="product-item p-0 position-relative w-100 ">
                            <div className="d-flex position-relative mb-3">
                                {image}
                                <span className="status fs-4 text-uppercase position-absolute top-0 ">
                                  {discount}
                                </span>
                                <div className="overlay position-absolute d-flex justify-content-center align-items-center ">
                                    <div className="overlay-circle fs-1 ">
                                        <URLSVG src={svgUrl("circle-icon.svg")} width={250}/>
                                    </div>
                                </div>
                            </div>
                            <div className="product-detail position-relative">
                                <div className="text-detail bg-white w-100 py-4 px-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fs-5 text-uppercase text-secondary">
                                          lifestyle
                                        </span>
                                        <div className="rate-icon fs-2 d-flex align-items-center text-warning">
                                            <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                            <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                            <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                            <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                            <URLSVG src={svgUrl("star-icon.svg")} width={18}/>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold my-3">{title}</h5>
                                    <div className="price-item d-flex justify-content-between">
                                        <span className="position-relative">
                                          <span className="fs-4 text-dark me-3">{price}</span>
                                          <span className="fs-4 text-dark ms-3 text-decoration-line-through position-absolute top-0 w-100 h-100 end-0">
                                            {prevPrice}
                                          </span>
                                        </span>
                                        <span className="fs-4">{discountPrice}</span>
                                    </div>
                                </div>
                                <div className="button-wraper d-flex mb-5 position-absolute w-100 px-3 top-0">
                                    <Link className="w-50 btn bg-dark text-white py-3 px-0 me-2">
                                        Add to card +
                                    </Link>
                                    <Link className="w-50 btn bg-white text-black py-3 px-0">
                                        Buy now
                                        <i className="fa-solid fa-cart-shopping fs-5"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </>
    );
};

export default ProductCard;