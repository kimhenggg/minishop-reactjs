import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import TopHeader from "./component/TopHeader";

const Header = () => {
    const [scrollNavbar,setScrollNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            if (window.scrollY > 130) {
                setScrollNavbar(true);
            }else if(window.scrollY < 140){
                setScrollNavbar(false);
            }
        }
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(scrollNavbar , " srollbar")
    return (
        <>
            <TopHeader/>
            <nav className={`main-navbar  ${scrollNavbar ? 'sticky' : ''}`}>
                <div className="container-fluid navbar navbar-expand-lg navbar-light p-0">
                    <div className="container small-navbar">
                        <Link
                            className="navbar-brand fw-bold fs-2 my-3 animate__animated animate__backInDown"
                            to="/"
                        >
                            Minishop
                        </Link>
                        <button
                            className="toggler-btn"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <div className="fs-2 d-flex align-items-center text-uppercase">
                                <i className="fa-solid fa-bars fs-2 me-2"></i>menu
                            </div>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end align-items-center animate__animated animate__backInRight"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav text-uppercase h-100 nav-cate">
                                <li className="nav-item me-5 my-3 nav-list">
                                    <Link
                                        className="nav-link active text-dark "
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown me-5 my-3 nav-list">
                                    <Link
                                        className="nav-link dropdown-toggle  text-dark "
                                        to="/shop"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        catalog
                                    </Link>
                                    <ul
                                        className="dropdown-menu bg-dark p-4 nav-dropdown mt-4"
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <Link
                                                to="/shop"
                                                className="dropdown-item fs-5 text-white mb-3"
                                            >
                                                Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/single-product"
                                                className="dropdown-item fs-5 text-white mb-3"
                                            >
                                                single product
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/cart"
                                                className="dropdown-item fs-5 text-white mb-3"
                                            >
                                                cart
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/checkout"
                                                className="dropdown-item fs-5 text-white "
                                            >
                                                checkout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item me-5 my-3 nav-list my-0">
                                    <Link className="nav-link  text-dark " to="/about">
                                        about
                                    </Link>
                                </li>
                                <li className="nav-item me-5 my-3 nav-list">
                                    <Link className="nav-link text-dark " to="/blog">
                                        blog
                                    </Link>
                                </li>
                                <li className="nav-item me-5 my-3 nav-list ">
                                    <Link to="/contact" className="nav-link text-dark ">
                                        contact
                                    </Link>
                                </li>
                                <li className="nav-item me-5 my-0 nav-list bg-danger my-0 p-3 shop-cate align-items-center d-flex">
                                    <Link to="/cart" className="nav-link text-dark shopping-card">
                                        <i className="fa-solid fa-cart-shopping fs-5"></i>[0]
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;