import Image from "next/image";
import React from "react";
import { AutoScrollCards } from "./Scroll";

const Herosection = () => {
  return (
    <>
      <div className="md:w-[80%] w-full md:px-0 px-3  mx-auto  h-[500px]  md:flex  ">
        <div className="p-4 py-2 px-0">
          <h1 className="md:text-[94px] text-[45px] font-semibold text-[#080860e2] leading-[50px]  md:leading-[100px] ">
            How big is your world?
          </h1>
          <p className=" py-2 md:mt-5  md:pr-8 text-[18px]   leading-7 text-gray-600 ">
            Inspiring courses for the life you want to lead. <br /> Discover our
            fresh approach to a life-changing educational adventure.
          </p>
          <div className=" md:w-fit w-[95%] flex md:mx-0  mx-auto  place-content-center    px-8 hover:bg-[#14146e]   bg-[#1b1b99] text-white  mt-6 py-3 h-fit cursor-pointer  rounded-md">
            Contect
          </div>
        </div>

        <div className="  md:w-[90%] w-full  md:h-full  h-[300px]  border border-red-500">
          <div className="flex   w-full h-[50%] ">
            <div className="border  border-green-300 w-full h-full "></div>
            <div className="border  border-green-300 w-full h-full relative ">
              <Image
                fill
                alt="small-img"
                src="https://images.doclify.net/bayswater-web/d/4ea58663-b658-4d0a-b655-19a317a8cc43.png?enlarge=0&format=webp&w=500"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex border w-full h-[50%] ">
            <div className="border  border-green-300 w-full   relative ">
              <Image
                fill
                alt="small-img"
                src="https://images.doclify.net/bayswater-web/d/8ec9a6cc-809c-4207-9e74-f8043f43bded.png?enlarge=0&format=webp&w=600"
                className="object-fill rounded-full hover:rounded-none  "
              />
            </div>
            <div className="border border-green-300 w-full h-full  "></div>
          </div>
        </div>
      </div>
      <AutoScrollCards />
    </>
  );
};

export default Herosection;
