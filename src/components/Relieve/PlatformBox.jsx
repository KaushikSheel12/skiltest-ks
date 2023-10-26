import Image from "next/image";
import React from "react";
import { LuEuro } from "react-icons/lu";
export const PlatformBox = ({ img, toptext }) => {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-[435px]  rounded-md relative ">
        <Image
          src={img}
          alt="img"
          fill
          className="object-cover rounded-md"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 text-[10px] w-fit py-[2px] rounded-md h-fit bg-[#e6ffe6] px-2">
          {toptext}
        </div>
      </div>
      <div className="w-full h-[150px] ">
        <p className="text-[18px] text-green-900 ">
          Black and aluminum designer chair
        </p>
        <p className="text-[11px] text-gray-500">COMFORTABLE CHAIRS</p>
        <div className="flex  items-center gap-1">
          <LuEuro size={37} />
          <h3 className="text-[36px] ">90</h3>
          <p className="text-[10px]  -mt-5 text-gray-500">EX VAT</p>
        </div>
        <div className="flex  items-center  gap-2 ">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <p className="text-[13px] text-green-900">32 items available</p>
        </div>
        <div className="flex  items-center  gap-2 ">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <p className="text-[13px] text-green-900">Ettereek, 1040</p>
        </div>
      </div>
    </div>
  );
};
