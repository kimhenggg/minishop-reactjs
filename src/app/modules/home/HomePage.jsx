import React from 'react';
import Banner from "./component/modal/Banner";
import NewArrival from "./component/modal/NewArrival";
import Collection from "./component/modal/Collection";
import ProductDeal from "./component/modal/ProductDeal";
import CustomerFeedback from "../../../_minishop/helper/component/modal/CustomerFeedback";
import FollowUs from "../../../_minishop/helper/component/modal/FollowUs";
import Service from "../../../_minishop/helper/component/custom/Service";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            {/*New arrival*/}
            <div className="bg-mid-light" style={{paddingBottom: "80px"}}>
                <NewArrival/>
            </div>
            <Collection/>
            {/*Product month deal*/}
            <div className="bg-dark-yellow" style={{padding: "120px 0"}}>
                <ProductDeal/>
            </div>
            {/*Customer feedback*/}
            <div style={{padding: "120px 0"}}>
                <CustomerFeedback/>
            </div>
            {/*Follow us on instagram*/}
            <div>
                <FollowUs/>
            </div>
        </div>
    );
};

export default HomePage;