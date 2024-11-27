import React from 'react';
import {Accordion} from "react-bootstrap";

const CategoryDropdown = () => {
    return (
        <div className="my-5">
            <h1 className="fs-2 mb-5">CATEGORIES</h1>
            <Accordion defaultActiveKey="0" flush>
                {/* Men's Shoes Section */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <span className="menu-title py-2">MEN'S SHOES</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="list-unstyled">
                            <li>Sport</li>
                            <li>Casual</li>
                            <li>Running</li>
                            <li>Jordan</li>
                            <li>Soccer</li>
                            <li>Football</li>
                            <li>Lifestyle</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Women's Shoes Section */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <span className="menu-title py-2">WOMEN'S SHOES</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="list-unstyled">
                            <li>Heels</li>
                            <li>Flats</li>
                            <li>Running</li>
                            <li>Sneakers</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Accessories Section */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <span className="menu-title py-2">ACCESSORIES</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="list-unstyled">
                            <li>Hats</li>
                            <li>Bags</li>
                            <li>Belts</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Clothing Section */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <span className="menu-title py-2">CLOTHING</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="list-unstyled">
                            <li>Shirts</li>
                            <li>Pants</li>
                            <li>Jackets</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>
                <h2 className="price-reage mt-5">PRICE RANGE</h2>
                <p className="fs-4 my-4">Price from:</p>
                <select className="form-content form-select form-select-lg mb-3 p-3 py-4 text-start fs-3" aria-label=".form-select-lg ">
                    <option selected value="1" className="fs-3">
                        1
                    </option>
                    <option value="2" className="fs-3">
                        200
                    </option>
                    <option value="3" className="fs-3">
                        300
                    </option>
                    <option value="4" className="fs-3">
                        400
                    </option>
                    <option value="5" className="fs-3">
                        1000
                    </option>
                </select>
                <p className="fs-4 my-4">Price to:</p>
                <select className="form-content form-select form-select-lg mb-3 p-3 py-4 text-start fs-3" aria-label=".form-select-lg ">
                    <option selected value="1" className="fs-3">
                        2000
                    </option>
                    <option value="2" className="fs-3">
                        4000
                    </option>
                    <option value="3" className="fs-3">
                        6000
                    </option>
                    <option value="4" className="fs-3">
                        8000
                    </option>
                    <option value="5" className="fs-3">
                        10000
                    </option>
                </select>
            </div>
        </div>
    );
};

export default CategoryDropdown;