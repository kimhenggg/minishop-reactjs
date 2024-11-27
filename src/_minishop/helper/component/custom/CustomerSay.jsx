import React from 'react';
import Slider from "react-slick";
import { customerData } from "../../../../app/modules/home/core/dummy/homeData";
import "../../../assets/css/component/customerSay.css"
const CustomerSay = () => {
    const options = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="p-3 customer-say-slider">
            <div className="customer-heading mb-5" data-aos="fade-up">
                <h1>Our satisfied customer says</h1>
                <p className="fs-4 mt-5 text-secondary">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in
                </p>
            </div>
            <Slider {...options}>
                {customerData.map(items => {
                    const { id, name, position } = items;
                    return (
                        <div className="slide" key={id}>
                            <div className="customer-feedback">
                                <div className="user-img user-1 mb-5">
                                    <span
                                        className="quote-icon position-absolute d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-quote-left fs-3"></i>
                                    </span>
                                </div>
                                <div className="mb-4 text">
                                    <p className="fs-3 ps-5 mb-5 text-secondary line">
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <h1 className="mb-4 fs-2 fw-bold">{name}</h1>
                                    <span className="text-uppercase fs-5 mb-5">{position}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default CustomerSay;
