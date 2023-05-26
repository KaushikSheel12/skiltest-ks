import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Dot } from "./Dot";

export const Accordian = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <div className="flex items-center w-full justify-between border-b-2 mt-0 ">
        <p className="mb-1 ml-2 font-normal">Testing</p>

        <div className="mr-3 " >
          {isActive ? (
            <IoIosArrowUp
              cursor="pointer"
              size={20}
              onClick={() => setIsActive((prev) => !isActive)}
            />
          ) : (
            <IoIosArrowDown
              cursor="pointer"
              size={20}
              onClick={() => setIsActive((prev) => !isActive)}
            />
          )}
        </div>
      </div>
      <div className="flex items-center space-x-6  px-2 ">
        <div className="flex space-x-2 items-center">
          <Dot color={"green"} />
          <span>3</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"black"} />
          <span>33</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"gray"} />
          <span>47</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"orange"} />
          <span>13</span>
        </div>
      </div>
      {isActive && <div className="">{children}</div>}
 

 <div className="  px-2 py-4 mt-[-2px]">
  <div className="flex gap-5 justify-center">

    <button className="px-1  py-2 w-32 h-9  grid place-content-center hover:bg-black hover:text-white  border rounded border-black text-black bg-white">Instructions</button>
    <button className="px-2 py-2 w-32 h-9  grid place-content-center hover:bg-black hover:text-white border rounded border-black text-black bg-white">All Questions</button>
  </div>
  
  <button className="px-2  mb-2 mt-2 py-2 w-[278px] h-9  grid place-content-center mx-auto  content-center  border rounded  text-black hover:bg-amber-300 bg-amber-400">Submit</button>
 </div>


    </div>
  );
};
