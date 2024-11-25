import {URLSVG} from "../../../../../_minishop/helper/component/media/URLSVG";
import {imageUrl, svgUrl} from "../../../../../_minishop/helper/AssetHelper";
import React from "react";
import URLIMAGE from "../../../../../_minishop/helper/component/media/URLIAMGE";

const sevice = [
    {
        id: 1,
        title: "Free Shipping",
        icon: <URLSVG src={svgUrl("shipping-box.svg")} width={70} height={70}/>,
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id: 2,
        title: "Support Customer",
        icon: <URLSVG src={svgUrl("customer-support.svg")} width={70} height={70}/>,
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id: 3,
        title: "Secure Payments",
        icon: <URLSVG src={svgUrl("payment.svg")} width={70} height={70}/>,
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
]

const customerData = [
    {
        id: 1,
        name: "John Heng",
        position: "Web developer",
        description: "",
    },
    {
        id: 2,
        name: "John Rith",
        position: "Font-end Developer",
        description: "",
    }, {
        id: 1,
        name: "John Y",
        position: "Back-end developer",
        description: "",
    }, {
        id: 1,
        name: "John Lin",
        position: "UI/UX designer",
        description: "",
    }, {
        id: 1,
        name: "John Huy",
        position: "Java developer",
        description: "",
    }, {
        id: 1,
        name: "John Wick",
        position: "Designer",
        description: "",
    },
]

const followUsData = [
    {
        id: 1,
        className: "img-popup-1",
        image: <URLIMAGE src={imageUrl("gallery-1.jpg")} width="100%"/>,
    },
    {
        id: 2,
        className: "img-popup-2",
        image: <URLIMAGE src={imageUrl("gallery-2.jpg")} width="100%"/>,
    },
    {
        id: 3,
        className: "img-popup-3",
        image: <URLIMAGE src={imageUrl("gallery-3.jpg")} width="100%"/>,
    },
    {
        id: 4,
        className: "img-popup-4",
        image: <URLIMAGE src={imageUrl("gallery-4.jpg")} width="100%"/>
    },
    {
        id: 5,
        className: "img-popup-5",
        image:  <URLIMAGE src={imageUrl("gallery-5.jpg")} width="100%"/>
    },
    {
        id: 6,
        className: "img-popup-6",
        image:  <URLIMAGE src={imageUrl("gallery-6.jpg")} width="100%"/>
    },
]
export {sevice,customerData,followUsData}