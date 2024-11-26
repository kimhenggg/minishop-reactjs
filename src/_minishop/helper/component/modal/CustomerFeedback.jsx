import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CustomerSay from "../custom/CustomerSay";
import {URLSVG} from "../media/URLSVG";
import {svgUrl} from "../../AssetHelper";

const CustomerFeedback = () => {
    return (
        <>
           <Container>
               <Row>
                   <Col lg={5} md={12}>
                       <div className="service d-flex justify-content-start align-items-center py-5 px-4" data-aos="fade-up">
                           <div className="icon position-relative me-5">
                               <span className="icon-before"></span>
                               <URLSVG src={svgUrl("bag-icon.svg")}/>
                               <span className="icon-after"></span>
                           </div>
                           <div>
                               <h2 className="fw-bold mb-3">Free Shipping</h2>
                               <p className="fs-4 text-secondary">
                                   Separated they live in. A small river named Duden flows
                               </p>
                           </div>
                       </div>
                       <div className="service d-flex justify-content-center align-items-center py-5 px-4" data-aos="fade-up">
                           <div className="icon position-relative me-5">
                               <span className="icon-before"></span>
                               <URLSVG src={svgUrl("giftbox-icon.svg")}/>
                               <span className="icon-after"></span>
                           </div>
                           <div>
                               <h2 className="fw-bold mb-3">Valuable Gifts</h2>
                               <p className="fs-4 text-secondary">
                                   Separated they live in. A small river named Duden flows
                               </p>
                           </div>
                       </div>
                       <div className="service d-flex justify-content-center align-items-center py-5 px-4" data-aos="fade-up">
                           <div className="icon position-relative me-5">
                               <span className="icon-before"></span>
                               <URLSVG src={svgUrl("credit-card.svg")}/>
                               <span className="icon-after"></span>
                           </div>
                           <div>
                               <h2 className="fw-bold mb-3">All Day Support</h2>
                               <p className="fs-4 text-white">
                                   Separated they live in. A small river named Duden flows
                               </p>
                           </div>
                       </div>
                       <div className="service d-flex justify-content-center align-items-center py-5 px-4" data-aos="fade-up">
                           <div className="icon position-relative me-5">
                               <span className="icon-before"></span>
                               <URLSVG src={svgUrl("customer-service.svg")}/>
                               <span className="icon-after"></span>
                           </div>
                           <div className="text-white">
                               <h2 className="fw-bold mb-3">All Day Support</h2>
                               <p className="fs-4 ">
                                   Separated they live in. A small river named Duden flows
                               </p>
                           </div>
                       </div>
                   </Col>
                   <Col lg={7} md={12}>
                       <CustomerSay/>
                   </Col>
               </Row>
           </Container>
        </>
    );
};

export default CustomerFeedback;