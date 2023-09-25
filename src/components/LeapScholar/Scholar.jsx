import React, { useState } from "react";
import ProgressBar from "../result/ProgressBar";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ChooseContry } from "./Scomponents/ChooseContry";
import { Preferred } from "./Scomponents/Preferred";
import { Education } from "./Scomponents/Education";
import { Duolingostatus } from "./Scomponents/Duolingostatus";

export const Scholar = () => {
  const CompoNents = [
    <ChooseContry />,
    <Preferred />,
    <Education />,
    <Duolingostatus />,
  ];

  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  const handleNextClick = () => {
    if (activeComponentIndex < CompoNents.length - 1) {
      setActiveComponentIndex(activeComponentIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (activeComponentIndex > 0) {
      setActiveComponentIndex(activeComponentIndex - 1);
    }
  };

  return (
    <>
      <div className="w-full md:h-[700px] h-full px-2 py-2">
        <ProgressBar progress={(activeComponentIndex + 1) * 25} />
        <div className=" text-[17px] w-[60%] mx-auto py-2 mt-4    ">
          <div
            onClick={handleBackClick}
            className="flex items-center gap-1 w-fit h-fit border bg-blue-500 px-8 py-2 text-white rounded-md  cursor-pointer"
          >
            <AiOutlineArrowLeft size={25} />
            <p>Back</p>
          </div>
        </div>
        <div className="w-[600px] px-2 h-fit mx-auto  mt-10">
          {CompoNents[activeComponentIndex]}
        </div>
        <div className=" text-[17px] w-[60%] mx-auto py-2 mt-4    ">
          <div
            onClick={handleNextClick}
            className="flex items-center gap-1 w-fit h-fit border bg-blue-500 px-10 py-2 text-white rounded-md  mx-auto cursor-pointer"
          >
            <p>Next</p>
            <AiOutlineArrowRight size={25} />
          </div>
        </div>
      </div>
    </>
  );
};
