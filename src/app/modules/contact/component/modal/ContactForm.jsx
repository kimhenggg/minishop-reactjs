import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {URLSVG} from "../../../../../_minishop/helper/component/media/URLSVG";
import {svgUrl} from "../../../../../_minishop/helper/AssetHelper";

const ContactForm = () => {
    return (
        <Container>
            <Row>
                <Col md={6} className="order-md-last p-3">
                    <div className="contact-form p-5 bg-white">
                        <input
                            className="form-control form-control-lg p-4 mb-4 fs-3"
                            type="text"
                            placeholder="Your Name"
                            aria-label=".form-control-lg example"
                        />
                        <input
                            className="form-control form-control-lg p-4 mb-4 fs-3"
                            type="email"
                            placeholder="Your Email"
                            aria-label=".form-control-lg example"
                        />
                        <input
                            className="form-control form-control-lg p-4 mb-4 fs-3"
                            type="text"
                            placeholder="Your Email"
                            aria-label=".form-control-lg example"
                        />
                        <textarea
                            className="form-control fs-3"
                            id="exampleFormControlTextarea1"
                            placeholder="Message"
                            rows="3"
                        ></textarea>
                        <Button className="send-btn fs-5 btn rounded-pill">
                            Send Message
                        </Button>
                    </div>
                </Col>
                <Col md={6} className="p-3">
                    <div className="w-100 wrong-content text-center d-flex flex-column justify-content-center align-items-center p-5">
                        <span className="warming-icon">
                            <URLSVG src={svgUrl("warning.svg")} width={50}/>
                        </span>
                        <h1 className="my-5">Sorry! Something went wrong.</h1>
                        <p className="fs-5">
                            This page didn't load Google Maps correctly. See the
                            JavaScript console for technical details.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;