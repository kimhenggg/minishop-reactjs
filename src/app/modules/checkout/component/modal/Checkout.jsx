import React from 'react';
import {Container, Row} from "react-bootstrap";
import PaymentReceive from "./PaymentReceive";

const Checkout = () => {
    return (
        <section className="form-container">
            <Container>
                <Row className="p-lg-5 p-md-4">

                    <h1 className="fs-2 fw-bold px-4">BILLING DETAILS</h1>
                    <div className="col-md-6 px-4 px-3">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                                    Firt Name
                                </label>
                                <input
                                    type="email"
                                    className="form-control fs-4"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 px-4 px-3">
                        <form action="">
                            <div className="mb-3 ">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                                    Last Name
                                </label>
                                <input
                                    type="email"
                                    className="form-control fs-4"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-12 my-3 px-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fs-4 mb-3">
                            State / Country
                        </label>
                        <select
                            className="form-select form-select-lg mb-3 fs-3 text-secondary"
                            aria-label="Large select example"
                        >
                            <option selected className="text-secondary fs-4 py-5">
                                Cambodia
                            </option>
                            <option value="1" className="text-secondary fs-4">
                                Japan
                            </option>
                            <option value="2" className="text-secondary fs-4">
                                USA
                            </option>
                            <option value="3" className="text-secondary fs-4">
                                France
                            </option>
                            <option value="4" className="text-secondary fs-4">
                                France
                            </option>
                            <option value="5" className="text-secondary fs-4">
                                France
                            </option>
                        </select>
                    </div>

                    <div className="col-md-6 px-4 my-3">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                                    Firt Name
                                </label>
                                <input
                                    type="email"
                                    className="form-control fs-4 mt-1 "
                                    placeholder="House number and street name"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 px-4 my-3">
                        <form action="">
                            <div className="mb-3 ">
                                <input
                                    type="email"
                                    className="form-control fs-4 mt-5"
                                    id="exampleInputEmail1"
                                    placeholder="Appartment, suite, unit etc: (optional)"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 px-4 my-3">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                                    Town / City
                                </label>
                                <input
                                    type="email"
                                    className="form-control fs-4"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 px-4 my-3">
                        <form action="">
                            <div className="mb-3 ">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                                    Postcode / ZIP *
                                </label>
                                <input
                                    type="email"
                                    className="form-control fs-4"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 px-4 my-3">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                                    Phone
                                </label>
                                <input
                                    type="email"
                                    className="form-control fs-4"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 px-4 my-3">
                        <form action="">
                            <div className="mb-3 ">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control fs-4"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="d-flex my-4 px-4">
                        <div className="form-check d-flex justify-content-center align-items-center me-5">
                            <input
                                className="form-check-input me-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label fs-5" htmlFor="flexRadioDefault1">
                                Create an Account?
                            </label>
                        </div>
                        <div className="form-check d-flex justify-content-center align-items-center">
                            <input
                                className="form-check-input me-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                checked
                            />
                            <label className="form-check-label fs-5" htmlFor="flexRadioDefault2">
                                Ship to different address
                            </label>
                        </div>
                    </div>
                </Row>
                <PaymentReceive/>
            </Container>
        </section>
    );
};

export default Checkout;