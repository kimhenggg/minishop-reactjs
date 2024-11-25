import React from 'react';
import Banner from "./component/modal/Banner";
import NewArrival from "./component/modal/NewArrival";
import Collection from "./component/modal/Collection";
import ProductDeal from "./component/modal/ProductDeal";
import CustomerFeedback from "./component/modal/CustomerFeedback";
import FollowUs from "./component/modal/FollowUs";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            {/*New arrival*/}
            <div className="bg-mid-light" style={{paddingBottom: "80px"}}>
                <NewArrival/>
            </div>
            <Collection/>
            {/*Prodeuct month deal*/}
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