import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/Ti";
import Design from "./Design";

const PreHome = () => {
  return (
    <>
      <div className="w-full text-center grid place-content-center relative h-[350px] text-white border bg-blue-900">
        <h1 className="text-[33px] font-semibold">COLLEGE PREDICTOR 2023</h1>
        <p className="text-[21px]  ">
          Analyze the past and predict your future!
        </p>

        <div className="flex justify-between  w-[70%] mx-auto right-[270px]  absolute bottom-[-120px] items-center ">
          <div className="w-[400px] px-4 py-2 h-[200px] text-black shadow-lg bg-white rounded-lg   ">
            <div className="flex px-1 text-left  w-full items-center gap-5">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src="https://cache.careers360.mobi/images/frontend/desktop/predictor-img-01.png"
                  alt="png"
                  className="object-contain"
                  fill
                />
              </div>

              <h4 className="text-[18px] leading-6 ">
                Predict your Admission Chances
              </h4>
            </div>
            <div className="flex py-1 text-left items-center gap-4">
              <TiTick color="green" size={40} />
              <p className="text-sm  text-gray-600 leading-5">
                Get to know college admission chances based on your Rank, Home
                State, Caste, etc
              </p>
            </div>
            <div className="flex text-left items-center gap-4">
              <TiTick color="green" size={25} />
              <p className="text-sm  text-gray-600 leading-5">
                Know previous year's round wise course cutoff
              </p>
            </div>
          </div>

          <div className="w-[400px] px-4 py-2 h-[200px] text-black shadow-lg bg-white rounded-lg    ">
            <div className="flex px-1 text-left  w-full items-center gap-5">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src="https://cache.careers360.mobi/images/frontend/desktop/predictor-img-01.png"
                  alt="png"
                  className="object-contain"
                  fill
                />
              </div>
              <h4 className="text-[18px] leading-6 ">
                Predict your Admission Chances
              </h4>
            </div>
            <div className="flex py-1 text-left items-center gap-4">
              <TiTick color="green" size={40} />
              <p className="text-sm  text-gray-600 leading-5">
                Get to know college admission chances based on your Rank, Home
                State, Caste, etc
              </p>
            </div>
            <div className="flex text-left items-center gap-4">
              <TiTick color="green" size={25} />
              <p className="text-sm  text-gray-600 leading-5">
                Know previous year's round wise course cutoff
              </p>
            </div>
          </div>

          <div className="w-[400px] px-4 py-2 h-[200px] text-black shadow-lg bg-white rounded-lg    ">
            <div className="flex px-1 text-left  w-full items-center gap-5">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src="https://cache.careers360.mobi/images/frontend/desktop/predictor-img-01.png"
                  alt="png"
                  className="object-contain"
                  fill
                />
              </div>
              <h4 className="text-[18px] leading-6 ">
                Predict your Admission Chances
              </h4>
            </div>
            <div className="flex py-1 text-left items-center gap-4">
              <TiTick color="green" size={40} />
              <p className="text-sm  text-gray-600 leading-5">
                Get to know college admission chances based on your Rank, Home
                State, Caste, etc
              </p>
            </div>
            <div className="flex text-left items-center gap-4">
              <TiTick color="green" size={25} />
              <p className="text-sm  text-gray-600 leading-5">
                Know previous year's round wise course cutoff
              </p>
            </div>
          </div>
        </div>
      </div>
      <Design />
    </>
  );
};

export default PreHome;
