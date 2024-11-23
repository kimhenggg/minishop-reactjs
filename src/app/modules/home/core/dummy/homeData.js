import {URLSVG} from "../../../../../_minishop/helper/component/media/URLSVG";
import {svgUrl} from "../../../../../_minishop/helper/AssetHelper";
import React from "react";

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

export {sevice}