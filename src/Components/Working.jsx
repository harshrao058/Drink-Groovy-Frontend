import NumberTicker from "./magicui/number-ticker";
import React from "react";
import { PiCity } from "react-icons/pi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";


const Working = () => {
  return (
    <>
      <div className="whitespace-pre-wrap w-full  text-3xl font-semibold tracking-tighter text-white bg-green-900 flex itmes-center justify-between px-4 py-2">
        <div className="flex  items-center justify-center gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <PiCity className="text-2xl" />
            <h1 className="text-2xl">Cites</h1>
          </div>

          <NumberTicker value={30}  className="tracking-tight text-2xl"/>
        </div>
        <div className="flex  items-center justify-center gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <RiEmotionHappyLine className="text-2xl" />
            <h1 className="text-2xl">Customers</h1>
          </div>
          <NumberTicker value={1005626} className="tracking-tight text-2xl" />
        </div>
        <div className="flex  items-center justify-center gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <FaUsers className="text-2xl" />
            <h1 className="text-2xl">Partners</h1>
            
          </div>

          <NumberTicker value={60} color="white" className="tracking-tight text-2xl" />
        </div>
        <div className="flex  items-center justify-center gap-6 w-1/3">
          <div className="flex items-center gap-2">
            <FaUsers className="text-2xl" />
            <h1 className="text-2xl">States</h1>
            
          </div>

          <NumberTicker value={12} color="white" className="tracking-tight text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Working;
