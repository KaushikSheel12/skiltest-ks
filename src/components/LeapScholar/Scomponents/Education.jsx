import React from "react";

export const Education = () => {
  return (
    <>
      <h1 className="text-center  md:mt-0  mt-[-25px]  font-semibold text-[20px] md:text-[24px]">
        What's your highest level of education?
      </h1>

      <div className="w-full flex flex-wrap justify-around md:gap-5 gap-3 py-4 md:py-0  md:mt-6">
        <Degree Degree="10th Standard" />
        <Degree Degree="12th Standard" />
        <Degree Degree="Bachelor's Degree" />
        <Degree Degree="Master's Degree" />
        <Degree Degree="MBBS / MD" />
      </div>

      <h1 className="text-center  md:mt-6  font-semibold text-[20px] md:text-[24px] py-2">
        Expected or Gained Percentage
      </h1>

      <input
        type="number"
        placeholder="Grades"
        className="md:w-[70%] w-full px-6 md:px-2 md:ml-20 mt-2 border   rounded-md h-10 shadow-sm"
      />

      <h1 className="text-center   font-semibold text-[20px] md:text-[24px] py-4 md:py-6">
        Do you have a valid Passport?
      </h1>

      <div className="w-full flex flex-wrap justify-around md:gap-4  py- md:py-0 gap-3 md:mt-4">
        <Degree Degree="Yes" />
        <Degree Degree="Applied" />
        <Degree Degree="No" />
      </div>

      <h1 className="text-center   font-semibold text-[20px] md:text-[24px]  md:py-5 py-2">
        Year of graduation?
      </h1>

      <div className="md:w-[80%] w-full h-10  shadow-md   md:px-2 py-1 rounded-md mx-auto text-[16px] ">
        <select className="w-full h-full px-2    ">
          <option value="">Year of graduation</option>
          <option value="">2023 or later</option>
          <option value="">2022</option>
          <option value="">2021</option>
          <option value="">2020</option>
          <option value="">2019</option>
          <option value="">Before 2019</option>
        </select>
      </div>
    </>
  );
};

const Degree = ({ Degree }) => {
  return (
    <div className="md:w-[180px] w-[130px] h-[60px]  rounded-md grid place-content-center text-center text-sm md:text-[16px] border cursor-pointer shadow-md">
      {Degree}
    </div>
  );
};
