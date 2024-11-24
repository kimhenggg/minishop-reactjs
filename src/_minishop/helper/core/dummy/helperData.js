import URLIAMGE from "../../component/media/URLIAMGE";
import {imageUrl} from "../../AssetHelper";

const shoes = [
    {
        id: 1,
        image: <URLIAMGE src={imageUrl("product-1.png")} width="100%"/>,
        price: "$120.00",
        title: "NIKE FREE RN 2019 ID",
    },
    {
        id: 2,
        image: <URLIAMGE src={imageUrl("product-2.png")} width="100%"/>,
        prevPrice: "$120.00",
        discountPrice: "$80.00",
        discount: "50% off",
        title: "NIKE FREE RN 2019"
    },
    {
        id: 3,
        image: <URLIAMGE src={imageUrl("product-3.png")} width="100%"/>,
        price: "$120.00",
        title: "NIKE FREE RN 2019 ID",
    },
    {
        id: 4,
        image: <URLIAMGE src={imageUrl("product-4.png")} width="100%"/>,
        price: "$120.00",
        title: "NIKE FREE RN 2019 ID",
    },
    {
        id: 5,
        image: <URLIAMGE src={imageUrl("product-5.png")} width="100%"/>,
        price: "$120.00",
        title: "NIKE FREE RN 2019 ID",
    },
    {
        id: 6,
        image: <URLIAMGE src={imageUrl("product-8.png")} width="100%"/>,
        price: "$120.00",
        title: "NIKE FREE RN 2019 ID",
    },
    {
        id: 7,
        image: <URLIAMGE src={imageUrl("product-7.png")} width="100%"/>,
        price: "$120.00",
        title: "NIKE FREE RN 2019 ID",
    },
    {
        id: 8,
        image: <URLIAMGE src={imageUrl("product-6.png")} width="100%"/>,
        prevPrice: "$120.00",
        discountPrice: "$80.00",
        discount: "50% off",
        title: "NIKE FREE RN 2019"
    },
]

export {shoes}