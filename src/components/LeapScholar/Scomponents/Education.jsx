import React from "react";

export const Education = () => {
  return (
    <>
      <h1 className="text-center   font-semibold text-[24px]">
        What's your highest level of education?
      </h1>

      <div className="w-full flex flex-wrap justify-around gap-4  mt-3">
        <Degree Degree="10th Standard" />
        <Degree Degree="12th Standard" />
        <Degree Degree="Bachelor's Degree" />
        <Degree Degree="Master's Degree" />
        <Degree Degree="MBBS / MD" />
      </div>

      <h1 className="text-center   font-semibold text-[24px] py-2">
        Expected or Gained Percentage
      </h1>

      <input
        type="text"
        placeholder="Grades"
        className="w-[70%] px-2 ml-20 mt-2   h-10 shadow-sm"
      />

      <h1 className="text-center   font-semibold text-[24px] py-2">
        Do you have a valid Passport?
      </h1>

      <div className="w-full flex flex-wrap justify-around gap-4  mt-4">
        <Degree Degree="Yes" />
        <Degree Degree="Applied" />
        <Degree Degree="No" />
      </div>

      <h1 className="text-center   font-semibold text-[24px] py-2">
        Year of graduation?
      </h1>

      <div className="w-[80%] h-10  shadow-md px-2 py-1 rounded-md mx-auto text-[16px] ">
        <select className="w-full h-full px-2 py-2 bg-white ">
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
    <div className="w-[180px] h-[60px]  rounded-md grid place-content-center text-[16px] border cursor-pointer shadow-md">
      {Degree}
    </div>
  );
};
