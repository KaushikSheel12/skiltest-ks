import React from "react";
import Pheader from "./Pheader";
import { TiTick } from "react-icons/Ti";

const Predictors = () => {
  return (
    <>
      <Pheader />
      <div className="flex h-full bg-slate-50 mt-4  w-[80%] mx-auto py-2 px-2  gap-4  ">
        <div className="border border-red-500 h-6 w-1/3  text-center">
          FILTER'S
        </div>
        <div className="border border-red-500 h-full  py-2 px-2  w-[50%]   ">
          <div className="border flex justify-between items-center   border-green-500  h-10 w-full  bg-[#d5f9d5]  mx-auto rounded-sm  py-0 px-2">
            <h2 className="text-[15px]">Get Personalised Report in PDF </h2>
            <div className="flex justify-center border text-sm cursor-pointer  text-white  bg-[#209120] px-2 py-[2px] w-20 h-7  rounded-full  items-center">
              <TiTick size={19} color="black" />
              Send
            </div>
          </div>
          <h3 className="text-[16px] font-semibold  py-1 ">
            Showing 2 Colleges in TS EAMCET Counselling
          </h3>


<div className="border border-black bg-white px-2 py-1  h-96">
    <h4 className="text-[14px] text-[#3b5eb0] font-semibold">St Mary's Engineering College, Bhuvanagiri</h4>
    <p className="text-gray-500 py-1  text-[13px] ">Ownership: Private</p>
</div>

        </div>
      </div>
    </>
  );
};

export default Predictors;
