import React from "react";
import Card from "./Card";
const Products = () => {
  return (
    <>
      <div className="products ">
        <h1 className="text-4xl font-semibold font tracking-tight text-center py-8" >
          Our <span className="text-green-600 border-b-2 border-green-600 ">Deltightful :)</span> Products
        </h1>
        <Card />
      </div>
    </>
  );
};

export default Products;
