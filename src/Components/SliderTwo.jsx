import React from "react";
import anar from "../../public/banner/anar.jpg";
import { LuShoppingBag } from "react-icons/lu";

const SliderTwo = () => {
  return (
    <div className="h-screen w-full flex items-center justify-between pl-16  bg-[#AC2023]">
      <div>
        <div className="font-oswald font-<weight>  font-semibold uppercase text-7xl text-white  ">
          <h1 className="text-">
            Made With Ruby <br /> Like <br />{" "}
            <span className="text-[#FF80A3]">Pomegranates</span>{" "}
          </h1>
        </div>
        <div className="font-oswald font-<weight>  font-semibold uppercase text-4xl text-gray-100  ">
          Groovy Fruit Drink - Anar
        </div>
        <div className="w flex items-center uppercase mt-8">
          <h1 className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-xl py-3 w-auto flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </h1>
        </div>
      </div>
      <img src={anar} alt="" className="h-full" />
    </div>
  );
};

export default SliderTwo;
