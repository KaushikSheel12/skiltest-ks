import React from "react";

export const Preferred = () => {
  return (
    <>
      <h1 className="text-center   font-semibold text-[24px]">
        What's your preferred intake?
      </h1>

      <div className="w-full flex flex-wrap justify-around gap-4  mt-3">
        <Year year="Sept 2023" />
        <Year year="Jan 2024" />
        <Year year="May 2024" />
        <Year year="Sept 2024" />
      </div>

      <h1 className="text-center   font-semibold text-[24px] py-2">
        What do you wish to pursue?
      </h1>

      <div className="w-full flex flex-wrap justify-around gap-4  mt-3">
        <Year year="PG Diploma" />
        <Year year="Master's" />
        <Year year="Master's" />
        <Year year="MBA" />
        <Year year="PhD" />
        <Year year="Not decided" />
      </div>
    </>
  );
};

const Year = ({ year }) => {
  return (
    <div className="w-[180px] h-[60px]  rounded-md grid place-content-center text-[16px] border cursor-pointer shadow-md">
      {year}
    </div>
  );
};
