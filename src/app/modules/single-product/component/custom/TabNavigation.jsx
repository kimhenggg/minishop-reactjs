import React from "react";
import clsx from "clsx";
import {Col, Row} from "react-bootstrap";
import {tabs} from "../../core/dummy/singleProductData";
import {URLSVG} from "../../../../../_minishop/helper/component/media/URLSVG";
import {svgUrl} from "../../../../../_minishop/helper/AssetHelper";

const TabNavigation = ({activeTab, setActiveTab}) => {


    return (
        <Row>
            {tabs.map(({id,className,label}) => (
                <Col lg={4} md={12} className={` ${className}`}>
                    <button
                        key={id}
                        className={clsx("tab-button w-100 fs-1", activeTab === id ? "bg-dark-yellow text-white" : "bg-mid-light")}
                        onClick={() => setActiveTab(id)}
                    >
                        {label}
                    </button>
                    <div className={clsx(activeTab === id ? "down-arrow" : "d-none")}>
                        <URLSVG src={svgUrl("down-arrow.svg")} width={30}/>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default TabNavigation;
