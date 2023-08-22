import Image from "next/image";
import React from "react";
import Relation from "./Relation";
import CoursAbout from "./CoursAbout";

const SlidingText = () => {
  return (
    <>
      <div className="w-[70%] mx-auto mt-20 h-20  border border-[#184132] relative">
        <div className="slider-container text-center">
          <div className="slider-text text-[40px]">
            Skilzen Technology Hydrabad www.skilzen.com
          </div>
        </div>

        <div className="absolute top-[-160px] left-36">
          <div className="relative w-[420px] h-[420px] ">
            <Image
              src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644faf4bf2dc8d3c090856db_house-plan-p-800.png"
              alt="building"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>

       

       <div className="w-[70%] mx-auto mt-[95px] h-[90px]  border-4 border-[#184132] px-4 py-2 flex items-center justify-between ">
        <h1 className="font-semibold text-gray-700 text-[33px]"> REALIZATIONS</h1>

        <div className="flex items-center gap-5">
    <h3 className="font-semibold text-gray-700 text-[17px]">A collection of our finest architectural designs and innovations.</h3>
    <div className="relative w-[90px] h-[90px] ">
        <Image src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644faf4b54f3ddf6d169c129_module-title-img-p-500.png " alt="img" fill className="object-contain" />
    </div>
        </div>
       </div>
  <Relation/>
  <CoursAbout/>
    </>
  );
};

export default SlidingText;
