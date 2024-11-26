import React from 'react';
import CustomBanner from "../../../_minishop/helper/component/custom/CustomBanner";
import SingleProduct from "./component/modal/SingleProduct";

const SingleProductPage = () => {
    return (
        <>
            <CustomBanner/>
            <section className="single-product-container">
                <SingleProduct/>
            </section>
        </>
    );
};

export default SingleProductPage;