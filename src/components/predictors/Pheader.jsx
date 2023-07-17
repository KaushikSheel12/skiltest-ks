import React from "react";

const Pheader = () => {
  return (
    <>
      <div className="w-full border border-black py-1 px-2 h-[70px]">
        <div className="w-[80%] h-full  border border-red-700 mx-auto flex justify-between px-2 py-1 items-center  ">

            <p className="text-gray-500 ">Summary of Your Prediction</p>

<div className="h-full w-40 border border-green-500 "></div>

<div className="h-full w-40 border border-green-500 "></div>

<div className="h-full w-40 border border-green-500 "></div>


<div className="flex">

<p className="text-blue-700 text-sm ">Change Inputs</p>
</div>

        </div>
      </div>
    </>
  );
};

export default Pheader;
