import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {URLSVG} from "../../helper/component/media/URLSVG";
import {svgUrl} from "../../helper/AssetHelper";

const Footer = () => {
    return (
        <>
            <section className="footer-container">
                <Container>
                    <Row className="position-relative">
                        <div className="mouse position-absolute">
                            <a href="#" className="mouse-icon d-flex justify-content-center align-items-center">
                                <div className="mouse-wheel d-flex flex-column justify-content-end align-items-center">
                                    {/*<i className="fa-solid fa-chevron-up"></i>*/}
                                    <URLSVG src={svgUrl("chevron-up.svg")}/>
                                </div>
                            </a>
                        </div>
                    </Row>
                    <Row className="mb-5">
                        <Col md={3} >
                            <div className="text-white footer-mini">
                                <h2 className="fs-4 fw-bold mb-3">MINISHOP</h2>
                                <p className="fs-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <ul className="ps-0 d-flex align-items-center">
                                    <li className="me-4" data-aos="fade-up" data-aos-duration="1000">
                                        <a href="#">
                                            <URLSVG src={svgUrl("instagram.svg")} width={30}/>
                                        </a>
                                    </li>
                                    <li className="me-4" data-aos="fade-up" data-aos-duration="1200"
                                    >
                                        <a href="#">
                                            <URLSVG src={svgUrl("twitter.svg")} width={30}/>
                                        </a>
                                    </li>
                                    <li className="me-4">
                                        <a href="#" className="text-white">
                                            <URLSVG src={svgUrl("facebook.svg")} width={30}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-menu text-white px-3">
                                <h2 className="fs-4 fw-bold">MENU</h2>
                                <ul className="mt-5">
                                    <li>Shop</li>
                                    <li>About</li>
                                    <li>Journal</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </Col>
                        <div className="col-md-3">
                            <div className="footer-menu text-white ps-3">
                                <h2 className="fs-4 fw-bold">HELP</h2>
                                <div className="d-flex">
                                    <ul className="mt-5 me-4">
                                        <li>Shipping Information</li>
                                        <li>Returns & Exchange</li>
                                        <li>Terms & Conditions</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                    <ul className="mt-5">
                                        <li>FAQs</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-menu footer-q text-white px-3">
                                <h2 className="fs-4 fw-bold">MENU</h2>
                                <div className="">
                                    <ul className="mt-5">
                                        <li className="mb-0">
                                            <i className="fa-solid fa-location-dot fs-4 me-4"></i>
                                            <p className="text">
                                                203 Fake St. Mountain View, San Francisco, California,
                                                <br/> USA
                                            </p>
                                        </li>
                                        <li className="mb-0">
                                            <i className="fa-solid fa-phone fs-4 "></i>
                                            <p className="text">+855 9886 847</p>
                                        </li>
                                        <li className="">
                                            <i className="fa-solid fa-envelope fs-4"></i>
                                            <p className="text">salkimheng1212@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6  ">
                            <div className="copyright mt-5 text-center">
                                <p>
                                    Copyright ©2024 All rights reserved | This template is made
                                    with
                                    <span className="fs-1">
                                        <i className="fa-solid fa-heart"></i>
                                     </span>
                                    by <span className="name fs-4 fw-bold">SKH</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Footer;