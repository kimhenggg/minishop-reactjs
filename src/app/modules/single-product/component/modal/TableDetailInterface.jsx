import React, {useState} from 'react';
import TabNavigation from "../custom/TabNavigation";
import TabContent from "../custom/TabContent";

const TableDetailInterface = () => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <>
            {/* Navigation for Tabs */}
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Content for Tabs */}
            <TabContent activeTab={activeTab} />
        </>
    );
};

export default TableDetailInterface;