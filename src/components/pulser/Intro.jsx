import React from "react";

const Intro = ({ toptext, headtext, paragraph }) => {
  return (
    <>
      <div className="w-[80%] mx-auto h-fit flex justify-center    text-center  mt-[140px]   p-6 md:mt-20">
        <div className=" w-[50%] ">
          <div className="w-fit h-fit px-2 py-1 mx-auto  rounded-lg flex items-center text-sm font-semibold bg-[#68dd68] text-[#1e451e] leading-6  ">
            {toptext}
          </div>
          <h1 className="text-[35px]  font-bold text-[#2d652d] py-3 leading-[42px]">
            {headtext}
          </h1>
          <p className="text-[18px]  font-semibold text-[gray] text-center  ">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
