import React from 'react';

import {Col, Container, Row} from "react-bootstrap";
import {sevice} from "../../../../app/modules/home/core/dummy/homeData";

const Service = () => {
    return (
        <section className="mt-5">
            <Container>
                <Row>
                    {sevice.map(items => {
                        const {id,icon,title} = items
                        return (
                            <Col  md={4} data-aos="fade-up" data-aos-duration="300" key={id}>
                                <div className="text-center p-4 card-contect">
                                        <span className="fs-1">
                                            {icon}
                                        </span>
                                        <h2 className="my-5 fw-bold fs-4">{title}</h2>
                                        <p className="fs-4 text-secondary">
                                            Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Service;