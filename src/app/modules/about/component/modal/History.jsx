import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {URLSVG} from "../../../../../_minishop/helper/component/media/URLSVG";
import {svgUrl} from "../../../../../_minishop/helper/AssetHelper";

const History = () => {
    return (
        <>
            <section className="history-container mt-5">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div
                                className="story-img px-3 position-relative d-flex flex-column justify-content-center align-items-center">
                                <a href="#" className="position-absolude">
                                      <span className=" justify-content-center align-items-center d-flex">
                                          <URLSVG src={svgUrl("play-button.svg")} width={50}/>
                                      </span>
                                </a>
                            </div>
                        </Col>
                        <Col md={7} className="d-flex flex-column justify-content-center align-items-center">
                            <div className="px-5 history-heading">
                                <h1>Stablished Sinced 1975</h1>
                                <p className="fs-4 text-secondary mb-4">
                                    But nothing the copy said could convince her and so it didn’t
                                    take long until a few insidious Copy Writers ambushed her,
                                    made her drunk with Longe and Parole and dragged her into
                                    their agency, where they abused her for their.
                                </p>
                                <p className="fs-4 text-secondary">
                                    But nothing the copy said could convince her and so it didn’t
                                    take long until a few insidious Copy Writers ambushed her.
                                </p>
                                <a href="#" className="btn fs-5 text-white mt-3">
                                    Shop now
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default History;