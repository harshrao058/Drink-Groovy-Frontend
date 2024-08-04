import React from "react";
import { DollarSign, Zap, Moon, Filter } from "lucide-react";
import { FaTrophy, FaClock, FaRecycle } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { GiFruitTree } from "react-icons/gi";
import { IoBan } from "react-icons/io5";
import allpro from '../../public/allpro.png'



export default function Features() {
  return (
    <div className="mx-auto max--7xl px-16 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto ext-center w-full">
        <h2 className="mt-6 text-2xl items-center justify-center font-bold leading-tight w-full text-black sm:text-4xl lg:text-4xl flex flex-col">
          <p>COMPLETES YOUR DRINKS, ANY TIME! ANY WHERE! </p>
          <p className="flex"> </p>
          <div className="w-full pt-4 pb-1 ">
          <img src={allpro} alt="" className=" mx-auto  " />
        </div>
        </h2>
        {/* <IoIosTimer className="text-4xl"/> */}
        <p className="px-64 text-center text-base leading-relaxed text-gray-600">
          Every sip of our juices takes you down memory lane. <br /> You don’t just
          enjoy the diversity of flavours but dive into a pool of quality fruit
          extracts. <br /> Groovy is not just a drink, it's a story spun together in
          the form of joyful and bright squeezy packs.
        </p>
        {/* <img
          src="../../logo.png"
          alt="Drink Packs"
          className="max-w-full m-auto h-[12vh]"
        /> */}
      </div>
      <div className="my-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 px-8">
        <div className="border-zinc-200 border-2 py-4 px-4 rounded-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <GiFruitTree  className="h-9 w-9 text-green-500 " />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-black">
            NATURAL TASTE
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Our fruit not only matches the flavour of fresh fruit but also
            serves as a fantastic flavour booster to the drink.
          </p>
        </div>
        <div className="border-zinc-200 border-2 py-4 px-4 rounded-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <IoBan className="h-9 w-9 text-red-500" />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-black">
            NO ADDED COLORS/PRESERVATIVES
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Using fresh fruit is always nice to store your fruits in a locked
            hub. No more fridge full of unloved fruit and veg.
          </p>
        </div>
        <div className="border-zinc-200 border-2 py-4 px-4 rounded-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaRecycle className="h-9 w-9 text-green-500" />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-black">
            MINIMUM WASTE
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Using fresh fruit is always nice to store your fruits in a locked
            hub. No more fridge full of unloved fruit and veg.
          </p>
        </div>
      </div>
       
    </div>
  );
}
