import React, { useEffect, useRef } from 'react';
import slide5 from '../../public/slide5.jpg';
import { LuShoppingBag } from "react-icons/lu";
import gsap from 'gsap';

const SliderFive = () => {
  const textRef = useRef();
  const subTextRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.from(textRef.current, { 
      duration: 1, 
      y: -50, 
      opacity: 0, 
      ease: 'power3.out', 
      delay: 0.5 
    });
    gsap.from(subTextRef.current, { 
      duration: 1, 
      y: 50, 
      opacity: 0, 
      ease: 'power3.out', 
      delay: 1 
    });
    gsap.from(buttonRef.current, { 
      duration: 1, 
      scale: 0.5, 
      opacity: 0, 
      ease: 'back.out(1.7)', 
      delay: 1.5 
    });
    gsap.from(imageRef.current, { 
      duration: 1.5, 
      x: 100, 
      opacity: 0, 
      ease: 'power3.out', 
      delay: 0.5 
    });
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-between px-16 bg-[#F8D148]">
      <div>
        <div ref={textRef} className="font-oswald font-semibold uppercase text-7xl text-white">
          <h1>
            Made With 
            <br /> Topical <br /> <span className="text-[#F2B131]">
              Manogo
            </span>{" "}
          </h1>
        </div>
        <div ref={subTextRef} className="font-oswald font-semibold uppercase text-4xl text-gray-700">
          Groovy Fruit Drink - Mango
        </div>
        <div ref={buttonRef} className="flex items-center uppercase mt-8">
          <h1 className="bg-gray-700 text-white px-4 text-xl py-3 w-auto flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </h1>
        </div>
      </div>
      <img ref={imageRef} src={slide5} alt="" className="h-full" />
    </div>
  );
};

export default SliderFive;
