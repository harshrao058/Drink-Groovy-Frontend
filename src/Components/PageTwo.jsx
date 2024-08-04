import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import Slider from "./Slider";
import SliderTwo from "./SliderTwo";
import SliderThree from "./SliderThree";
import SliderFour from "./SliderFour";
import SliderFive from "./SliderFive";

// const sliders = [<Slider />, <SliderTwo />, <SliderThree />, <SliderFour />, <SliderFive />];
const sliders = [
  <SliderTwo />,

  <SliderFour />,

  <Slider />,
  <SliderThree />,
  <SliderFive />,
];
// const sliders = [<Slider />];

const PageTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  return (
    <div className="relative w-full h-[85v] overflow-hidden z-1">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliders.map((Component, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {Component}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2"
      ></button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-x-1/2 text-white p-2"
      ></button>
    </div>
  );
};

export default PageTwo;
