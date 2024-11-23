import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import URLIMAGE from "../../../../../_minishop/helper/component/media/URLIAMGE";
import {imageUrl} from "../../../../../_minishop/helper/AssetHelper";

const ProductDeal = () => {
    const calculateTimeLeft = () => {
        const dealEnd = new Date();
        dealEnd.setMonth(dealEnd.getMonth() + 1, 0); // End of current month
        dealEnd.setHours(23, 59, 59, 999);

        const now = new Date();
        const difference = dealEnd.getTime() - now.getTime();

        return {
            days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
            hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
            seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(()=> {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    const formatTime = (time) => (time < 10 ? `0${time}` : time);
    return (
        <section>
            <Container>
                <Row>
                    <Col md={6}>
                        <URLIMAGE src={imageUrl("prod-1.png")} width="100%"/>
                    </Col>
                    <Col md={6}>
                        <div className="deal-time text-white p-3">
                            <span className="fs-5 fw-bold">DEAL OF THE MONTH</span>
                            <h1 className="fw-bold my-3 mt-4"> Deal of the month</h1>
                            <div className="timer pt-2 d-flex text-uppercase">
                                <div className="time">
                                    {formatTime(timeLeft.days)}<span>Days</span>
                                </div>
                                <div className="time">
                                    {formatTime(timeLeft.hours)}<span>Hours</span>
                                </div>
                                <div className="time">
                                    {formatTime(timeLeft.minutes)}<span>Minutes</span>                                </div>
                                <div className="time">
                                    {formatTime(timeLeft.seconds)}<span>seconds</span>                                </div>
                            </div>
                            <h2 className=" mt-5 mb-4">Nike Free RN 2019 iD</h2>
                            <div className="d-flex mb-4">
                                <h3 className="me-3 fs-1 fw-bold text-dark">$120.00</h3>
                                <h3 className="fs-1 fw-bold">$80.00</h3>
                            </div>
                            <ul className="d-flex ps-0 mt-5">
                                <li className="img single-prod-1"></li>
                                <li className="img single-prod-2"></li>
                                <li className="img single-prod-3"></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductDeal;