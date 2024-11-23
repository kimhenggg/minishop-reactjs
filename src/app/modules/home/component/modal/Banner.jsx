import React from 'react';
import Slider from 'react-slick';
import URLIAMGE from "../../../../../_minishop/helper/component/media/URLIAMGE";
import {imageUrl} from "../../../../../_minishop/helper/AssetHelper";
import {Col, Container, Row} from "react-bootstrap";
import Service from "../custom/Service";
const Banner = () => {
    const options ={
        dots: true,
        fade: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        autoplay: true,
        animate: "animate__animated animate__backInUp"
    }

    return (
        <>
            <section className="hero-section">
                <Slider {...options}>
                    <div className="slide">
                        <Container>
                            <Row>
                                <div className="hero-banner d-flex align-items-center justify-content-center py-5">
                                    <div className="hero-content col-md text-uppercase w-100 h-100 animate__animated animate__backInUp">
                                        <div className="position-absolute w-100 p-5 ">
                                            <span className="btn bg-dark text-white fs-6 hero-btn ">
                                                #new arrival
                                            </span>
                                            <h1 className="fs-2 my-5 ">Shose Collection 2019</h1>
                                            <p className="fs-5 mt-5">
                                                A small river named Duden flows by their place and
                                                supplies it with the necessary regelialia. It is a
                                                paradisematic country.
                                            </p>
                                            <p className="mt-5">
                                                <a
                                                    href="#"
                                                    className="btn-banner fs-4 text-white text-uppercase text-decoration-none"
                                                >
                                                    discover now
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <Col md={6} >
                                        <div className="bg-banner position-relative">
                                            <URLIAMGE src={imageUrl("banner-1.png")} className="img-fluid" width="100%"/>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Container>
                    </div>
                    <div className="slide">
                        <Container>
                            <Row>
                                <div className="hero-banner d-flex align-items-center justify-content-center py-5">
                                    <div className="hero-content col-md text-uppercase w-100 h-100  ">
                                        <div className="position-absolute w-100 p-5 ">
                                            <span className="btn bg-dark text-white fs-6 hero-btn ">
                                                #new arrival
                                            </span>
                                            <h1 className="fs-2 my-5 ">New Shoes Winter Collection</h1>
                                            <p className="fs-5 mt-5">
                                                A small river named Duden flows by their place and
                                                supplies it with the necessary regelialia. It is a
                                                paradisematic country.
                                            </p>
                                            <p className="mt-5">
                                                <a
                                                    href="#"
                                                    className="btn-banner fs-4 text-white text-uppercase text-decoration-none"
                                                >
                                                    discover now
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <Col md={6}>
                                        <div className="bg-banner position-relative">
                                            <URLIAMGE src={imageUrl("banner-2.png")} width="100%"/>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Slider>
            </section>
            <Service/>
        </>
    );
};

export default Banner;