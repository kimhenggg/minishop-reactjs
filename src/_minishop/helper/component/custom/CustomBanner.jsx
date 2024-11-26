import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {customBanner} from "../../core/dummy/helperData";

const CustomBanner = () => {
    const location = useLocation(); // Access the current route

    //Find the matching banner for the current path
    const currentBanner = customBanner.find((item) =>
        location.pathname.includes(item.route) // Check if route matches
    );

    console.log(currentBanner , "current banner")
    return (
        <>
            {/* Render the banner only if a matching route is found */}
            {currentBanner && (
                <div className="banner-wrap">
                    <Container>
                        <Row className="justify-content-center d-flex align-items-center">
                            <Col md={9} data-aos="fade-up">
                                <div className="text-uppercase about-heading text-center d-flex flex-column align-items-center justify-content-center">
                                    <p className="fs-4">{`Home / ${currentBanner.title}`}</p>
                                    <h1 className="fw-bold">{currentBanner.title}</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </>
    );
};

export default CustomBanner;