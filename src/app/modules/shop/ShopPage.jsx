import React from 'react';
import CustomBanner from "../../../_minishop/helper/component/custom/CustomBanner";
import FollowUs from "../../../_minishop/helper/component/modal/FollowUs";
import Shop from "./component/modal/Shop";

const ShopPage = () => {
    return (
        <>
            <CustomBanner/>
            <div >
                <Shop/>
            </div>
            <div>
                <FollowUs/>
            </div>
        </>
    );
};

export default ShopPage;