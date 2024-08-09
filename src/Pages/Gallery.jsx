import React from 'react'
import a from "../../public/a.jpeg";
import b from "../../public/b.jpeg";
import c from "../../public/c.jpeg";
import d from "../../public/d.jpeg";
import e from "../../public/e.jpeg";
import f from "../../public/f.jpeg";
import g from "../../public/g.jpeg";
import h from "../../public/h.jpeg";

const Gallery = () => {
  const dist = [a, b, c, e, f, g,  h];

  return (
    <div className="pt-16">
      <div className="flex px-16 flex-col items-center justify ">
          <h2 className="mt-8 text-4xl items-center justify-center leading-tight w-full text-black sm:text-4xl lg:text-4xl flex flex-col mb-4 ">
            <p className="font-semibold text-4xl">Our Distributers </p>
          </h2>
          <div className="flex flex-wrap justify-between items-stretch rounded hover:scale-15">
            {dist.map((val, key) => {
              return (
                <div className="rounded-xl ">
                  <img src={val} alt="" className="w-96  " />
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default Gallery