import React from 'react';
import CustomBanner from "../../../_minishop/helper/component/custom/CustomBanner";
import Checkout from "./component/modal/Checkout";

const CheckoutPage = () => {
    return (
        <>
           <CustomBanner/>
            <div>
                <Checkout/>
            </div>
        </>
    );
};

export default CheckoutPage;