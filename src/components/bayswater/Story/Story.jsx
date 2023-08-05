import React, { useState } from "react";
import { personData } from "./data";
import Image from "next/image";

const Story = () => {
  let data = personData;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="w-full h-full px-4 py-4 bg-slate-300 group " id="change">
        <h1 className="px-2 py-2 ml-14 text-[64px]">All stories</h1>
        <div className="grid grid-cols-11 px-4 w-[94%] gap-8  ml-6 mt-5  ">
          {data.map((el, index) => {
            if (index % 2 === 0) {
              return (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`w-[125px] h-[160px] mb-5 ml-5 rounded-lg relative z-30   cursor-pointer ${
                    hoveredIndex === index ? "zoom-in" : ""
                  }`}
                >
                  <Image
                    src={el.personImageUrl}
                    alt="img"
                    fill
                    className="object-fit   rounded-lg"
                  />
                  {hoveredIndex === index && (
                    <div className="popup w-[125px] bg-slate-100 text-center text-black mt-20">
                      <span>{el.personName}</span>
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <div className="w-[140px] h-[180px] rounded-lg relative"></div>
              );
            }
          })}
        </div>
      </div>
      <style jsx>{`
        #change {
          background-color: ${hoveredIndex !== null
            ? data[hoveredIndex].bgColor
            : ""};
          transition: background-color 0.3s ease;
        }

        .zoom-in {
          transform: scale(1.5); /* Increased zoom level, adjust as desired */
          transition: transform 0.3s ease;
        }

        .popup {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 4px;
        }

        .popup span {
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default Story;
