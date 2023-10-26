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
            <div className="w-fit cursor-pointer h-fit py-2 px-6  rounded-md mt-8 bg-green-400 hover:bg-green-700 flex items-center gap-2">
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
        <div className="w-full mt-20 h-[200px] px-20  grid place-content-center  bg-[#E7F2F0]">
          <div className="flex items-center   gap-x-52  justify-between">
            <div>
              <h2 className="text-[30px]  text-green-900">
                Have items you want to get rid of?
              </h2>
              <p className="text-[18px] text-[#8daa8d]">
                Recycle them through Relieve and see how easy and quick it is to
                turn unwanted items into positive climate impact.
              </p>
            </div>
            <div className="w-fit h-fit px-4 py-2 cursor-pointer bg-green-900 text-white flex items-center gap-2  rounded-md ">
              <p>Start now</p> <BsArrowRight color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  mt-20 h-screen relative">
        <Image
          fill
          src="https://www.relievefurniture.com/_next/image?url=%2Fstatic%2Fimages%2Fv3%2Foffice-furniture-in-land-fill.jpg&w=3840&q=75"
          alt="bg-img"
          loading="lazy"
          className="object-cover"
        />
        <div className=" absolute top-28  left-[130px] w-[85%] h-fit">
          <p className="text-[16px] text-white ">OUR MISSION</p>
          <h1 className="text-[60px]  text-white">
            Every year,
            <span className="border-b-2">
              45 million items of furniture are sent to landfill in Europe
              alone.
            </span>
            Does this bother you, too? Relieve supports organizations to
            connect, buy, and recycle lightly used office furniture and items,
            <span className="border-b-2">
              reducing costs to the environment and your business.
            </span>
          </h1>
          <div className="flex mt-20 items-center justify-between w-full h-fit">
            <p className="text-[20px] text-white">
              Does this mission speak to you? Or have project in mind
            </p>

            <div className="w-fit cursor-pointer h-fit py-2 px-6  rounded-md mt-8 bg-green-400 hover:bg-green-700 flex items-center gap-2">
              <p className="text-[14px]">Plan a call </p>
              <BsArrowRight color="black" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-20">
        <div className="w-full  h-[200px] px-20  grid place-content-center  bg-[#E7F2F0]">
          <div className="flex items-center   gap-x-52  justify-between">
            <div>
              <h2 className="text-[30px]  text-green-900">
                Circularity matters
              </h2>
              <p className="text-[18px] text-[#8daa8d]">
                Creating more circular economies are essential to the future of
                business, and can be the key to drastically lowering corporate
                carbon emissions… as well as costs
              </p>
            </div>
            <div className="w-[200px] h-fit px-2 py-2 cursor-pointer bg-green-900 text-white flex items-center justify-around rounded-md ">
              <p>Read more</p> <BsArrowRight color="white" />
            </div>
          </div>
        </div>

        <h1 className="text-[50px] mt-20 text-green-900">
          Furnishing Solutions
        </h1>
        <div className=" grid grid-cols-4 mt-3 gap-3">
          {PlateformImages?.map((el, index) => {
            return (
              <div className="w-[350px] h-fit">
                <div className="w-full h-[435px]  rounded-md relative ">
                  <Image
                    src="https://www.relievefurniture.com/_next/image?url=%2Fstatic%2Fimages%2Fv3%2Fconsultations.jpg&w=828&q=75"
                    alt="img"
                    fill
                    className="object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className="w-full h-[150px] ">
                  <div className="w-[140px] mt-5 h-[1px] bg-black"></div>
                  <h2 className="ml-16">1.</h2>
                  <h1 className="text-[30px] text-green-900">Consultations</h1>
                  <p className="text-[18px] text-[#777474]">
                    Get help from a qualified member of the Relieve team to
                    design and plan any office space with items we have in stock
                    and arriving soon.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full mt-20 h-[200px] px-20 border border-gray-600  grid place-content-center  ">
          <div className="flex items-center   gap-x-52  justify-between">
            <div>
              <h2 className="text-[30px]  text-green-900">
                Circularity matters
              </h2>
              <p className="text-[18px] text-[#8daa8d]">
                Creating more circular economies are essential to the future of
                business, and can be the key to drastically lowering corporate
                carbon emissions… as well as costs
              </p>
            </div>
            <div className="w-[200px] h-fit px-2 py-2 cursor-pointer bg-green-900 text-white flex items-center justify-around rounded-md ">
              <p>Read more</p> <BsArrowRight color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
