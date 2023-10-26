import Image from "next/image";
import React from "react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/Bs";
import { PlatformBox } from "./PlatformBox";
import { PlateformImages } from "./data/ImgData";

export const RelieveLandingPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const Platforms = ["CHAIRS", "OFFICE CHAIRS", "DESKS", "TABLES", "STORAGE"];

  const handleSelect = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="w-full h-[730px] relative ">
        <Image
          src="https://www.relievefurniture.com/_next/image?url=%2Fstatic%2Fimages%2Fv3%2Fremove.jpg&w=3840&q=75"
          alt="bg-img"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="w-[610px] px-8 py-8  bg-white rounded-2xl absolute bottom-16 left-[140px] h-[420px] mx-auto z-10 ">
          <div className="flex items-center absolute left-0 -top-16 ">
            <button className="w-fit py-7 px-6  text-[17px] bg-white rounded-t-[14px]">
              Remove
            </button>
            <button className="w-fit py-7 px-6  text-[17px] bg-white rounded-t-[14px]">
              Buy
            </button>
            <button className="w-fit py-7 px-6  text-[17px] bg-white rounded-t-[14px]">
              Our Impact
            </button>
          </div>

          <h1 className="md:text-[40px]  leading-[48px]  ">
            The most{" "}
            <span className="text-green-500 border-b-2 border-green-500">
              sustainable
            </span>{" "}
            way to remove unwanted office furniture
          </h1>

          <p className="text-[20px] mt-16 font-[530px] text-gray-500">
            Manage, recycle or get rid of old or unwanted office furniture, or
            handle a whole office removal, sustainably and at zero cost.
          </p>

          <div className="flex  gap-16 items-center w-full h-fit">
            <div className="w-fit cursor-pointer h-fit py-2 px-6 border rounded-md mt-8 bg-green-400 hover:bg-green-700 flex items-center gap-2">
              <p className="text-[14px]">Get started now </p>{" "}
              <BsArrowRight color="black" />
            </div>
            <p className="text-[14px] cursor-pointer border-b-[1px] text-gray-500 mt-8">
              Discover our removal solutinons
            </p>
          </div>
        </div>
      </div>
      <div className="w-[85%] h-fit py-4 border border-red-700 mx-auto">
        <h1 className="text-[30px] text-green-900">
          Available now on the platform
        </h1>
        <div className="flex mt-4 items-center gap-6">
          {Platforms?.map((el, index) => {
            return (
              <div
                key={index}
                onClick={() => handleSelect(index)}
                className={`w-[200px] text-gray-600 text-center cursor-pointer py-[1px] transition ease-in-out duration-150 rounded-md text-[13px] ${
                  activeTab === index ? "bg-[#ccffcc]" : ""
                }`}
              >
                {el}
              </div>
            );
          })}
        </div>
        <div className=" grid grid-cols-4 mt-3 gap-3">
          {PlateformImages?.map((el, index) => {
            return (
              <PlatformBox key={index} img={el} toptext="11 KG OF CO2 SAVED" />
            );
          })}
        </div>
        <div className="h-[1000px] w-2"></div>
      </div>
    </>
  );
};
