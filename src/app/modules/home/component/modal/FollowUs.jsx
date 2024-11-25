import React, { useState } from 'react';
import { Col, Container, Modal, Row } from "react-bootstrap";
import { followUsData } from "../../core/dummy/homeData";
import { Link } from "react-router-dom";
import {URLSVG} from "../../../../../_minishop/helper/component/media/URLSVG";
import {svgUrl} from "../../../../../_minishop/helper/AssetHelper";

const FollowUs = () => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleShow = (image) => {
        setSelectedImage(image);
        setModalShow(true);
    };

    const handleClose = () => {
        setModalShow(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <Container>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-md-8 text-center media-heading">
                        <h1 className="mb-5">Follow Us On Instagram</h1>
                        <p className="fs-4">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                        </p>
                    </div>
                </div>
            </Container>
            <Row>
                {followUsData.map(({ id, className, image }) => (
                    image && (
                        <Col lg={2} md={4} className="p-0" key={id}>
                            <Link onClick={() => handleShow(image)}>
                                <div className={`gallery img position-relative d-flex justify-content-center align-items-center ${className}`}>
                                    <span className="position-absolute d-flex justify-content-center align-items-center">
                                        <URLSVG src={svgUrl("instagram.svg")} width={25}/>
                                    </span>
                                </div>
                            </Link>
                        </Col>
                    )
                ))}
            </Row>

            {/* Centralized Modal */}
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <i className="fa-solid fa-x fs-3"></i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FollowUs;
