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
      <div className="flex px-16 flex-col items-center justify">
          <h2 className="mt-6 text-2xl items-center justify-center font-bold leading-tight w-full text-black sm:text-4xl lg:text-4xl flex flex-col mb-4">
            <p>Our Distributers </p>
          </h2>
          <div className="flex flex-wrap gap-4 rounded">
            {dist.map((val, key) => {
              return (
                <div className="rounded-xl">
                  <img src={val} alt="" className="w-80 " />
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default Gallery