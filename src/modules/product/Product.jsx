import React from "react";
import "../../assets/css/product.css";
import SubProduct from "./subProduct/SubProduct";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";
import product5 from "../../assets/images/product-5.png";
import product6 from "../../assets/images/product-6.png";
import product7 from "../../assets/images/product-7.png";
import product8 from "../../assets/images/product-8.png";

const Product = () => {
  const shoes = [
    {
      img: product1,
      price: "$120.00",
      brand: "NIKE FREE RN 2019 ID",
    },
    {
      img: product2,
      brand: "NIKE FREE RN 2019",
      newPrice: "$80.00",
      bDiscount: "$120.00",
      discount: "50% off",
    },
    {
      img: product3,
      price: "$120.00",
      brand: "NIKE FREE RN 2019 ID",
    },
    {
      img: product4,
      price: "$120.00",
      brand: "NIKE FREE RN 2019 ID",
    },
    {
      img: product5,
      price: "$120.00",
      brand: "NIKE FREE RN 2019 ID",
    },
    {
      img: product6,
      brand: "NIKE FREE RN 2019 ID",
      newPrice: "$80.00",
      bDiscount: "$120.00",
      discount: "50% off",
    },
    {
      img: product7,
      brand: "NIKE FREE RN 2019 ID",
      price: "$120.00",
    },
    {
      img: product8,
      brand: "NIKE FREE RN 2019 ID",
      price: "$120.00",
    },
  ];
  return (
    <div>
      <section class="bg-light padding-top">
        <div class="container">
          <div class="text-center product-header">
            <h2 class="fw-bold ">New Shoes Arrival</h2>
            <p class="fs-4 text-secondary">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia;
            </p>
          </div>
          <div className="container">
            <div className="row">
              {shoes.map(
                ({ img, brand, price, newPrice, discount, bDiscount }) => {
                  return (
                    <SubProduct
                      img={img}
                      brand={brand}
                      price={price}
                      newPrice={newPrice}
                      discount={discount}
                      bDiscount={bDiscount}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
