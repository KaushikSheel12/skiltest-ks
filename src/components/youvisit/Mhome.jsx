import Image from "next/image";
import React from "react";
import UniversityBox from "./UniversityBox";
import { universityData } from "./data";
const Mhome = () => {
  return (
    <>
      <div className="w-full bg-[#f4f4e6] text-center h-full border">
        <h1 className="font-semibold text-[25px] md:text-[37px]">
          Find the right college for you
        </h1>
        <p className="md:text-[19px] text-[14px]">
          Distance should not limit your college options
        </p>
        <div className="md:w-[410px] w-full px-2 py-2 h-[53px] bg-white mx-auto mt-4 border  items-center  flex justify-between ">
          <div>
            <input
              type="text"
              className="w-[300px] h-[53px] text-gray-700 border-none text-center"
              placeholder="Enter a college or university"
            />
          </div>

          <div className="w-[90px] h-[47px] bg-blue-600 text--white rounded-lg  grid place-content-center text-white cursor-pointer ">
            Search
          </div>
        </div>

        <div className="md:w-[80%] w-full mx-auto border h-full grid grid-cols-1 md:grid-cols-3 mt-10  px-2 py-2">
          {universityData.map((el, index) => {
            return (
              <div key={index}>
                <UniversityBox imgUrl={el.imgUrl} university={el.clgName} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mhome;
