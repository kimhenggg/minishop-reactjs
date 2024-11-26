import React from 'react';
import {Container, Row} from "react-bootstrap";
import ProductCard from "../../../../../_minishop/helper/component/custom/ProductCard";

const NewArrival = () => {
    // lg={3} md={6} sm={6} xs={12

    return (
        <Container className="py-5 ">
            <Row className="my-5">
                <div className="text-center product-header">
                    <h2 className="fw-bold ">New Shoes Arrival</h2>
                    <p className="fs-4 text-secondary">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia;
                    </p>
                </div>
                <ProductCard lg={3} md={6} sm={6} xs={12}/>
            </Row>
        </Container>
    );
};

export default NewArrival;