import React from 'react';
import '../index.css'
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
import p6 from "../../public/p6.png";
import p7 from "../../public/p7.png";

const NewMarquee = () => {
  const items = [
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    p1,
    "Jucies Served with Love",
    p2,
    "no preservatives",
    p3,
    "100% natural fruit juice",
    p4,
    "No added colors",
    p6,
    "no preservatives",
    
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap  flex font-semibold uppercase ">
      <div className="flex animate-marquee">
        
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 m-2 flex font-semibold items-center"
          >
            {typeof item === 'string' && !item.endsWith(".png") ? (
              <span className="text-3xl tracking-tight font-semibold text-whit">{item}</span>
            ) : (
              <img src={item} alt={`marquee-item-${index}`} className="h-16 -auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMarquee;
