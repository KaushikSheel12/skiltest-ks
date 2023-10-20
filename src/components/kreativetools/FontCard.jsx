import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/Bs";

export const FontCard = ({img}) => {
  return (
    <div className="w-fit h-fit border border-gray-400 px-3 py-2 shadow-lg mb-3  relative rounded-lg ">
      <div className="w-full h-fit ">
        <div className="w-[320px] h-[200px] relative bg-red-600 cursor-pointer rounded-md  ">
          <Image
            src={img}
            fill
            alt="img"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-between py-1 gap-3">
          <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[4px] rounded-md  shadow-lg ">
            <p className="">Craftwork</p>
          </div>
          <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[2px] rounded-md  flex items-center gap-2 shadow-lg ">
            <p>Free & Paid</p>
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};
