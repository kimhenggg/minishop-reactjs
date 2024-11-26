import React from 'react';
import CustomBanner from "../../../_minishop/helper/component/custom/CustomBanner";
import Service from "../../../_minishop/helper/component/custom/Service";
import History from "./component/modal/History";
import CustomerFeedback from "../../../_minishop/helper/component/modal/CustomerFeedback";
import FollowUs from "../../../_minishop/helper/component/modal/FollowUs";

const AboutPage = () => {
    return (
        <>
            <CustomBanner/>
            <Service/>
            <History/>
            <div style={{padding: "120px 0"}}>
                <CustomerFeedback/>
            </div>
            <div>
                <FollowUs/>
            </div>
        </>
    );
};

export default AboutPage;