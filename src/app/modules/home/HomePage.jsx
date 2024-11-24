import React from 'react';
import Banner from "./component/modal/Banner";
import NewArrival from "./component/modal/NewArrival";
import {Container} from "react-bootstrap";
import Collection from "./component/modal/Collection";
import ProductDeal from "./component/modal/ProductDeal";
import CustomFeedback from "./component/modal/CustomFeedback";

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
                <CustomFeedback/>
            </div>
        </div>
    );
};

export default HomePage;