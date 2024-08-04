import React from "react";

const ProductCard = ({ image, backgroundColor, price, desc }) => {
  return (
    <div className="w-72  rounded-lg overflow-hidden shadow-md h0">
      <div
        className="h-64 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: `#${backgroundColor}` }}
      >
        <img src={image} alt="Product" className="h-60 py-4 hover:scale-125 transition-all ease-in-out " />
      </div>
      <p className="tracking-tight py-1 px-4">{desc}</p>
      <h1 className="font-semibold py-1 px-4">Rs. {price}</h1>

      
    </div>
  );
};

export default ProductCard;
