import Image from "next/image";
import React from "react";
import SlidingText from "./SlidingText";

const Coursehero = () => {
  return (
    <>
      <div className="md:w-[70%] md:h-[250px]  mx-auto px-4 py-4 flex relative gap-5 items-center justify-between">
        <div className="w-[50%] h-full border-l-4 border-[#184132]">
          <h1 className="px-4 py-4 text-[50px] font-semibold leading-[60px] text-gray-700">
            {" "}
            TURNING VISIONS <br /> INTO REALITY
          </h1>
          <div className="w-[200px]   h-[4px]  bg-[#184132]"></div>
        </div>
        <div className="w-[50%] flex items-center  mr-[59px]  justify-between h-[170px] ">
          <div className="w-[50%] px-2 py-2 flex relative items-center gap-5 h-[170px] border-[#184132] border-r-4    border-b-[3px] ">
            <div className="w-[300px] h-1 bg-[#184132] absolute top-0 right-[-100px] "></div>

            <div className="w-[90px] h-[90px] relative ml-9   ">
              <Image
                src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644fb94eb0874f0ac6fea560_design.svg"
                alt="img"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl">DSIGN</h1>
              <h4 className="text-lg mt-[-4px]">Innovative Concepts</h4>
            </div>
          </div>

          <div className="w-[50%] px-4 py-2 flex  items-center gap-5 h-[170px] border-[#184132]   ">
            <div className="w-[90px] h-[90px] relative  ">
              <Image
                src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644fb94d642592b496270797_sustainability.svg"
                alt="img"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl">SUSTAINABILITY</h1>
              <h4 className="text-lg mt-[-4px]">Green Building</h4>
            </div>
          </div>
        </div>
        <div className="border-[#184132] w-[687px] right-[-30px] top-52 border-l-[4px] px-4 py-4    absolute h-[100px]">
          <p className="text-lg text-gray-800 leading-6 ml-2">
            We create and engineer outstanding digital experiences, including
            e-commerce platforms, brand messaging, and communication solutions.
          </p>
        </div>
      </div>
      <SlidingText/>
    </>
  );
};

export default Coursehero;
