import React from 'react';
import Banner from "./component/modal/Banner";
import NewArrival from "./component/modal/NewArrival";
import {Container} from "react-bootstrap";
import Collection from "./component/modal/Collection";
import ProductDeal from "./component/modal/ProductDeal";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <div className="bg-mid-light" style={{paddingBottom: "80px"}}>
                <NewArrival/>
            </div>
            <Collection/>
            <div className="bg-dark-yellow" style={{padding: "120px 0"}}>
                <ProductDeal/>
            </div>
        </div>
    );
};

export default HomePage;