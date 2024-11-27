import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {contactData} from "../../core/contactData";

const Contact = () => {
    return (
        <>
            <Container>
                <Row className="g-4">
                    {contactData?.map(items => {
                        const {id, description, title} = items;
                        return (
                            <Col md={3} className="px-3 d-flex" key={id} >
                                <div className="p-5 bg-white text-secondary w-100 box-shadow">
                                    <p className="fs-4 text-secondary">
                                        {title}
                                        <span className="fs-4 text-dark ">{description}</span>
                                    </p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
};

export default Contact;