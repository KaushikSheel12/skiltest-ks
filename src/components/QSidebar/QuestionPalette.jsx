import React from "react";
import { Dot } from "../Dot";

export const QuestionPalette = () => {
  return (
    <>
      <div className="flex gap-3 py-0 px-0 ml-3   ">
        <h2 className="font-semibold py-1 px-0 text-[19px]">
          Question Palette
        </h2>
      </div>

      <div className="w-full grid grid-cols-3 px-0 ml-3 ">
        <div className="flex items-center">
          <Dot color={"green"} />
          <p className="text-[14px]  text-[gray] px-1 py-1">Attempted</p>
        </div>
        <div className="flex items-center">
          <Dot color={"black"} />
          <p className="text-[14px]  text-[gray] px-0 ml-1 py-1">Unattempted</p>
        </div>
        <div className="flex items-center ml-3">
          <Dot color={"gray"} />
          <p className="text-[14px]  text-[gray] px-1 py-1">Unseen</p>
        </div>
        <div className="flex items-center mt-[-4px]">
          <Dot color={"orange"} />
          <p className="text-[14px]  text-[gray] px-1 py-1">Pending</p>
        </div>

      </div>


      <div  className="w-full h-auto  px-2 py-1 mt-1">

       <select  className=" md:w-full   md:h-8  border-none text-center  bg-yellow-400 rounded-md  hover:bg-black hover:text-white  ">
        <option value="maths">Question Section</option>
        <option value="english">English</option>
        <option value="upsc">UPSC</option>
        <option value="iit">IIT</option>
       </select>
      </div>
    </>
  );
};
