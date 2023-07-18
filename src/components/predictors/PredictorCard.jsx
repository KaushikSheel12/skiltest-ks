import React from "react";
import { TiTick } from "react-icons/Ti";
import ClgBox from "./ClgBox";

const PredictorCard = () => {
  return (
    <>
      <div className="border border-gray-300 bg-white px-2 py-1 mt-4  h-96">
        <h4 className="md:text-[14px] text-[12px]  text-[#3b5eb0] font-semibold">
          St Mary's Engineering College, Bhuvanagiri
        </h4>
        <p className="text-gray-500 py-1  md:text-[13px] text-[11px] ">Ownership: Private</p>

        <div className=" border-t-2 border-b-2  border-gray-200 h-60 px-0 py-1 mt-4 ">
          <h3 className="md:text-sm text-[11px] font-semibold  text-gray-500">
            Your Chances are{" "}
            <span className="bg-[#1a9d1a]   text-white px-1  rounded-md">
              Good
            </span>{" "}
            in 6 out of Courses
          </h3>

          <ClgBox />
        </div>
      </div>
    </>
  );
};

export default PredictorCard;
