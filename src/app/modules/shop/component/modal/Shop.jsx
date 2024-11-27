import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "../../../../../_minishop/helper/component/custom/ProductCard";
import CategoryDropdown from "../custom/CategoryDropdown";


const Shop = () => {
    return (
        <>
            <div className="bg-light">
                <Container>
                    <Row className="py-5">
                        <Col lg={10} md={8} className="order-md-last">
                            <Row>
                                <ProductCard lg={4} md={6} sm={12}/>
                            </Row>
                        </Col>
                        <Col lg={2} md={4}>
                            <CategoryDropdown/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Shop;