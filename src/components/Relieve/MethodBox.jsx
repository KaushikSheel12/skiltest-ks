import React from "react";
export const MethodBox = ({ icon, work, detail }) => {
  return (
    <div className="w-full px-2 py-4 h-fit cursor-pointer ">
      <div className="w-[80px] h-[80px] relative">{icon}</div>
      <div className="w-[140px] mt-5 h-[1px] bg-black"></div>
      <h2 className="ml-16">1.</h2>
      <h2 className="text-[30px] ">{work}</h2>
      <p className="text-[16px] text-green-900">{detail}</p>
    </div>
  );
};
